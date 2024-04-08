import styles from "./about.module.css"
export default function AboutPage() {
  return (
    <div className={styles.container}>
        <h1 className={styles.h1}> About Me </h1>
        <span className={styles.span}></span>
        <div className={styles.div}>
            <div className={styles.sideStrip}> </div>
            <p className={styles.p}> 
            Hello my Name is Dennis Blömeke. <br />
            Hello my Name is Dennis Blömeke. <br /> 
            Hello my Name is Dennis Blömeke. <br />  
            </p>
        </div>
    </div>
  )
}
