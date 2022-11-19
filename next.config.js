module.exports = {
  i18n: {
    locales: ["pt"],
    defaultLocale: "pt"
  },
  images: {
    domains: ['www.github.com', 'opengraph.githubassets.com', 'repository-images.githubusercontent.com']
  },
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  async redirects() {
    return [
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@nascjoao?sub_confirmation=1',
        permanent: false
      }
    ]
  }
}
