import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Contato from './components/contato/contato'
import Hero from './components/hero/hero'

export default function Home() {
  return (
    <main className={styles.main}>
      <><NavBar/></>
      <Hero/>
      <><Contato/></>
      <><Footer/></>
    </main>
  )
}
