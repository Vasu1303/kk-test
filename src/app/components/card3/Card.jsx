import Link from "next/link"
import styles from "./card.module.css"
import Image from "next/image"

const Card3=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/kkpics/kktrain.jpg" alt="" fill className={styles.image}/>
            </div>                    
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>24.07.2024 | </span>
                    <span className={styles.category}>BAJUNGA</span>
                </div>
                <Link href="/">
                  <h1 className={styles.title}>Maine sab dekha hai life me</h1>
                </Link>
                
               
                <p className={styles.description}>
                    "Beta jo cheeze aap aaj krrhe ho na, Me 10 saal phle krke chor chuka hun" -- KK
                </p>
                    

            </div>
        </div>
    )
}

export default Card3