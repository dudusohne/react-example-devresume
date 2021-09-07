import photo from '../assets/ed.png';
import styles from '../styles/home.module.scss';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { SiNodeDotJs } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';

import { IoSchoolSharp } from 'react-icons/io5';
import { FaUserTie } from 'react-icons/fa';
import { GiFist } from 'react-icons/gi';
import { Modal } from '../components/Modal';
import { useState } from 'react';

const skills = [
    {
        id: 1,
        sname: 'javascript',
        sicon: <SiJavascript />
    },
    {
        id: 2,
        sname: 'react',
        sicon: <FaReact />
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
    {
        id: 6,
        sname: 'react-native',
        sicon: <SiNodeDotJs />
    },
    {
        id: 7,
        sname: 'html',
        sicon: <SiNodeDotJs />
    },
    {
        id: 8,
        sname: 'firebase',
        sicon: <SiNodeDotJs />
    },
    {
        id: 9,
        sname: 'faunadb',
        sicon: <SiNodeDotJs />
    },
]

export function Home() {
    const [showSkillsModal, setShowSkillsModal] = useState(false);


    return (
        <div className={styles.container}>
            <div className={styles.contentOne}>
                <div className={styles.div1}>
                    <div className={styles.buttonsContainer}>
                        <button><IoSchoolSharp size={30} /></button>
                        <button><FaUserTie size={30} /></button>
                        <button onClick={() => setShowSkillsModal(true)}><GiFist size={30} /></button>
                    </div>
                    <span className={styles.welcomeTitle}>Eduardo Sohne</span>
                    <span className={styles.welcomeTitle2}>Software Engineer</span>
                    <img src={photo} alt="me" />

                </div>

            </div>
            <div className={styles.contentTwo}>
                <div className={styles.div1}>
                    <Modal onClose={() => setShowSkillsModal(false)} show={showSkillsModal}>
                        <div className={styles.boxContentTwo}>
                            <span className={styles.div2title}>skills</span>
                            {skills.map((skill: any) => {
                                return (
                                    <div className={styles.listContentTwo}>
                                        <span className={styles.listContentTwoSkill}>{skill.sname}</span>
                                        <span className={styles.listContentTwoSkillIcon}>{skill.sicon}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </Modal>

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