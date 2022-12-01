import { writeFileSync, readFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import type YouTubeVideo from '../../@types/YouTubeVideo';
import getYouTubeVideo from '../../services/getYouTubeVideo';

const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;

export default async function(req: NextApiRequest, res: NextApiResponse) {
  const { videoId } = req.query;
  if (!YOUTUBE_API_KEY) return res.status(401).json({ error: 'YouTube API key is required' });
  if (!videoId) return res.status(401).json({ error: 'Video ID is required' });
  try {
    const knownVideos = JSON.parse(readFileSync(path.join(process.cwd(), 'src', 'json') + '/youtube-videos.json', {
      encoding: 'utf-8',
      flag: 'r+'
    }));
    if (knownVideos[videoId as string]) return res.redirect(knownVideos[videoId as string])
    const data: YouTubeVideo = await getYouTubeVideo(YOUTUBE_API_KEY, videoId as string)
    console.log('passou pelo fetch');
    console.log(data.id, YOUTUBE_CHANNEL_ID);
    
    if (!data.id || data.channelId !== YOUTUBE_CHANNEL_ID) return res.redirect('/')
    knownVideos[videoId as string] = `https://www.youtube.com/watch?v=${videoId}`
    writeFileSync(path.join(process.cwd(), 'src', 'json') + '/youtube-videos.json', JSON.stringify(
      knownVideos,
      null,
      2
    ))
    return res.redirect(`https://www.youtube.com/watch?v=${videoId}`)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      return res.status(400).redirect('/')
    }
  }
}
