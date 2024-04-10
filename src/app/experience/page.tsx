import styles from "./experience.module.css"
import Card from "@/components/card/card"

const courses = [
    {course: "Web Engineering 1" ,description: "Mainly learning HTML, CSS and especially Java-/Typescript. Covered concepts such as events and asynchrony",grade:1.3 ,semester:"3.Semester"},
    {course: "Web Engineering 2" ,description: "Building our own full stack shopping application. With the MERN stack and an in-memory MongoDB database",grade:1.3 ,semester:"4.Semester"},
    {course: "Computergrafik" ,description: "Step-by-step implementation (weekly consecutive tasks to improve the ray tracer) of a complex ray tracer in Java",grade:1.3 ,semester:"4.Semester"},
    {course: "Human Computer Interaction" ,description: "Implementation of a drawing application using gesture-control to draw and speech to call functions.(Done in Processing)",grade:1.0 ,semester:"4.Semester"},
    {course: "Game Engineering" ,description: "Building our own Unitygame in smaller Groups. We developed a Trading-Cardgame inspired by Hearthstone in C#",grade:1.3 ,semester:"5.Semester"},
    {course: "Software Engineering 1" ,description: "Practicing Java by completing weekly Programming Tasks, learning UML Diagrams and a deeper dive into GIT",grade:1.3 ,semester:"3.Semester"},
    {course: "Software Engineering 2" ,description: "Building mini Projects in Java out of UML Diagrams. Getting to know and using Docker and Apache Maven",grade:1.3 ,semester:"4.Semester"},
    {course: "Verteilte Systeme" ,description: "Learning basic concepts of networks and how the Internet works, based on the ISO/OSI Layer-model",grade:1.3 ,semester:"3.Semester"},
    {course: "Programming 1 & 2" ,description: "Getting to know the whole World of Computer Science and learning Java. Later Building a small Calender with JavaFX",grade:2.7 ,semester:"1/2.Semester"},
    {course: "Algorithms & Datastructures" ,description: "Learning different sortingalgorithms, breadth and depth-search and Dijkstra and how to implement them",grade:3.0 ,semester:"2.Semester"},
    {course: "Databases" ,description: "Learning SQL and implementing a little Database Project with Oracle Database",grade:2.7 ,semester:"2.Semester"},
]

export default function ExperiencePage() {
  return (
    <>
        <h1 className={styles.h1}> completed Courses </h1>
        <div className={styles.container}>
            {courses.map((card) => (<Card key={card.course} course={card.course}  description={card.description}  grade={card.grade} semester={card.semester}/>))}
                
        </div>
    </>
  )
}
