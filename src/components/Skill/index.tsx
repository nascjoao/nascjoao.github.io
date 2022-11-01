import React from 'react';
import type { IconType } from 'react-icons';
import styles from './Skill.module.css';

export default function Skill({
  icon: Icon,
  color,
  title,
  ...props
}: {
  icon: IconType,
  color: string,
  title: string
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={styles.skill} {...props}>
      <Icon color={color} />
      <strong>{title}</strong>
    </div>
  )
}
