import React from "react";
import CardList from "../components/CardList/Cardlist";
import Menu from "../components/Menu/Menu";
import styles from "./blogPage.module.css"
import Image from "next/image";
import Footer from "../components/footer/Footer";


export const BlogPage=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>By Krati</h1>
            <div className={styles.content}>
                <div className={styles.letter}>
                    <div className={styles.image}>

                        <Image src="/kkpics/kkandkraticover.jpg" height={1000} width={1000} className={styles.coverimage}/>
                    </div>

                    <div className={styles.text}>
                        <h1>YES SIR</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maiores hic veniam vero pariatur voluptatum quam commodi repellat quos, in tempora voluptatibus mollitia iste maxime. Id, quibusdam. Inventore, fugiat alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, beatae numquam reiciendis ratione, temporibus in eum maiores, corporis eligendi soluta velit praesentium illum voluptatum quibusdam? Velit facilis eveniet accusamus impedit! </p>
                    </div>





                </div>
                <div>
                    <h1>GALLERY</h1>
                </div>
                <div className={styles.gallery}>
                    <Image src="/kkpics/kkandKrati5.jpg" height={500} width={500} className={styles.image}/>
                    <Image src="/kkpics/kkandkraticover.jpg" height={1000} width={1000} className={styles.image}/>
                    <Image src="/kkpics/kkandkrati7.jpg" height={1000} width={1000} className={styles.image}/>
                    <Image src="/kkpics/kkandkrati3.jpg" height={1000} width={1000} className={styles.image}/>
                    <Image src="/kkpics/kkandkrati4.jpg" height={1000} width={1000} className={styles.image}/>
                    
                    <Image src="/kkpics/kkandkrati6.jpg" height={1000} width={1000} className={styles.image}/>
                    <Image src="/kkpics/kkandkrati9.jpg" height={1000} width={1000} className={styles.image}/>
                    <Image src="/kkpics/kkandkrati11.jpg" height={500} width={500} className={styles.image}/>
                   
                   


                </div>

                 

               
                

               
                


            </div>
        </div>
    )
}

export default BlogPage;