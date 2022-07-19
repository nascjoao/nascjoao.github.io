import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaCss3,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiChakraui
} from 'react-icons/si'
import dayjs from 'dayjs'
import Head from 'next/head'
import ShieldButton from "../components/ShieldButton"
import Form from '../components/Form'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="shortcut icon" href="https://ik.imagekit.io/joaonasc/joaonascdev/favicon_MNmtMFvcD.png"
        type="image/x-icon"/>
      {/* <!-- Chrome, Firefox OS and Opera --> */}
      <meta name="theme-color" content="#FFE457"/>
      {/* <!-- Windows Phone --> */}
      <meta name="msapplication-navbutton-color" content="#FFE457"/>
      {/* <!-- iOS Safari --> */}
      <meta name="apple-mobile-web-app-status-bar-style" content="#FFE457"/>

      <meta property="og:title" content="João Nasc | Desenvolvedor Web"/>
      <meta property="og:site_name" content="João Nasc | Desenvolvedor Web"/>
      <meta property="og:url" content="https://www.joaonasc.dev/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:locale" content="pt_BR"/>
      <meta property="og:description" content="Desenvolvedor Web com habilidades em React, Next.js, Chakra UI, CSS, Node.js e mais!"/>
      <meta name="description" content="Desenvolvedor Web com habilidades em React, Next.js, Chakra UI, CSS, Node.js e mais!"/>
      <meta name="image" content="https://joaonasc.dev/og-image.png"/>
      <meta property="og:image" content="https://joaonasc.dev/og-image.png"/>
      <meta property="og:image:secure_url" content="https://joaonasc.dev/og-image.png"/>
      <meta property="og:image:alt" content="nasc - joaonasc.dev"/>
      <meta property="og:image:type" content="image/png"/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="João Nasc | Desenvolvedor Web"/>
      <meta name="twitter:image" content="https://joaonasc.dev/og-image.png"/>
      <meta name="twitter:image:src" content="https://joaonasc.dev/og-image.png"/>
      <meta name="twitter:image:alt" content="nasc - joaonasc.dev"/>
      <meta name="twitter:image:width" content="1200"/>
      <meta name="twitter:image:height" content="630"/>
      <link rel="canonical" href="https://www.joaonasc.dev" data-baseprotocol="https:" data-basehost="www.joaonasc.dev"/>
      <title>João Nasc | Desenvolvedor Web</title>
    </Head>
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
        href="#contact"
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

    <section id="projects">
      <div className="content">
        <h2>Meus projetos</h2>
        <div className="grid">
          <ProjectCard
            href="https://n-ask.joaonasc.dev/"
            imageSrc="/projects/n-ask.png"
            title="n-ask"
          />
          <ProjectCard
            href="https://pop.joaonasc.dev/"
            imageSrc="/projects/popping-monsters.png"
            title="Popping Monsters"
          />
          <ProjectCard
            href="https://parenteses.joaonasc.dev/"
            imageSrc="/projects/parenteses.png"
            title="Nem tudo é parênteses"
          />
          <ProjectCard
            href="https://trybe-countdown.joaonasc.dev/"
            imageSrc="/projects/trybe-countdown.png"
            title="Trybe Countdown"
          />
        </div>
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
