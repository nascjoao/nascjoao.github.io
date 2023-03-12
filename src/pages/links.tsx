import Image from "next/image";
import { GetServerSidePropsContext } from "next"
import { Link } from "../services/getPersonalLinks"
import styles from '../styles/pages/links.module.css'
import Head from "next/head";

export default function Links({ links = [] }: { links: Link[] }) {
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
      <main className={styles.container}>
        <Image
          src="https://www.gravatar.com/avatar/a11d24b739988e347e15bee30e06e493?s=150"
          width={120}
          height={120}
          className={styles.profilePic}
        />
        <h1 className={styles.heading}>João Nasc</h1>
        <ul className={styles.linksList}>
          { links.map((link) => (
            <a href={link.url} key={link.url}>
              <li>
                {link.title}
              </li>
            </a>
          )) }
        </ul>
      </main>
    </>
  )
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const protocol = req.headers.referer?.split('://')[0] || 'http';
  const url = `${protocol}://${req.headers.host}/api/getLinks`;
  const response = await fetch(url);
  const { data } = await response.json()
  return {
    props: { links: data }
  }
}
