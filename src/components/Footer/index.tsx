import dayjs from 'dayjs'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.brandColumn}>
          <header>
            <img src="https://github.com/nascjoao.png" alt="" aria-hidden="true" />
            <h1>Nasc<span>.</span></h1>
          </header>
          <div className={styles.loveMessage}>
            <h2>Façam tudo com amor.</h2>
            <p>1 Coríntios 16:14</p>
          </div>
        </section>
        <p className={styles.name}>João Victor Soares do Nascimento • {dayjs().year()}</p>
        <section className={styles.findMe}>
          <h1>onde me encontrar</h1>
          <div className={styles.socialList}>
            <a href="https://github.com/nascjoao" target="_blank">
              <span className={styles.icon}>
                <FaGithub />
              </span>
              <span>
                GitHub
              </span>
            </a>
            <a href="https://linkedin.com/in/nascjoao" target="_blank">
              <span className={styles.icon}>
                <FaLinkedin />
              </span>
              <span>
                LinkedIn
              </span>
            </a>
            <a href="https://youtube.com/nascjoao" target="_blank">
              <span className={styles.icon}>
                <FaYoutube />
              </span>
              <span>
                YouTube
              </span>
            </a>
            <a href="https://instagram.com/nasc.dev" target="_blank">
              <span className={styles.icon}>
                <FaInstagram />
              </span>
              <span>
                Instagram
              </span>
            </a>
            <a href="mailto:oi@joaonasc.dev">
              <span className={styles.icon}>
                <FaEnvelope />
              </span>
              <span>
                oi@joaonasc.dev
              </span>
            </a>
          </div>
        </section>
      </div>
    </footer>
  )
}
