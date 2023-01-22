import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Roboto } from '@next/font/google'
import Header from  '@/components/Header'
import Footer from '@/components/Footer'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className={roboto.className}>
        <Header />
        <main className='max-w-screen-2xl mx-auto px-4'>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
