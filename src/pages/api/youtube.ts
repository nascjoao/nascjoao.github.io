import type { NextApiRequest, NextApiResponse } from 'next';
import getYouTubeVideos from '../../services/getYouTubeVideos';

const { YOUTUBE_API_KEY } = process.env;

export default async function(req: NextApiRequest, res: NextApiResponse) {
  if (!YOUTUBE_API_KEY) return res.status(401).json({ error: 'YouTube API key is required' });
  try {
    const youTubeVideos = await getYouTubeVideos(YOUTUBE_API_KEY);
    return res.status(200).json({ data: youTubeVideos });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
  }
}