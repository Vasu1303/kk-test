'use client'
import react from 'react'
import styles from "./featured.module.css"
import Image from 'next/image';
import { toast } from 'react-toastify';


const Featured= () => {
    const alert = () =>{
        toast.error("Phle Papa Bol");
    }
    return(
       <div className={styles.container}>
            <h1 className={styles.title}>
                <b className={styles.bold}>Kritagya Khanna</b> The Man who's always 2 inch levitating than others.
                </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image className={styles.image} src="/kkpics/cover.jpg" alt="n0-image" width={590} height={500} />

                </div>
                    
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}> Mere ghar se Qutoob Minar Dikhta hai </h1>
                    <p className={styles.postText}></p>
                    <button onClick={alert} className={styles.button} >ReadMore</button>
                </div>
            </div>
       </div>
        
    );
};

export default Featured