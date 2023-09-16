import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './components/navbar/NavBar'

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar/>
    </main>
  )
}
