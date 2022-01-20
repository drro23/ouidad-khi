import styles from '../styles/lineMenuButton.module.css';

const LineMenuButton = ({ updateMenu }) => {
    return (
        <div className={styles.container} onClick={() => updateMenu()}>
            <div className={styles.line}/>
            <div className={styles.line}/>
            <div className={styles.line}/>
        </div>
    )
}

export default LineMenuButton;
