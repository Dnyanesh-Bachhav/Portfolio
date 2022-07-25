import Head from 'next/head'
import Script from 'next/script'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Head>
      </Head>
      <Header/>
      {/* <Script src='../js/script.js' strategy='lazyOnLoad' /> */}
    </div>
  )
}

