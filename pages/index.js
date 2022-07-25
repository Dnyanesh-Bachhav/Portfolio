import Head from 'next/head'
import Script from 'next/script'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
        <script src="./script.js"></script>
      </Head>
      {/* <Script src='./script.js' strategy='lazyOnLoad' /> */}
      <Header/>
    </div>
  )
}
