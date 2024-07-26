import React from "react";
import CardList from "../components/CardList/Cardlist";
import Menu from "../components/Menu/Menu";
import styles from "./fashionPage.module.css";

export const fashionblog=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Fashion Blog</h1>
            <div className={styles.content}>
                <CardList/>
                <Menu/>


            </div>
        </div>
    )
}

export default fashionblog;