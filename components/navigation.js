import Link from "next/link";
import LineMenuButton from "./lineMenuButton";

import styles from '../styles/navigation.module.css';
import {useState} from "react";

const Navigation = () => {
    const [isActive, setIsActive] = useState(false);
    const navClassName = isActive ? `${styles.navLinks} ${styles.active}` : styles.navLinks;

    const onUpdateMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.navLogoContainer}>
                    <span className={styles.navLogo}>
                        <Link href="/">OuidadKhi</Link>
                    </span>
                    <LineMenuButton updateMenu={onUpdateMenu}/>
                </div>
                <div className={navClassName}>
                    <Link href="/">Accueil</Link>
                    <Link href="/presentation">Présentation philosophique</Link>
                    <Link href="/gallery">Galerie</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
