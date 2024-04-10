import styles from "./about.module.css"
import { useInView, InView } from 'react-intersection-observer';

export default function About() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.2,
    });
    return (
    <div ref={ref} className={inView ? styles.container : styles.classNameNotInView}>
        <div className={styles.top}>
            <div className={styles.littleTop}></div>
            <h1 className={styles.h1}> About Me </h1>
        </div>
        <ul className={styles.ul}>
            <li className={styles.li}> Hello my Name is Dennis Blömeke.</li>
            <li className={styles.li}> I was born and am currently living in Berlin.</li>
            <li className={styles.li}> I&apos;am studying Media Computer Science at BHT Berlin.</li>
            <li className={styles.li}> Currently i&apos;am focussing on Web Engineering.</li>
        </ul>
    </div>
  )
}
