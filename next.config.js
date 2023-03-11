module.exports = {
  i18n: {
    locales: ["pt"],
    defaultLocale: "pt"
  },
  images: {
    domains: [
      'www.github.com',
      'opengraph.githubassets.com',
      'repository-images.githubusercontent.com',
      'www.gravatar.com'
    ]
  },
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  async redirects() {
    return [
      {
        source: '/yt/:id',
        destination: '/api/redirect-youtube?videoId=:id',
        permanent: false
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@nascjoao?sub_confirmation=1',
        permanent: true
      },
    ]
  }
}
