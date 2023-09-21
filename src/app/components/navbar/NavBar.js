import Link from 'next/link';
import styles from './navbar.module.css'
export default function NavBar() {
    return (
        <header className={styles.navbar} id='inicio'>
            <div className={styles.logo}>OneClick</div>
            <container className={styles.menu}>
                <div><Link href='#inicio'>Início</Link></div>
                <div><a href='#'>Nossos Serviços</a></div>
                <div><a href='#equipe'>Equipe</a></div>
                <div><a href='#'>Sobre nós</a></div>
            </container>
            <button className={styles.faleconosco}><a href='#contato'>Fale Conosco</a></button>
        </header>
    );
}
