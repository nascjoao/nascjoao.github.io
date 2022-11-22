import type YouTubeAPIVideo from "../@types/YouTubeAPIVideo";

export default async function getYouTubeVideos(apiKey: string) {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UCZKYsMOyURRGeI80WAKeUpA&part=snippet,id&order=date&maxResults=20`)
  const data = await response.json();
  return data.items.map((videoData: YouTubeAPIVideo) => ({
    id: videoData.id.videoId,
    title: videoData.snippet.title,
    description: videoData.snippet.description,
    thumbnail: videoData.snippet.thumbnails.high.url,
    publishedAt: videoData.snippet.publishedAt,
  }));
}