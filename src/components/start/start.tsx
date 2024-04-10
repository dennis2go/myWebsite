import styles from "./start.module.css"
import Techstack from "../techstack/techstack"

export default function Start() {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.hContainer}>
                <div className={styles.firstHDiv}> <h2 className={styles.h2}> Welcome i&apos;m</h2>  </div>
                <h1 className={styles.h1}> Dennis Blömeke</h1>
                <div className={styles.secondHDiv}> <h2 className={styles.h2}> a Junior Developer</h2>  </div>
            </div>
            <Techstack/>
        </div>
    </>
  )
}
