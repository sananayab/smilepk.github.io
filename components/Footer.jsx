import styles from "../styles/Footer.module.css"
import Image from "next/image"
import Link from "next/link"
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
  WhatsappIcon,
    
  } from 'next-share';


const footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardL}>
                <h1 className={styles.title}>Smilepk</h1>

                <h1 className={styles.linkTitle}>
                    <Link href="/contact" className={styles.link} passHref>
                    <>
                    <span className={styles.LinkText}> <a> Work with us</a> </span>
                    <Image src="/image/link.png" width="40px" height="40px" alt="link"/>
                    </>
                    </Link>
                    </h1>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    Join us <br/> Gulburg3 Lahore
                </div>
                <div className={styles.cardItem}>
                Email: smilepk145@gmail.com <br/> 
                <WhatsappShareButton
        url={'http://localhost:3000'} >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
                </div>
            </div>
            <div className={styles.carS}>
            <div className={styles.cardItem}>
                    Follow Us 
                    <br/> 
                    <FacebookShareButton
                    url={'https://www.facebook.com/profile.php?id=100008439577139'} >
                     <FacebookIcon size={30} round />
                     </FacebookShareButton>
                     
                     <LinkedinShareButton
        url={'https://www.linkedin.com/in/sana-nayyab-0b231b171/'} >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton> 
                </div>
                <div className={styles.cardItem}>
                 @2022 Smile INTERACTIVE ,
                 <br/> All rights reserved
                </div>
            
            </div>
            
        </div>
    );
}

export default footer
