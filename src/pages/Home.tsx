import { useState } from 'react';
import { Modal } from '../components/Modal';
import { FaReact, FaSass, FaUserTie, FaDatabase } from 'react-icons/fa';
import { SiNodeDotJs, SiHtml5, SiFirebase, SiTypescript, SiJavascript } from 'react-icons/si';
import { IoSchoolSharp } from 'react-icons/io5';
import { GiFist } from 'react-icons/gi';

import photo from '../assets/ed.png';
import styles from '../styles/home.module.scss';

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
        sicon: <FaReact />
    },
    {
        id: 7,
        sname: 'html',
        sicon: <SiHtml5 />
    },
    {
        id: 8,
        sname: 'firebase',
        sicon: <SiFirebase />
    },
    {
        id: 9,
        sname: 'faunadb',
        sicon: <FaDatabase />
    },
]

export function Home() {
    const [showSkillsModal, setShowSkillsModal] = useState(false);
    const [showJobsModal, setShowJobsModal] = useState(false);


    return (
        <div className={styles.container}>
            <div className={styles.contentOne}>
                <div className={styles.div1}>
                    <div className={styles.buttonsContainer}>
                        <button><IoSchoolSharp size={30} /></button>
                        <button onClick={() => setShowJobsModal(true)}><FaUserTie size={30} /></button>
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
                    <div className={styles.contentThree_div1_box}>
                        <span>hello word</span>

                    </div>
                </div>
                <div className={styles.div2}>
                    <div className={styles.contentThree_div2_box}>
                        <span>hello word</span>

                    </div>
                </div>
            </div>
        </div>
    );
}