import Image from 'next/image'
import styles from '../styles/navbar.module.css'

export default function Navbar({ name, logo, children }) {
    return(
        <div className={styles.container}>
            <Image
            src={logo}
            width={64} 
            height={64}
            alt={name}
            className={styles.logo} />
            <div className={styles.name}>{name}</div>
        </div>
    )
}