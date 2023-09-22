"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './navbar.module.css'
export default function NavBar() {
        const [ativo, setAtivo] = useState(true);
        const [prevScrollPos, setPrevScrollPos] = useState(0);
        const [visible, setVisible] = useState(true);

        const toggleAtivo = () => {
            setAtivo(!ativo);
        }

        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
      
          setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
          setPrevScrollPos(currentScrollPos);
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, [prevScrollPos, visible]);
    return (
        <header className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`}>
            <div className={styles.logo}>
              OneClick<img src="./images/1-Click.svg" className={styles.img}></img>
            </div>
            <container className={`${styles.menu} ${ativo ? styles.menu : styles.menu2}`}>
                <div><Link href='#inicio'>Início</Link></div>
                <div><a href='#'>Nossos Serviços</a></div>
                <div><a href='#equipe'>Equipe</a></div>
                <div><a href='#'>Sobre nós</a></div>
            </container>
            <button className={styles.faleconosco}><a href='#contato'>Fale Conosco</a></button>
            <div
                className={`${styles.hamburguer} ${ativo ? styles.hamburguer : styles.active}`}
                onClick={toggleAtivo}
                >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </header>
    );
}
