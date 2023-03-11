import Image from "next/image";
import { GetServerSidePropsContext } from "next"
import { Link } from "../services/getPersonalLinks"
import styles from '../styles/pages/links.module.css'

export default function Links({ links = [] }: { links: Link[] }) {
  return (
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
