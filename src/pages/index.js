import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaPaperPlane
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiChakraui
} from 'react-icons/si'
import dayjs from 'dayjs'
import ShieldButton from "../components/ShieldButton"
import Form from '../components/Form'

export default function Home() {
  return (
    <>
      <header>
    <div id="welcome">
      <img src="https://avatars3.githubusercontent.com/u/56273267?s=460&u=5c36f05be0ec1a8717565e2d281685d1da9ec770&v=4"
        alt="João Nasc"/>
      <h1>Eu escrevo porque isso dá vida às coisas.</h1>
    </div>
    <section className="media-shields">
      <ShieldButton
        icon={FaGithub}
        href="https://github.com/nascjoao"
        openInNewTab
        text="GitHub"
      />
      <ShieldButton
        icon={FaLinkedin}
        href="https://linkedin.com/in/nascjoao"
        openInNewTab
        text="LinkedIn"
      />
      <ShieldButton
        icon={FaEnvelope}
        href="mailto:oi@joaonasc.dev"
        text="oi@joaonasc.dev"
      />
      <ShieldButton
        icon={FaInstagram}
        href="https://instagram.com/joaonasc.dev"
        openInNewTab
        text="Instagram"
      />
    </section>

    <p id="scroll">Deslize para ler mais sobre mim</p>
  </header>

  <main>
    <section id="about-me">
      <div className="content">
        <h2>Sobre mim</h2>
        <p>
          Meu nome é João Victor Nascimento (também conhecido como Nasc), eu tenho {dayjs().diff('1999-06-17', 'years')} anos e sou Desenvolvedor Web.<br/><br/>

          Atualmente trabalho na <a
          href="https://betrybe.com" target="_blank">Trybe</a> como Instrutor do módulo de Fundamentos.<br /><br />
        
          De vez em quando também publico vídeos no <a href="https://youtube.com/nascjoao" target="_blank">YouTube</a>.
        </p>

      </div>
    </section>

    <section id="my-skills">
      <div className="content">
        <h2>Minhas habilidades</h2>
        <p>
          Eu adoro aprender sobre muitas coisas. Atualmente eu estou focando e melhorando minhas habilidades nessas tecnologias.
        </p>
        <section className="skills-shields">
          <ShieldButton
            icon={FaReact}
            href="https://github.com/topics/react"
            openInNewTab
            text="React"
          />
          <ShieldButton
            icon={SiNextdotjs}
            href="https://github.com/topics/nextjs"
            openInNewTab
            text="Next.js"
          />
          <ShieldButton
            icon={SiChakraui}
            href="https://chakra-ui.com/"
            openInNewTab
            text="Chakra UI"
          />
          <ShieldButton
            icon={FaCss3}
            href="https://github.com/topics/css"
            openInNewTab
            text="CSS"
          />
          <ShieldButton
            icon={FaNodeJs}
            href="https://github.com/topics/nodejs"
            openInNewTab
            text="Node.js"
          />
        </section>
      </div>
    </section>

    <section id="contact">
      <div className="content">
        <h2>Entre em contato</h2>
        <Form />
      </div>
    </section>
  </main>

  <footer>© 2021 João Victor Nascimento</footer>
    </>
  )
}