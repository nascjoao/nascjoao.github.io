import { useRef, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { ReCAPTCHA } from 'react-google-recaptcha'

export default function Form() {
  const inputName = useRef()
  const inputEmail = useRef()
  const inputMessage = useRef()
  const [recaptchaValidated, setRecaptchaValidated] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault();
    const entries = [inputName.current.value, inputEmail.current.value, inputMessage.current.value];
    const hasEmptyField = entries.some((entry) => entry === '');

    if (!hasEmptyField) {
      await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({
          name: entries[0],
          email: entries[1],
          message: entries[2]
        })
      }) 
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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Seu nome:
        <input type="text" name="name" ref={inputName} />
      </label>
      <label>
        Seu e-mail:
        <input type="text" name="_replyto" ref={inputEmail} />
      </label>
      <label>
        Sua mensagem:
        <textarea name="message" ref={inputMessage} />
      </label>
      <ReCAPTCHA
        onChange={recaptchaChange}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        theme="light"
      />
      <button type="submit" disabled={!recaptchaValidated}><FaPaperPlane />Enviar</button>
    </form>
  )
}
