import { useEffect, useState } from 'react';
import Repo from '../../types/repo';
import styles from './ProjectsSection.module.css';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsSection() {
  const [repos, setRepos] = useState<{ pinned: Repo[], all: Repo[] }>({ pinned: [], all: [] })
  
  useEffect(() => {
    fetch('/api/repos').then((reponse) => reponse.json()).then(({ data }) => setRepos(data))
  }, [])

  return (
    <section className={styles.container}>
      <h1>meus projetos</h1>
      <div className={styles.grid}>
        {repos.pinned.map((repo) => (
          <a href={repo.homepageUrl || '#'} target="_blank" key={repo.name} className={styles.projectCard}>
            <div className={styles.externalLinkSymbol}>
              <FaExternalLinkAlt />
            </div>
            <Image src={repo.imageURL} width={640} height={320} aria-hidden="true" />
            <div className={styles.info}>
              <strong>{repo.name}</strong>
              <span>
                {repo.homepageUrl}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
