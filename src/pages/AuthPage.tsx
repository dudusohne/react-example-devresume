
import { useHistory } from 'react-router';
import { useAuth } from '../hooks/useAuth';

import { FaGoogle } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import styles from '../styles/authpage.module.scss';
import photo from '../assets/ed.png';

export function AuthPage() {
    const { signInWithGoogle } = useAuth();
    const history = useHistory();

    async function handleGoogleAuth() {
        try {
            await signInWithGoogle();
            history.push('/home');
        } catch (e) {
            console.log(e, 'não foi possível autenticar')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerLogin}>
                <div className={styles.containerLoginWrapper}>
                    <img src={photo} alt="me" />
                    <span className={styles.title}>PORTIFÓLIO DE</span>
                    <span className={styles.subtitle}>EDUARDO SOHNE</span>
                    <button onClick={handleGoogleAuth} className={styles.googleButton}>
                        <FaGoogle className={styles.icon} />
                        Acesse com o google
                    </button>
                </div>
                <div className={styles.footer}>
                    <a href="https://github.com/dudusohne" target="_blank" rel="noreferrer" >
                        <VscGithub className={styles.icon} onClick={() => history.push('https://github.com/dudusohne')} />
                    </a>
                    <a href="https://www.linkedin.com/in/eduardo-sohne-62a183118/" target="_blank" rel="noreferrer" >
                        <AiOutlineLinkedin className={styles.icon2} onClick={() => history.push('https://www.linkedin.com/in/eduardo-sohne-62a183118/')} />
                    </a>

                </div>
            </div>
        </div>

    )
}