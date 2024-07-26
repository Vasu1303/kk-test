import React from "react";
import CardList from "../components/CardList/Cardlist";
import Menu from "../components/Menu/Menu";
import styles from "./codingPage.module.css";
import Image from "next/image";

export const codingblog=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>By Naveen</h1>
            <div className={styles.content}>
                <div className={styles.letter}>
                        <div className={styles.image}>

                            <Image src="/kkpics/kkandkrati1.jpg" height={500} width={400} className={styles.image}/>
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
                        <Image src="/kkpics/kkandkrati1.jpg" height={300} width={250} className={styles.image}/>
                        <Image src="/kkpics/kkandkrati1.jpg" height={300} width={250    } className={styles.image}/>
                        <Image src="/kkpics/kkandkrati3.jpg" height={300} width={250    } className={styles.image}/>
                        <Image src="/kkpics/kkandkrati4.jpg" height={300} width={250    } className={styles.image}/>
                    


                    </div>
                


            </div>
        </div>
    )
}

export default codingblog;