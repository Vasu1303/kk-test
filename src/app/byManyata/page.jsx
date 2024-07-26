import React from "react";
import CardList from "../components/CardList/Cardlist";
import Menu from "../components/Menu/Menu";
import styles from "./byManyata.module.css";
import Image from "next/image";

export const travelblog=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>By Manyata</h1>
            <div className={styles.content}>
                <div className={styles.letter}>
                            <div className={styles.image}>

                                <Image src="/kkpics/kkandManyata1.jpg" height={1000} width={1000} className={styles.coverimage}/>
                            </div>

                            <div className={styles.text}>
                                <h1>YES SIR</h1>
                                <p>HAPPY BIRTHDAY KK BHAIYA  
                                    Pehle thoda ashirwad dedeti hun : May good bless you with happiness success and joy may all your dreams come true…
                                    <br /> 
                                    Ab thoda nautanki but thankyou for always being there someone whom I can text when I want and need… last 6 months of my life have be super special coz I found someone like you but truly thanks being there bhaiya.<br /><br />
                                    Thankyou for making me feel worthy of myself when I am down thankyou for making me feel special thankyou for always being there thankyou for the late night bakvas baate thankyou for every mango shake treat thankyou for sharing your life thankyou for trusting me thankyou for endless metro memories thankyou for everything kk bhaiya.
                                    And THANKYOU FOR TREATING ME LIKE A CHOTU SISTER MEANS A LOT 
                                    Hope this friendship have many years more to go…. Touchwood thu thu thu (jab likh rahi thu tab touch kar liya tha ab jab aap padhoge toh karlena) 

                                    Happy birthday once again 🥳 	
                                    Bohot sare mango shakes are pending and a party too.<br /><br />


                                    Your cute junior <br />

                                    ~Manyata
                                </p>
                            </div>





                </div>
                <div>
                        <h1>GALLERY</h1>
                </div>
                <div className={styles.gallery}>
                        <Image src="/kkpics/kkandManyata2.jpg" height={500} width={500} className={styles.image}/>
                        <Image src="/kkpics/kkandManyata3.jpg" height={500} width={500    } className={styles.image}/>
                        <Image src="/kkpics/kkandManyata1.jpg" height={500} width={500    } className={styles.image}/>
                        <Image src="/kkpics/kkandManyata4.jpg" height={500} width={500    } className={styles.image}/>
                    


                </div>
                


            </div>
        </div>
    )
}

export default travelblog;