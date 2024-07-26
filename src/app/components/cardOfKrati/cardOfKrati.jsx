import Link from "next/link"
import styles from "./krati-card.module.css"
import Image from "next/image"

const cardOfKrati=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/kkpics/leetcode.jpg" alt="" fill className={styles.image}/>
            </div>                    
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>10.07.2024 | </span>
                    <span className={styles.category}>Coding</span>
                </div>
                <Link href="/">
                  <h1 className={styles.title}>LEETCODE par 150+ Questions</h1>
                </Link>
                
               
                <p className={styles.description}>
                    DSA king hu me. LinkedList to sote sote reverse krdeta hu. Binary Tree or Graph or bina likhe solve kardeta hu.
                    'Chal ab Papa Bol'
                </p>
                <Link href="/" className={styles.link}>Read More..</Link>

            </div>
        </div>
    )
}

export default cardOfKrati