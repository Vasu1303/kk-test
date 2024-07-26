import react from 'react'
import styles from "./navbar.module.css"
import Image from "next/image"
import Link from 'next/link'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import AuthLinks from '../AuthLinks/AuthLinks'

const Navbar= () => {
    return(
        
            <div className={styles.container}>
                <div className={styles.social}>
                   <div>
                   
                    <Image src="/kkpics/kklogo9.png" width={500} height={500} className={styles.logoimage}/>
                    <Image src="/kkpics/kklogo7.png" width={500} height={500} className={styles.logoimage}/>
                    <Image src="/kkpics/kklogo4.png" width={500} height={500} className={styles.logoimage}/>
                    <Image src="/kkpics/kklogo2.png" width={500} height={500} className={styles.logoimage}/>
                    <Image src="/kkpics/kklogo.png" width={500} height={500} className={styles.logoimage}/>
                   </div>
                </div>
                <div className={styles.logo}>
                    <Link href="/">KK</Link></div>
                <div className={styles.links}>
                    
                    
                    <Link href="/" className={styles.link}>Homepage</Link>
                    <Link href="/contacts" className={styles.link}>Contact</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <AuthLinks/>
                    
                    
                </div>
            </div>
        
        
    )
}

export default Navbar