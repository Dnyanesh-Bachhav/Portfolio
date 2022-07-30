import Head from 'next/head'
import About from '../components/about'
import Header from '../components/header'
import Info from '../components/info'
import Skills from '../components/skills'

export default function Home() {
  return (
    <div>
      <Header/>
      <Info/>
      <About/>
      <Skills/>
    </div>
  )
}

