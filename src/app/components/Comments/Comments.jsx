import React from "react";
import styles from "./comments.module.css"
import Link from "next/link";
import Image from "next/image";

const Comments =()=>{
    const status = "authenticated";
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder="Post a Comment//" className={styles.input} />
                    <button className={styles.button}>Post</button>
                </div>
            ): (<Link href="/login">Login here</Link> )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/logo.png" alt="" width={50} height={50} className={styles.userImage}/>
                        <div className={styles.userInfo}>
                            <span className={styles.userName}>Vasu Singh</span>
                            <span className={styles.date}> | 12.07.24</span>
                            
                        </div>

                

                    </div>
                    <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, placeat harum. Ex atque qui illo iusto, ut repellendus deleniti obcaecati, reiciendis perferendis a dignissimos corrupti sit, quod culpa! Ea, eligendi.lore lore</p>
                    
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/logo.png" alt="" width={50} height={50} className={styles.userImage}/>
                        <div className={styles.userInfo}>
                            <span className={styles.userName}>Vasu Singh</span>
                            <span className={styles.date}> | 12.07.24</span>
                            
                        </div>

                

                    </div>
                    <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, placeat harum. Ex atque qui illo iusto, ut repellendus deleniti obcaecati, reiciendis perferendis a dignissimos corrupti sit, quod culpa! Ea, eligendi.lore lore</p>
                    
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/logo.png" alt="" width={50} height={50} className={styles.userImage}/>
                        <div className={styles.userInfo}>
                            <span className={styles.userName}>Vasu Singh</span>
                            <span className={styles.date}> | 12.07.24</span>
                            
                        </div>

                

                    </div>
                    <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, placeat harum. Ex atque qui illo iusto, ut repellendus deleniti obcaecati, reiciendis perferendis a dignissimos corrupti sit, quod culpa! Ea, eligendi.lore lore</p>
                    
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/logo.png" alt="" width={50} height={50} className={styles.userImage}/>
                        <div className={styles.userInfo}>
                            <span className={styles.userName}>Vasu Singh</span>
                            <span className={styles.date}> | 12.07.24</span>
                            
                        </div>

                

                    </div>
                    <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, placeat harum. Ex atque qui illo iusto, ut repellendus deleniti obcaecati, reiciendis perferendis a dignissimos corrupti sit, quod culpa! Ea, eligendi.lore lore</p>
                    
                </div>


            </div>
            


        </div>
    )
}

export default Comments;
