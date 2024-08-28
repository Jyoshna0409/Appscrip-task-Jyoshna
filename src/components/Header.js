// components/Header.js
import styles from '../styles/Home.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/images/logo.png" alt="Logo" class="logo-text"></img>
            </div>
            <div class="header-middle">
                <div className={styles.logo1}>LOGO</div>
            </div>
            <div class ="header-items"> 
            <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">SKILLS</a></li>
                        <li><a href="#">STORIES</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">CONTACT US</a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.icon}>
                    <span className={styles.iconSearch}>🔍</span>
                    <span className={styles.iconFavorite}>❤</span>
                    <span className={styles.iconBag}>🛒</span>
                    <span className={styles.iconUser}>👤</span>
                    <button className={styles.dropdownBtn}>ENG ▼</button>
                    <div className={styles.dropdownContent}>
                        
                    </div>
                </div>
                
            </div>
        </header>
    );
}
