import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { Roboto } from '@next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header />
      <div className={roboto.className}>
        <main className="max-w-screen-2xl px-4">{children}</main>
      </div>
      <Footer />
    </ThemeProvider>
  )
}
