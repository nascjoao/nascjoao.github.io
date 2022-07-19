import Image from 'next/image'
import styles from '../styles/components/ProjectCard.module.scss'

export default function ProjectCard({ imageSrc, title, href, description }) {
  return (
    <a href={href} target="_blank">
      <section className={styles.projectCard}>
        <Image src={imageSrc} alt={title} width={400} height={200} />
        <strong>{title}</strong>
        { description && (
          <p>{description}</p>
        ) }
        <span>{href.replace('https://', '').replace('/', '')}</span>
      </section>
    </a>
  )
}
