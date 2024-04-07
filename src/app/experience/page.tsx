import styles from "./experience.module.css"
import Card from "@/components/card/card"

export default function ExperiencePage() {
  return (
    <>
        <h1 className={styles.h1}> completed Courses </h1>
        <div className={styles.container}>
            <Card course={"Web Engineering"} description={""} grade={1.3} semester={"5.Semester"}/>
            <Card course={"Datenbanken"} description={""} grade={1.7} semester={"1.Semester"}/>
            <Card course={"Software Engineering"} description={""} grade={2} semester={"3.Semester"}/>
            <Card course={"Software Engineering"} description={""} grade={2} semester={"3.Semester"}/>
            <Card course={"Software Engineering"} description={""} grade={2} semester={"3.Semester"}/>
            <Card course={"Software Engineering"} description={""} grade={2} semester={"3.Semester"}/>
            <Card course={"Software Engineering"} description={""} grade={2} semester={"3.Semester"}/>      
        </div>
    </>
  )
}
