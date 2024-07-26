import react from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link';
import Image from 'next/image';

const CategoryList= () => {
    return(

    
        
            <div className={styles.container}>
               <h1 className={styles.title}>His People</h1>
               <div className={styles.categories}>
                 
                    {/* <//</div>Link href= className={`${styles.category} ${style.styles }`}> */}
                    {/* //<Image src="/style.png" alt=" " width = {24} height={24} className={styles.image}/> style */}
                    {/* //</Link> */}
                    <Link href="/byKrati" className={`${styles.category} ${styles.style }`}><Image src="/kkpics/krati.png" alt=" " width = {120} height={120} className={styles.image}/> Krati </Link>

                    <Link href="/byNaveen" className={`${styles.category} ${styles.coding }`}><Image src="/coding.png" alt=" " width = {120} height={120} className={styles.image}/> Naveen </Link>

                    <Link href="/byPrajwal" className={`${styles.category} ${styles.culture }`}><Image src="/kkpics/prajwal.png" alt=" " width = {120} height={120} className={styles.image}/> Prajwal </Link>

                    <Link href="/byManyata" className={`${styles.category} ${styles.travel }`}><Image src="/kkpics/manyata.png" alt=" " width = {120} height={120} className={styles.image}/> Manyata </Link>

                   

                    <Link href="/byVasu" className={`${styles.category} ${styles.food }`}><Image src="/kkpics/vasu.png" alt=" " width = {120} height={120} className={styles.image}/> Vasu </Link>

                    {/* <Link href="/fashionblog" className={`${styles.category} ${styles.fashion }`}><Image src="/fashion.png" alt=" " width = {24} height={24} className={styles.image}/> Fashion </Link> */}

                
                 
               </div>
            </div>
        
        
    );
}

export default CategoryList