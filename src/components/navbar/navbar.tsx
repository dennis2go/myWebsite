import styles from "./navbar.module.css"
import Link from "next/link"
const navLinks = [
    {title: "About.", description: "Who I am"},
    {title: "Skills.", description: "What I can do"},
    {title: "Experience.", description: "What I've done"},
    {title: "Projects.", description: "What I've done"},
]

export default function Navbar() {
    return (
        <>
            <div className={styles.ulBack}>
                <ul className={styles.ul}> 
                    {navLinks.map((link) => (<li className={styles.li} key={link.title}>
                        <Link className={styles.link}href={`/${link.title.replace(/\./g, "")}`}>
                        <div className={styles.firstText}>{link.title} </div>
                        <div className={styles.secondText}>{link.description}</div>
                        <span className={styles.span}></span>
                        </Link>
                    </li>))}
                </ul>
            </div>
        </>
    )
}
