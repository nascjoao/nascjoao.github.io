import dayjs from 'dayjs'
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section>
          <header>
            <img src="https://github.com/nascjoao.png" alt="" aria-hidden="true" />
            <h1>Nasc<span>.</span></h1>
          </header>
          <div className={styles.loveMessage}>
            <h2>Façam tudo com amor.</h2>
            <p>1 Coríntios 16:14</p>
          </div>
          <p>João Victor Soares do Nascimento • {dayjs().year()}</p>
        </section>
        <section className={styles.findMe}>
          <h1>onde me encontrar</h1>
          <a href="https://github.com/nascjoao" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/nascjoao" target="_blank">LinkedIn</a>
        </section>
      </div>
    </footer>
  )
}
