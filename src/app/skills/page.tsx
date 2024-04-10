import styles from "./skills.module.css"
import SkillSlider from "@/components/skillslider/skillslider"
let languageSkills = [
    {skill: "Typescript.", percentage: 70},
    {skill: "Java.", percentage: 65},
    {skill: "C#.", percentage: 40},
    {skill: "CSS.", percentage: 85},
]

let technologySkills = [
    {skill: "React.", percentage: 50},
    {skill: "NextJS.", percentage: 40},
    {skill: "Unity.", percentage: 50},
    {skill: "Git.", percentage: 60},
    {skill: "MongoDB.", percentage: 30},
]

export default function SkillsPage() {
  return (
    <>
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h1 className={styles.h1}> Programming Languages</h1>
                {languageSkills.map((skill) => ( <SkillSlider key= {skill.skill} skill={skill.skill} percentage={skill.percentage} />))}
            </div>
            <div className={styles.container}>
                <h1 className={styles.h1}> Technologies</h1>
                {technologySkills.map((skill) => ( <SkillSlider key= {skill.skill} skill={skill.skill} percentage={skill.percentage} />))}
            </div>
        </div>
    </>
  )
}
