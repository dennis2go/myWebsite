"use client"
import { useState } from "react";
import styles from "./card.module.css"
import { FaAngleDown } from "react-icons/fa";

export default function Card({course, description, grade, semester}: {course: string, description: string, grade: number, semester: string}) {
    const [expanded, setExpanded] = useState(false);

    const handleButtonClick = () => {
        setExpanded(!expanded); // Umgekehrten Wert von expanded setzen
    };
    return (
    <>
        <div className={`${styles.container} ${expanded ? styles.expanded : ''}`}>
            <div className={styles.header}>
                <div className={styles.grade}>
                    <p className={styles.gradeP}> {grade}</p>
                </div>
                <div className={styles.semester}>
                    <p className={styles.semesterP}> {semester}</p>
                </div>
            </div>
            <h4 className={styles.h4}> {course} </h4>
            <p className={styles.p}> mithil sajeneremrn njsansjnwejnw ajknskanskn kwndj nwd jndw jnndw jnnw nnjnw jndwjndjwn jnjnw djnwdnw </p>
            <button aria-label="button" className={styles.button} onClick={handleButtonClick}> <FaAngleDown className={styles.FaAngleDown}/> </button>
        </div>
    </>
  )
} 
