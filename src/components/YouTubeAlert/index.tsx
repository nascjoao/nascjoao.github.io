import { FaYoutube } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import type YouTubeVideo from '../../@types/YouTubeVideo';
import styles from './YouTubeAlert.module.css';

export default function YouTubeAlert({ video, close }: { video: YouTubeVideo | undefined, close: Function }) {
  return (
    <div className={styles.alert}>
      <a href={`https://www.youtube.com/watch?v=${video?.id}`} target="_blank">
        <div>
          <img src={video?.thumbnail} aria-hidden="true" className={styles.thumb} />
          <span className={styles.newVideoBadge}>NOVO!</span>
        </div>
        <strong>{video?.title}</strong>
        <FaYoutube className={styles.youtubeIcon} />
      </a>
      <button className={styles.close} onClick={() => close()}>
        <IoClose />
      </button>
    </div>
  )
}
