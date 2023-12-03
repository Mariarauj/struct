import styles from "@/styles/navbar.module.css"

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.ul}>
                <li className={styles.li}>Home</li>
                <li className={styles.li}>Contatos</li>
                <li className={styles.li}>Cardápio</li>
                <li className={styles.li}>Entrar</li>
                <li className={styles.li}>Registrar</li>
                <img src="url(https://www.figma.com/file/kWyheRCvQQZdxErXk0vXSu/P%C3%A1ginas-projeto?type=design&node-id=23-8&mode=design&t=abClQc5HnUqmnu1t-4)" alt="" />
            </ul>
           
        </nav>
        
    )
}
