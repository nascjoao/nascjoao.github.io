export default function isDevelopmentMode() {
  return ['localhost', '127.0.0.1'].includes(location.hostname)
}
