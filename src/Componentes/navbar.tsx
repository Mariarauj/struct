import styles from "@/styles/navbar.module.css"
import { publicDecrypt } from "crypto"

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul className={styles.ul}>
                <li className={styles.li}>Home</li>
                <li className={styles.li}>Contatos</li>
                <li className={styles.li}>Cardápio</li>
                <li className={styles.li}>Entrar</li>
                <img className={styles.image}/>
                <li className={styles.li}>Registrar</li>
            </ul> 
            
        </div>
        
    )
}
