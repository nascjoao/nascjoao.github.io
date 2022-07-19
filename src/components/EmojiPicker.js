import dynamic from 'next/dynamic'
import styles from '../styles/components/EmojiPicker.module.scss'
const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false });
import { FaRegSmile } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'

export default function EmojiPicker({ onEmojiClick }) {
  const [active, setActive] = useState(false)
  
  return (
    <>
      <button type="button" onClick={() => setActive(!active)} className={styles.emojiTrigger}>
        { active ? (
          <IoMdClose />
        ) : (
          <FaRegSmile />
        ) }
      </button>
      { active && (
        <div className={styles.emojiPicker}>
          <Picker
            disableAutoFocus
            pickerStyle={{
              boxShadow: 'none'
            }}
            onEmojiClick={(_, { emoji }) => onEmojiClick(emoji)}
            />
        </div>
      ) }
    </>
  )
}
