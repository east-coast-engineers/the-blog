import Head from 'next/head'

interface Props {
  title: string
}

export default function Meta(props: Props) {
  return (
    <Head>
      <title>Chips & Salsa - {props.title}</title>
      <meta
        name="description"
        content="Chips & Salsa, the spiciest tech blog on the internet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
