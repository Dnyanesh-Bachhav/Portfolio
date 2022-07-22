import styles from "../styles/Header.module.css";
function Header(){
    return(
        <div>
            <header className={styles.header}>
                <nav className={styles.nav} >
                    <a href="#" className="nav__logo">Dnyanesh Bachhav</a>
                    <div className={styles.nav__menu}>
                        <ul className={styles.Header}>
                            <li className={styles.nav__item}>
                                <a href="#home" className={styles.nav__link}>
                                    <i class="uil uil-estate" className={styles.nav__icon}></i>
                                </a>
                                Home
                            </li>
                            <li className={styles.nav__item}>
                                <a href="#About" className={styles.nav__link}>
                                    <i class="uil uil-user" className={styles.nav__icon}></i>
                                </a>
                                About
                            </li>
                            <li className={styles.nav__item}>
                                <a href="#skills" className={styles.nav__link}>
                                    <i class="uil uil-file-alt" className={styles.nav__icon}></i>
                                </a>
                                Skills
                            </li>
                            <li className={styles.nav__item}>
                                <a href="#portfolio" className={styles.nav__link}>
                                    <i class="uil uil-scenery" className={styles.nav__icon}></i>
                                </a>
                                Portfolio
                            </li>
                            <li className={styles.nav__item}>
                                <a href="#contact" className={styles.nav__link}>
                                    <i class="uil uil-message" className={styles.nav__icon}></i>
                                </a>
                                Contact
                            </li>
                        </ul>
                        <i class="uil uil-times" id="nav-close" className={styles.nav__icon}></i>
                    </div>
                    <div className="nav__btns">
                        <div className="nav__toggle" id="nav-toggle">
                            <i class="uil uil-apps"></i>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
export default Header;