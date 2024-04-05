import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import styles from "./page.module.css";
export default function Home() {
  return (
    <>
        <div className={styles.container}>
            <Navbar/>
            <div>
                <h1 className={styles.h1}> Dennis Blömeke</h1>
                <h2 className={styles.h2}> Junior Developer</h2> 
            </div>
        </div>
    </>
  );
}
