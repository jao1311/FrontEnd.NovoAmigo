import Logo from "@/Logo";
import Menu from "@/Menu";
import styles from './styles.module.css'

export default function Header() {
    return (
    <header className={styles.root}>
        <Logo/>
        <Menu/>
    </header>
    );
}