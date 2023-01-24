import { Html, Main, NextScript } from 'next/document'
import Meta from '@/components/Meta'

export default function Document() {
  return (
    <Html lang="en">
      <Meta />
      <body className="bg-slate-50 dark:bg-zinc-900 text-zinc-900 dark:slate-50 overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
