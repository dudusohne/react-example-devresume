


import styles from '../styles/home.module.scss';

export function Home() {


    return (
        <div className={styles.container}>
            <div className={styles.contentOne}>
                <div className={styles.div1}>
                    <span className={styles.welcomeTitle}>Seja bem vindo
                        <br></br> ao meu portifólio
                    </span>
                </div>
                <div className={styles.div2}>
                    <span>hello word</span>

                </div>
            </div>
            <div className={styles.contentTwo}>
                <div className={styles.div1}>


                </div>
                <div className={styles.div2}>
                    <span>hello word</span>

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