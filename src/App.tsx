import { useLenis } from './hooks/useLenis'
import { Cursor } from './components/Cursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Project } from './components/Project'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
// @ts-ignore - CSS import is handled by the bundler.
import './index.css'
import { DevOps } from './components/DevOps'

export default function App() {
  useLenis()

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Skills />
        <DevOps />
        <Experience />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  )
}