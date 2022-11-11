import Image from "next/image";
import nascImage from '../../assets/images/nasc.png';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.container}>
      <div>
        <h1>Eu sou o <span>Nasc</span>.</h1>
        <h2>Eu escrevo porque isso dá vida a coisas.<br />
      Eu ensino porque eu amo aprender.</h2>
      </div>
      <div>
        <img src={nascImage.src} alt="João Nasc sorrindo" />
        <h3>Desenvolvedor Web</h3>
        <h3>Instrutor na <a href="https://betrybe.com" target="_blank">Trybe</a></h3>
      </div>
    </section>
  )
}
