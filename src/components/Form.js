import { useState, useRef } from 'react'
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
  const [recaptchaValidated, setRecaptchaValidated] = useState(false)
  const [formIsBeingSent, setFormIsBeingSent] = useState(false)
  const [formSubmited, setFormSubmited] = useState(false)
  const messageTextAreaRef = useRef()

  async function handleSubmit(event) {
    event.preventDefault();
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
  }

  async function recaptchaChange(value) {
    const response = await fetch('/api/recaptchaVerify', {
      method: 'POST',
      body: JSON.stringify({ value }),
    });
    const validation = await response.json();
    if (validation.success) setRecaptchaValidated(true);
  }

  if (formSubmited) return (
    <>
      <p>Obrigado por entrar em contato! 😊</p>
      <button 
        style={{ display: 'flex', alignItems: 'center', padding: '10px 15px', marginTop: '25px' }}
        onClick={() => { setFormSubmited(false); setRecaptchaValidated(false) }}
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
          />
          <EmojiPicker 
            onEmojiClick={(emoji) => {
              setFields((current) => ({ ...current, message: `${current.message}${emoji}` }))
              messageTextAreaRef.current.focus()
            }}
          />
        </div>
      </label>
      { Object.values(fields).some((field) => field !== '') && (
        <ReCAPTCHA
          onChange={recaptchaChange}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          theme="dark"
          style={{ marginBottom: '25px' }}
        />
      ) }
      <button type="submit" disabled={!recaptchaValidated || formIsBeingSent}><FaPaperPlane />{ formIsBeingSent ? 'Enviando' : 'Enviar'}</button>
    </form>
  )
}
