"use Client"
import styles from './navbar.module.css'
export default function NavBar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>Agência</div>
            <container className={styles.menu}>
                <div><a href='#'>Início</a></div>
                <div><a href='#'>O que fazemos</a></div>
                <div><a href='#'>Equipe</a></div>
                <div><a href='#'>Sobre nós</a></div>
            </container>
            <button className={styles.faleconosco}><a href='#'>Fale Conosco</a></button>
        </header>
    );
}
