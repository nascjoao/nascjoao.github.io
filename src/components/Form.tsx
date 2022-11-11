import { useState, useRef, FormEvent } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { IoReloadOutline } from 'react-icons/io5'
import ReCAPTCHA  from 'react-google-recaptcha'
import EmojiPicker from './EmojiPicker'
import styles from '../styles/components/Form.module.scss'

export default function Form() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [recaptchaFailed, setRecaptchaFailed] = useState(false)
  const [formIsBeingSent, setFormIsBeingSent] = useState(false)
  const [formSubmited, setFormSubmited] = useState(false)
  const [textAreaIsActive, setTextAreaIsActive] = useState(false)
  const messageTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      await recaptchaValidation();
      const entries = [fields.name, fields.email, fields.message];
      const hasEmptyField = entries.some((entry) => entry === '');
  
      if (!hasEmptyField) {
        setFormIsBeingSent(true)
        setFields({
          name: '',
          email: '',
          message: ''
        })
        await fetch('/api/email', {
          method: 'POST',
          body: JSON.stringify({
            name: entries[0],
            email: entries[1],
            message: entries[2]
          })
        })
        setFormSubmited(true)
        setFormIsBeingSent(false)
      } 
    } catch (error) {
      if (error instanceof Error && error.message === 'ReCAPTCHA precisa ser resolvido') {
        setRecaptchaFailed(true)
      }
    }
  }

  async function recaptchaValidation() {
    const token = recaptchaRef.current!.getValue();
    const response = await fetch('/api/recaptchaVerify', {
      method: 'POST',
      body: JSON.stringify({ value: token }),
    });
    const validation = await response.json();
    if (validation.success) console.log(validation.success);
    else throw new Error('ReCAPTCHA precisa ser resolvido')
  }

  if (formSubmited) return (
    <>
      <p>Obrigado por entrar em contato! 😊</p>
      <button 
        style={{ display: 'flex', alignItems: 'center', padding: '10px 15px', marginTop: '25px' }}
        onClick={() => { setFormSubmited(false) }}
      >
        <IoReloadOutline style={{ marginRight: '10px' }} />
        Enviar outra mensagem
      </button>
    </>
  )

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Seu nome:
        <input
          disabled={formIsBeingSent}
          type="text"
          name="name"
          value={fields.name}
          required
          onChange={({ target: { value: name } }) => setFields((current) => ({...current, name }))}
        />
      </label>
      <label>
        Seu e-mail:
        <input
          disabled={formIsBeingSent}
          type="email"
          name="email"
          value={fields.email}
          required
          onChange={({ target: { value: email } }) => setFields((current) => ({...current, email }))}
        />
      </label>
      <label>
        Sua mensagem:
        <div className="emojiTriggerLocation">
          <textarea
            disabled={formIsBeingSent}
            name="message"
            value={fields.message}
            required
            onChange={({ target: { value: message } }) => setFields((current) => ({...current, message }))}
            ref={messageTextAreaRef}
            onFocus={() => setTextAreaIsActive(true)}
          />
          { textAreaIsActive && (
            <EmojiPicker 
              onEmojiClick={(emoji) => {
                setFields((current) => ({ ...current, message: `${current.message}${emoji}` }))
                if (messageTextAreaRef.current) {
                  messageTextAreaRef.current.focus()
                }
              }}
            />
          ) }
        </div>
      </label>
      { Object.values(fields).some((field) => field !== '') && (
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          theme="dark"
          onChange={() => setRecaptchaFailed(false)}
          style={{
            marginBottom: '25px',
            boxShadow: recaptchaFailed ? '0 0 20px -5px red' : 'none',
            width: 'fit-content'
          }}
        />
      ) }
      <button type="submit" disabled={formIsBeingSent}><FaPaperPlane />{ formIsBeingSent ? 'Enviando' : 'Enviar'}</button>
    </form>
  )
}
