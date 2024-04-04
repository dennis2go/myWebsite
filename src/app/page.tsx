import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import styles from "./page.module.css";
export default function Home() {
  return (
    <>
        <div className={styles.container}>
            <Navbar/>
            <h1 className="text-center font-bold text-5xl tracking-widest"> Dennis Blömeke</h1> 
        </div>
    </>
  );
}
