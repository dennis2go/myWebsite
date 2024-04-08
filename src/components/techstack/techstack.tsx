import styles from "./techstack.module.css"
import typescript from '../../../public/typescript.png';
import csharp from '../../../public/c-sharp.png';
import react from '../../../public/React.png';
import nextjs from '../../../public/nextjs.png';
import git from '../../../public/Git.png';
import css from '../../../public/CSS3.png';
import mongo from '../../../public/mongo.png';
import java from '../../../public/java.svg';
import unity from '../../../public/unity.png';
import Image from "next/image";

const skillsList = [
    {title: "Typescript.", icon: typescript},
    {title: "React.", icon: react},
    {title: "NextJS.", icon: nextjs},
    {title: "Java.", icon: java},
    {title: "C#.", icon: csharp},
    {title: "Unity.", icon: unity},
    {title: "Git.", icon: git},
    {title: "MongoDB.", icon: mongo},
    {title: "CSS.", icon: css},
]

export default function Techstack() {
    return (
        <>
            <div className={styles.container}> {skillsList.map((skill) => (<div className={styles.innerContainer} key={skill.title}> 
                <Image className={styles.image} alt="Logo" src={skill.icon}></Image>
                <p className={styles.p}> {skill.title} </p> </div>))}  
            </div>
            <div className={styles.container2}> {skillsList.map((skill) => (<div className={styles.innerContainer} key={skill.title}> 
                <Image className={styles.image} alt="Logo" src={skill.icon}></Image>
                <p className={styles.p}> {skill.title} </p> </div>))}  
            </div>
        </>
    )
}
