import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs } from 'react-icons/si';
import Skill from '../Skill';
import styles from './Grid.module.css';

export default function Grid() {
  return (
    <>
      <div className={styles.grid}>
          <Skill
            icon={FaReact}
            color="#00D8FF"
            title="React"
          />
          <Skill
            icon={SiNextdotjs}
            color="#FFFFFF"
            title="Next.js"
          />
          <Skill
            icon={FaNodeJs}
            color="#689F63"
            title="Node"
          />
          <Skill
            icon={SiJavascript}
            color="#EFD81D"
            title="JavaScript"
          />
      </div>
    </>
  )
}
