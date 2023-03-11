import YouTubeVideo from "../types/YouTubeVideo";

export default async function getYouTubeVideos(apiKey: string, videoId: string): Promise<YouTubeVideo> { 
  const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`)
  const data = await response.json();
  if (!data.items[0]) throw new Error('Vídeo não encontrado')
  return {
    id: data.items[0].id,
    channelId: data.items[0].snippet.channelId,
    title: data.items[0].snippet.title,
    description: data.items[0].snippet.description,
    thumbnail: data.items[0].snippet.thumbnails.maxres.url,
    publishedAt: data.items[0].snippet.publishedAt,
  }
}
