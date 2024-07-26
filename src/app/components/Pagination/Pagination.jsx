'use client'
import react from 'react'
import styles from "./pagination.module.css"
import { toast } from 'react-toastify'

const Pagination= () => {
    const alert =() =>{
        toast("Kuch nahi hai aage")

    }
    const alert2 =() =>{
        toast("Peeche bhi kuch nahi hai" ,{position: 'top-left'})

    }
    return(
        
            <div className={styles.container}>
                <button onClick={alert2} className={styles.button}>Previous</button>
                <button onClick={alert} className={styles.button}>Next </button>
                
            </div>
        
        
    )
}

export default Pagination