import styles from "@/styles/navbar.module.css"

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.ul}>
                <li className={styles.li}>Home</li>
                <li className={styles.li}>Contatos</li>
                <li className={styles.li}>Carápio</li>
                <li className={styles.li}>Entrar</li>
                <li className={styles.li}>Registrar</li>
            </ul>
           
        </nav>
        
    )
}
