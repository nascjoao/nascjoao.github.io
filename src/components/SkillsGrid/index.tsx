import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTypescript } from 'react-icons/si';
import Skill from '../Skill';
import styles from './SkillsGrid.module.css';

export default function SkillsGrid() {
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
            icon={SiTypescript}
            color="#2F74C0"
            title="TypeScript"
          />
      </div>
    </>
  )
}
