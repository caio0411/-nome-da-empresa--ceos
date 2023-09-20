import styles from './footer.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h1 className={styles.logo}>Agência</h1>
                <p className={styles.mensagem_logo}>
                Elevando a vida das pessoas com a tecnologia do futuro
                </p>
                <div>© 2023 SHOES - Todos os direitos reservados</div>
            </div>
            <div>
                <h1>Links</h1>
                <ul>
                    <li>primeiro plau</li>
                    <li>segundo plau</li>
                    <li>terceiro plau</li>
                </ul>
            </div>
            <div>
                <h1>Contatos</h1>
                <p>
                    Super plau
                    e plau
                </p>
            </div>
        </footer>
    )
}
export default Footer;