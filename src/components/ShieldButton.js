import styles from '../styles/components/ShieldButton.module.scss'

export default function ShieldButton({ icon: Icon, href, openInNewTab, text }) {
  return (
    <a href={href} target={openInNewTab ? '_blank' : '_self'} className={styles.shield}>
      <Icon />
      <span>
        {text}
      </span>
    </a>
  )
}
