import Link from "next/link"
import styles from "./card.module.css"
import Image from "next/image"

const Card2=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/kkpics/kkgulab.jpg" alt="" fill className={styles.image}/>
            </div>                    
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>10.07.2024 | </span>
                    <span className={styles.category}>DIET</span>
                </div>
                <Link href="/">
                  <h1 className={styles.title}>Bata raha hu, Kam Baja Kar</h1>
                </Link>
                
               
                <p className={styles.description}>
                    "ye insaan itna bajta hai life mein, bas bajwa lo harr jagh. Bajleshwar" -- KK
                </p>
                

            </div>
        </div>
    )
}

export default Card2