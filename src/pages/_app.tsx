import '../styles/style.css'
import type { AppProps } from 'next/app'
import '@fontsource/inter/variable-full.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
