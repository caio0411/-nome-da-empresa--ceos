import styles from './footer.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h1 className={styles.logo}>Agência</h1>
                <p className={styles.mensagem_logo}>
                Elevando a vida das pessoas com a tecnologia do futuro
                </p>
                <div>© 2023 1-CLICK - Todos os direitos reservados.</div>
            </div>
            <div>
                <h1>Links</h1>
                <ul className={styles.lista}>
                    <li>Inicio</li>
                    <li>Sobre nós</li>
                    <li>Serviços</li>
                </ul>
            </div>
            <div>
                <h1>Contatos</h1>
                <p>
                    1-click@gmail.com<br/>
                    Fortaleza, CE
                </p>
            </div>
        </footer>
    )
}
export default Footer;