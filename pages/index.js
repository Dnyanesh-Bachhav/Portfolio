import Head from 'next/head'
import About from '../components/about'
import Header from '../components/header'
import Info from '../components/info'

export default function Home() {
  return (
    <div>
      <Header/>
      <Info/>
      <About/>
    </div>
  )
}

