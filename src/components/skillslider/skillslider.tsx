"use client"
import { useRef, useEffect } from 'react';
import styles from "./skillslider.module.css"

export default function SkillSlider({skill, percentage}: {skill: string, percentage: number}) {
    const innerSliderRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (innerSliderRef.current) {
            innerSliderRef.current.style.setProperty('--percentage', `${percentage / 100}`);
        }
    }, [percentage]);
    return (
        <>
            <div className={styles.container}>
                <p className={styles.p}>{skill}</p>
                <div className={styles.slider}>
                <div className={styles.innerSlider} ref={innerSliderRef}>
                    <div className={styles.header}>
                        <p className={styles.pHeading}> {percentage}</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
