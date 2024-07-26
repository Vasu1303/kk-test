import React from "react";
import styles from "./menuPosts.module.css"
import Link from "next/link";

export const MenuPost= ()=>{
    return(
        <div className={styles.container}>
            <Link href="./travelblog" className={styles.item}>
                        
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.Rashi}`}>
                                Rashi
                            </span>
                            <h3 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                            <div className={styles.detail}>
                                <span className={styles.editor}>Chris Ray</span>
                                <span className={styles.date}> |  10.07.2024</span>
                            </div>
                        </div>

                    </Link>
                    <Link href="/" className={styles.item}>
                        
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.Aastha}`}>
                                Aastha
                            </span>
                            <h3 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                            <div className={styles.detail}>
                                <span className={styles.editor}>Chris Ray</span>
                                <span className={styles.date}> |  10.07.2024</span>
                            </div>
                        </div>

                    </Link>
                    <Link href="/" className={styles.item}>
                        
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.Ayush}`}>
                                Ayush
                            </span>
                            <h3 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                            <div className={styles.detail}>
                                <span className={styles.editor}>Chris Ray</span>
                                <span className={styles.date}> |  10.07.2024</span>
                            </div>
                        </div>

                    </Link>
                    <Link href="/" className={styles.item}>
                        
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.Manyata}`}>
                                Manyata
                            </span>
                            <h3 className={styles.title}>chik chik kam kara karo</h3>
                            <div className={styles.detail}>
                                <span className={styles.editor}>Chris Ray</span>
                                <span className={styles.date}> |  10.07.2024</span>
                            </div>
                        </div>

                    </Link>
                    

        </div>
    )
};;

export default MenuPost;
