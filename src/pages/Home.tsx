import photo from '../assets/ed.png';
import styles from '../styles/home.module.scss';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { SiNodeDotJs } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';

const skills = [
    {
        id: 1,
        sname: 'javascript',
        sicon: <SiJavascript />
    },
    {
        id: 2,
        sname: 'react',
        sicon: <SiJavascript />
    },
    {
        id: 3,
        sname: 'sass',
        sicon: <FaSass />
    },
    {
        id: 4,
        sname: 'typescript',
        sicon: <SiTypescript />
    },
    {
        id: 5,
        sname: 'node',
        sicon: <SiNodeDotJs />
    },
]

export function Home() {


    return (
        <div className={styles.container}>
            <div className={styles.contentOne}>
                <div className={styles.div1}>
                    <span className={styles.welcomeTitle}>Eduardo Sohne</span>
                    <span className={styles.welcomeTitle2}>Software Engineer</span>
                </div>
                <div className={styles.div2}>
                    <img src={photo} alt="me" />
                </div>
            </div>
            <div className={styles.contentTwo}>
                <div className={styles.div1}>
                    <div className={styles.boxContentTwo}>
                        <span className={styles.div2title}>skills</span>
                        {skills.map((skill: any) => {
                            return (
                                <div className={styles.listContentTwo}>
                                    {skill.key}{skill.id}
                                    <span className={styles.listContentTwoSkill}>{skill.sname}</span>
                                    <span className={styles.listContentTwoSkillIcon}>{skill.sicon}</span>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className={styles.div2}>



                </div>
            </div>
            <div className={styles.contentThree}>
                <div className={styles.div1}>
                    <span>hello word</span>

                </div>
                <div className={styles.div2}>
                    <span>hello word</span>

                </div>
            </div>
        </div>
    );
}