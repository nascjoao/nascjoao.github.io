module.exports = async function getYouTubeRedirects() {
  const fetchVideos = await fetch('https://nasc.dev/api/youtube');
  const videosData = await fetchVideos.json();
  const videosRedirects = videosData.data.map((video) => ({
    source: `/youtube/${video.id}`,
    destination: `https://www.youtube.com/watch?v=${video.id}`,
    permanent: true,
  }))

  return videosRedirects;
}
