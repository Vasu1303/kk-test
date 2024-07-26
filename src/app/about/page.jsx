import React from "react";
import CardList from "../components/CardList/Cardlist";
import Menu from "../components/Menu/Menu";
import styles from "./about.module.css";
import Image from "next/image";

export const about=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>ABout</h1>
            <div className={styles.content}>
               
                

            </div>
        </div>
    )
}

export default about;