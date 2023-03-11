import dayjs from 'dayjs';
import type YouTubeVideo from '../types/YouTubeVideo';
import { useEffect, useState } from 'react';
import YouTubeAlert from '../components/YouTubeAlert';

export default function useYouTubeAlert() {
  const [lastYouTubeVideo, setLastYouTubeVideo] = useState<YouTubeVideo | undefined>()
  const publishedLessThan7DaysAgo = dayjs().diff(lastYouTubeVideo?.publishedAt, 'days') <= 7;
  const [shouldBeVisible, setShouldBeVisible] = useState(lastYouTubeVideo && publishedLessThan7DaysAgo)

  useEffect(() => {
    fetch('/api/youtube')
      .then((response) => response.json())
      .then(({ data }) => setLastYouTubeVideo(data[0]))
  }, [])

  useEffect(() => {
    setShouldBeVisible(lastYouTubeVideo && publishedLessThan7DaysAgo)
  }, [lastYouTubeVideo])


  return {
    shouldBeVisible,
    setShouldBeVisible,
    YouTubeAlert: () => <YouTubeAlert video={lastYouTubeVideo} close={() => setShouldBeVisible(false)} />,
  }
}
