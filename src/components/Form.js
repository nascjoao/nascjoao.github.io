import { useRef } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

export default function Form() {
  const inputName = useRef()
  const inputEmail = useRef()
  const inputMessage = useRef()

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

      <button type="submit"><FaPaperPlane />Enviar</button>
    </form>
  )
}
