import react from 'react'
import styles from "./cardlist.module.css"
import Pagination from '../Pagination/Pagination'
import Card from '../card/Card'
import Card2 from '../card2/Card'
import Card3 from '../card3/Card'
import Card4 from '../card4/Card'


const CardList= () => {
    return(
        
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Recent Posts
                </h1>
                <div className={styles.posts}>
                    <Card/>
                    <Card2/>
                    <Card3/>
                    <Card4/>
                    
                </div>
            <Pagination/>
            </div>
            
        
        
    )
}

export default CardList