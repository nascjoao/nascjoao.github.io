import Link from "next/link";
import styles from './404.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Link href="/">Voltar para o início</Link>
    </div>
  )
}
