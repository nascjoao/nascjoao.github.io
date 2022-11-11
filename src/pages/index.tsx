import Head from 'next/head'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'

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
    <main>
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <section id="contact">
        <div className="content">
          <h1>entre em contato</h1>
          <Form />
        </div>
      </section>
    </main>

    <Footer />
    </>
  )
}
