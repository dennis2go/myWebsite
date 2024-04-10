"use client"
import { useState } from "react";
import styles from "./navbar.module.css"
import Link from "next/link"
import {MdMenu} from "react-icons/md";
import { usePathname } from "next/navigation";

let modifiedNavLinks;
let navLinks = [
    {title: "About.", description: "Who I am"},
    {title: "Skills.", description: "What I can do"},
    {title: "Projects.", description: "What I've done"},
    {title: "Experience.", description: "What I've learned"},
]

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    switch (pathname) {
        case "/about":
            modifiedNavLinks = navLinks.map((link, index) => index === 0 ? { title: "Home", description: "back Home" } : link);
            break;
        case "/skills":
            modifiedNavLinks = navLinks.map((link, index) => index === 1 ? { title: "Home", description: "back Home" } : link);
            break;
        case "/projects":
                modifiedNavLinks = navLinks.map((link, index) => index === 2 ? { title: "Home", description: "back Home" } : link);
                break;
        case "/experience":
            modifiedNavLinks = navLinks.map((link, index) => index === 3 ? { title: "Home", description: "back Home" } : link);
            break;
        default:
            modifiedNavLinks = navLinks;
            break;
    }
    return (
        <>
            <div className={menuOpen ? `${styles.ulBack} ${styles.open}` : styles.ulBack}>
                <ul className={styles.ul}> 
                    {modifiedNavLinks.map((link) => (
                        <li className={styles.li} key={link.title}>
                            <Link className={styles.link} href={link.title === "Home" ? "/" : `/${link.title.replace(/\./g, "").toLowerCase()}`} onClick={toggleMenu}>
                                <div className={styles.firstText}>{link.title}</div>
                                {/* <div className={styles.secondText}>{link.description}</div> */}
                                <span className={styles.span}></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.buttonContainer}>
                <button aria-label="button" className={styles.menuButton} onClick={toggleMenu}>
                    <div className={styles.menuIcon}></div>
                            <div className={styles.menuIcon}></div>
                </button>
            </div>
        </>
    )
}

