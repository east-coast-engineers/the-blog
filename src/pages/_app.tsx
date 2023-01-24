import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Roboto } from '@next/font/google'
import Header from '@/components/Header'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header />
      <div className={roboto.className}>
        <main className="max-w-screen-2xl px-4">
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  )
}
