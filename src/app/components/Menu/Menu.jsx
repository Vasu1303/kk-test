import react from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import MenuPost from '../menuPosts/MenuPosts'
import { EditorsPick } from '../EditorsPick/EditorsPick'

const Menu= () => {
    return(
            // TRENDING SECTION
            <div className={styles.container}>
                


            {/* // DISCOVER SECTION  */}
            
            <h2 className={styles.discover}>Discover KK </h2>
            <h1 className={styles.categories}>Features</h1>  
            
            <div className={styles.categoryList}>
                
                <Link href=" " className={`${styles.categoryItem} ${styles.styles}`}>
                    <Image src="/kkpics/kklogo2.png" width={40} height={40} />
                </Link>
                <Link href="" className={`${styles.categoryItem} ${styles.travel}`}>Bajna</Link>
                <Link href="" className={`${styles.categoryItem} ${styles.coding}`}>DSA KING</Link>
                <Link href="" className={`${styles.categoryItem} ${styles.culture}`}>dadagiri</Link>
                <Link href="" className={`${styles.categoryItem} ${styles.fashion}`}>cute</Link>
                <Link href="" className={`${styles.categoryItem} ${styles.food}`}>princess</Link>
            </div>

            {/* EDITOR'S PICK */}
                <h2 className={styles.secondMenuTitle}>Also his people</h2>
                <h1 className={styles.secondMenuTheme}>Sabki Wishes</h1>
                <div className={styles.items}>
                    <EditorsPick withImage={true}/>
                </div>

                
            </div>
        
        
    )
}

export default Menu