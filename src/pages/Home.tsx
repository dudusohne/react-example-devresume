import { useState } from 'react';
import { Modal } from '../components/Modal';
import { Modal2 } from '../components/Modal2';
import { FaReact, FaSass, FaUserTie, FaDatabase } from 'react-icons/fa';
import { SiNodeDotJs, SiHtml5, SiFirebase, SiTypescript, SiJavascript } from 'react-icons/si';
import { IoSchoolSharp } from 'react-icons/io5';
import { GiFist } from 'react-icons/gi';

import photo from '../assets/ed.png';
import styles from '../styles/home.module.scss';
import casaImg from '../assets/images/casa-mobile.png';
import casaImg2 from '../assets/images/casa-responsive.png';
import { ProjectCard } from '../components/ProjectCard';

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

const jobs = [
    {
        id: 1,
        sname: 'javascript',
        sicon: <SiJavascript />
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
                        <button className={styles.buttonCategories}><IoSchoolSharp size={30} /></button>
                        <button className={styles.buttonCategories} onClick={() => setShowJobsModal(true)}><FaUserTie size={30} /></button>
                        <button className={styles.buttonCategories} onClick={() => setShowSkillsModal(true)}><GiFist size={30} /></button>
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
                    <Modal2 onClose={() => setShowJobsModal(false)} show={showJobsModal}>
                        <div className={styles.boxContentTwo}>
                            <span className={styles.div2title}>skills</span>
                            {jobs.map((jobs: any) => {
                                return (
                                    <div className={styles.listContentTwo}>
                                        <span className={styles.listContentTwoSkill}>{jobs.sname}</span>
                                        <span className={styles.listContentTwoSkillIcon}>{jobs.sicon}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </Modal2>
                </div>
                <div className={styles.div2}>
                </div>
            </div>
            <div className={styles.contentThree}>
                <div className={styles.div1}>
                    <ProjectCard
                        imgBanner={casaImg2}
                        name="CASA LIBRE"
                        desc="Controle de comandas, fechamento de caixa e controle de estoque"
                    />
                </div>
                <div className={styles.div2}>
                    <ProjectCard
                        imgBanner={casaImg2}
                        name="CASA LIBRE"
                        desc="Controle de comandas, fechamento de caixa e controle de estoque"
                    />
                </div>
            </div>
            <div className={styles.contentFour}>
                <div className={styles.div1}>
                    <ProjectCard
                        imgBanner={casaImg2}
                        name="CASA LIBRE"
                        desc="Controle de comandas, fechamento de caixa e controle de estoque"
                    />
                </div>
                <div className={styles.div2}>
                    <ProjectCard
                        imgBanner={casaImg2}
                        name="CASA LIBRE"
                        desc="Controle de comandas, fechamento de caixa e controle de estoque"
                    />
                </div>
            </div>


        </div>
    );
}