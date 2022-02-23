import styles from "../styles/Intro.module.css"
import Image from "next/image"
import Circle from "./Circle"

const intro = () => {
  return (
    <div className={styles.container}>
        <Circle backgroundColor="#baff49" top=" -50vh" left="-50vh"/>
        <Circle backgroundColor="#01c686" right= "-40vh"/>
        <div className={styles.card}>
            <h1 className={styles.title}>
                <span className={styles.brand}> Smile </span>
                  Digital 
                  Products design and development Agency
            </h1>
            <p className={styles.description}>
                Create live segment and target the right people for
                messages based on their behaviours.
            </p>
            <button className={styles.button}>Discover</button>
        </div>
        <div className={styles.card}>
            <Image src="/image/pic2.jpg"
            width="100% "
            height="100%"
            layout="fill"
            alt="software" />
        </div>
        

      
    </div>
  )
}

export default intro
