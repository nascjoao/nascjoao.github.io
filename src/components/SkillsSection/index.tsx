import Grid from "../Grid";
import styles from './SkillsSection.module.css';

export default function SkillsSection() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h1>tecnologias que eu mais uso</h1>
        <h2>O aprendizado é contínuo e sempre haverá um próximo nível.</h2>
      </div>
      <div className={styles.grid}>
        <Grid />
      </div>
    </section>
  )
}
