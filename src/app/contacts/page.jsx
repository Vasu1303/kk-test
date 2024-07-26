import React from "react";
import CardList from "../components/CardList/Cardlist";
import Menu from "../components/Menu/Menu";
import styles from "./contacts.module.css";
import Image from "next/image";

export const contacts=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Sampark Karein</h1>
            <div className={styles.content}>
                <div className={styles.mainArea}>
                    <div className={styles.mainTitle}>CONTACTS</div>
                    <div className={styles.mobile}>
                        <Image src="/kkpics/call1.png" width={50} height={50} className={styles.phone}/>
                        <span>+91 78381 01333</span>
                    </div>
                    <div className={styles.mobile}>
                    <Image src="/kkpics/gmail.png" width={50} height={50} className={styles.phone}/>
                    <span>kritagykhanna21@gmail.com</span>
                        
                    </div>
                    <div className={styles.instagram}>insta</div>
                    <div className={styles.onlyfans}>fans</div>
                </div>
                

            </div>
        </div>
    )
}

export default contacts;