import react from 'react'
import styles from "./kratiCard.module.css"
import Pagination from '../Pagination/Pagination'
import Card from '../card/Card'
import cardOfKrati from '../cardOfKrati/cardOfKrati'


const KratiCard= () => {
    return(
        
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Recent Posts
                </h1>
                <div className={styles.posts}>
                    <cardOfKrati/>
                    
                    

                    
                </div>
            <Pagination/>
            </div>
            
        
        
    )
}

export default KratiCard