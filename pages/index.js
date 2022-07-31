import Head from 'next/head'
import About from '../components/about'
import Contact from '../components/contact'
import Header from '../components/header'
import Info from '../components/info'
import Portfolio from '../components/portfolio'
import Skills from '../components/skills'

export default function Home() {
  return (
    <div>
      <Header/>
      <Info/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>

    </div>
  )
}

