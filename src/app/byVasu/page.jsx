import React from "react";
import CardList from "../components/CardList/Cardlist";
import Menu from "../components/Menu/Menu";
import styles from "./foodPage.module.css";
import Image from "next/image";

export const foodblog=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>By Vasu</h1>
            <div className={styles.content}>
            <div className={styles.letter}>
                    <div className={styles.image}>

                        <Image src="/kkpics/kkandvasu2.jpg" height={1000} width={1000} className={styles.coverimage}/>
                    </div>

                    <div className={styles.text}>
                        <h1>Itna maarunga na kisi din</h1>
                        <p>Damn. Bhai. Birthday aagya.</p>
                        <p>A very Happy Birthday to the ONE</p>
                        <p>The ONE Friend I finally found in college, jispar me andha vishwas karlu. Jada chik chik nahi krunga, tujhe pata hai teri kya importance hai meri life me. (MUJHE BHI PATA HAI MERI KYA HAI). Mere bina tu bin paani ki kashti haii. </p>
                        <p>Humesha saath diya haii tune, humesha samjhaya hai, boht baar doobte doobte bachaya hai. Aage bhi krta rahio, bolna na pade.</p>
                        <p>No kidding. Thank you for being there always, Ik chik chik chalri hai thodi. Bhool jaio.(OR KOI OPTION BHI NAHI HAI TERE PAAS)</p>
                        <p>Apni koi khaas photos nahi hai saath me, proves how good friends we are.</p>
                        <p>Once Again, a very very Happy Birthday and THANKYOU FOR EVERYTHING. EVERYTHING</p>
                        <br />
                       
                        <p>~Vasu</p>
                    </div>





                </div>
                <div>
                    <h1>GALLERY</h1>
                </div>
                <div className={styles.gallery}>
                    <Image src="/kkpics/kkandvasu1.jpg" height={500} width={500} className={styles.image}/>
                    <Image src="/kkpics/kkandvasu2.jpg" height={500} width={500} className={styles.image}/>
                    <Image src="/kkpics/kkandvasu3.jpg" height={500} width={500} className={styles.image}/>
                    <Image src="/kkpics/kkandvasu4.jpg" height={500} width={500} className={styles.image}/>
                    <Image src="/kkpics/kkandvasu7.jpg" height={500} width={500} className={styles.image}/>
                    
                    <Image src="/kkpics/kkandvasu6.jpg" height={500} width={500} className={styles.image}/>
                    <Image src="/kkpics/kkandvasu8.jpg" height={500} width={500} className={styles.image}/>
                   
                   


                </div>
                

            </div>
        </div>
    )
}

export default foodblog;