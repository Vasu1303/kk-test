"use client"
import Image from "next/image";
import styles from "./writePage.module.css"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"; 
import React, { useState } from "react";


const writePage = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    return(
        <div className={styles.container}>
            <input type="text" placeholder="Title"  className={styles.title}/>
            <div className={styles.editor}>
                <button className={styles.button} onClick={()=> setOpen(!open)}>
                    <Image src="/add.png" alt="" width={28} height={28} className={styles.plu}/>  
                </button>
                {open && <div className={styles.add}>
                    <button className={styles.addbutton}>
                        <Image src="/image-gallery.png" alt="" width={16} height={16}/>  
                    </button><button className={styles.addbutton}>
                        <Image src="/link.png" alt="" width={16} height={16} className={styles.ytbutton}/>  
                    </button><button className={styles.addbutton}>
                        <Image src="/video.png" alt="" width={18} height={18}/>  
                    </button>
                    
                </div> }
        
            </div>
            <ReactQuill theme="bubble"  value={value}  onChange={setValue} placeholder="Tell your story.."  className={styles.inputText}  />
            <div className={styles.postingButton}>
                <button className={styles.postButton}>Publish</button>

            </div>
            

        </div>
    )
}

export default writePage;
