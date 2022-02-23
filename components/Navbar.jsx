import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react"

const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (
        <div className={styles.container}>
         <Link href="/">Smilepk</Link>
         <ul className={styles.list}>
             <li className={styles.listItem}>
             <Link href="/products/Design">Design</Link>
             </li>
             <li className={styles.listItem}>
             <Link href="/products/Development">Development</Link>
             </li>
             <li className={styles.listItem}>
             <Link href="/products/Production">Production</Link>
             </li>
             <li className={styles.listItem}>
             <Link href="/products/Marketing">Marketing</Link>
             </li>
             <li className={styles.listItem}>
             <Link href="/contact">Contact</Link>

             </li>


         </ul>
         <div className={styles.humburger} onClick={() => setOpen(!open)} >
             <div className={styles.line} />
             <div className={styles.line} />
             <div className={styles.line} />
         </div>
         <ul onClick={()=> setOpen(false) }className={styles.menu} style={{ right: open ? "0px" : "-50vw"}}>
             <li className={styles.menuItem}>

             <Link href="/products/Design">Design</Link>
             </li>
             <li className={styles.menuItem}>
             <Link href="/products/Development">Development</Link>
             </li>
             <li className={styles.menuItem}>
             <Link href="/products/Production">Production</Link>
             </li>
             <li className={styles.menuItem}>
             <Link href="/products/Marketing">Marketing</Link>
             </li>
             <li className={styles.menuItem}>
             <Link href="/contact">Contact</Link>
 

             </li>
         </ul>

        </div>
    );
};

export default Navbar;
