import styles from './Header.module.css';
import logoImg from '../assets/logo.svg';

export function Header() {

    return (
        <header className={styles.content}>
            <img src={logoImg} alt="logo" />
        </header>
    )
}