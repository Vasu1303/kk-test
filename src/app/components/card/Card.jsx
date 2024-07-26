import Link from "next/link"
import styles from "./card.module.css"
import Image from "next/image"

const Card=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/kkpics/leetcode.jpg" alt="" fill className={styles.image}/>
            </div>                    
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>24.07.2024 | </span>
                    <span className={styles.category}>Coding</span>
                </div>
                <Link href="/">
                  <h1 className={styles.title}>LEETCODE par 150+ Questions</h1>
                </Link>
                
               
                <p className={styles.description}>
                    DSA king hu me. LinkedList to sote sote reverse krdeta hu. Binary Tree or Graph ko to bina likhe solve kardeta hu.
                    'Chal ab Papa Bol'
                </p>
                

            </div>
        </div>
    )
}

export default Card