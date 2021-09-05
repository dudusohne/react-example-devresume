
import { useHistory } from 'react-router';
import { useAuth } from '../hooks/useAuth';

import { FaGoogle } from 'react-icons/fa';
import styles from '../styles/authpage.module.scss';

export function AuthPage() {
    const { signInWithGoogle } = useAuth();
    const history = useHistory();

    async function handleGoogleAuth() {
        try {
            await signInWithGoogle();
            history.push('/home');
        } catch (e) {
            console.log('não foi possível autenticar')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerLogin}>
                <span className={styles.title}>Para acessar o meu portifólio</span>
                <button onClick={() => handleGoogleAuth} className={styles.googleButton}>
                    <FaGoogle className={styles.icon} />
                    Faça login com o google
                </button>
            </div>
        </div>

    )
}