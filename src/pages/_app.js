import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>VoluntRED</title>
        <link rel="icon" href="/logo.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp