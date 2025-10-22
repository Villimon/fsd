import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>Политика</span>
            <span>Правила пользования</span>
            <span>Все права защищены</span>
        </footer>
    )
}
