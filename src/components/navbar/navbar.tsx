"use client"
import { useState } from "react";
import styles from "./navbar.module.css"
import Link from "next/link"
import {MdMenu} from "react-icons/md";

const navLinks = [
    {title: "About.", description: "Who I am"},
    {title: "Skills.", description: "What I can do"},
    {title: "Experience.", description: "What I've learned"},
    {title: "Projects.", description: "What I've done"},
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <div className={menuOpen ? `${styles.ulBack} ${styles.open}` : styles.ulBack}>
                <ul className={styles.ul}> 
                    {navLinks.map((link) => (
                        <li className={styles.li} key={link.title}>
                            <Link className={styles.link} href={`/${link.title.replace(/\./g, "")}`}>
                                <div className={styles.firstText}>{link.title}</div>
                                <div className={styles.secondText}>{link.description}</div>
                                <span className={styles.span}></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <button className={styles.menuButton} onClick={toggleMenu}>
                &#8203;<div className={styles.menuIcon}></div>
            </button>
        </>
    )
}

