import react from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return(
    
         <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/kkpics/kkfooter.jpg" alt="ReadIt" height={50} width={50} className={styles.photo}/>
                    <h1 className={styles.logoText}>KK</h1>
                     
                </div>
                <p className={styles.description}>Kabhi Krati Kabhi Kritagya</p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="" width={18} height= {18}/>
                    <Image src="/instagram.png" alt="" width={18} height= {18}/>
                    <Image src="/youtube.png" alt="" width={18} height= {18}/>
                    <Image src="/gmail.png" alt="" width={18} height= {18}/>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>

                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/blog">Style</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>

                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">YouTube</Link>
                    <Link href="/">G-Mail</Link>
                </div>


            </div>
         </div>
        
        

    )
       
}

export default Footer