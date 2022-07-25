import Script from "next/script";
import styles from "../styles/Header.module.css";
function Header(){
    return(
        <div>
            <header className={styles.header} id="header">
                <nav className={[...styles.nav,styles.container]}>
                    <a href="#" className={styles.nav__logo}>Dnyanesh Bachhav</a>
                    <div className={styles.nav__menu} id="nav-menu">
                        <ul className={[...styles.nav__list,styles.grid]}>
                            <li className={styles.nav__item}>
                                <a href="#home" className={styles.nav__link}>
                                    <div className={styles.nav__icon}><i className="uil uil-estate"></i></div>
                                </a>
                                Home
                            </li>
                            <li className={styles.nav__item}>
                                <a href="#About" className={styles.nav__link}>
                                    <div className={styles.nav__icon}><i className="uil uil-user"></i></div>
                                </a>
                                About
                            </li>
                            <li className={styles.nav__item}>
                                <a href="#skills" className={styles.nav__link}>
                                    <div className={styles.nav__icon}><i className="uil uil-file-alt"></i></div>
                                </a>
                                Skills
                            </li>
                            <li className={styles.nav__item}>
                                <a href="#portfolio" className={styles.nav__link}>
                                    <div className={styles.nav__icon}><i className="uil uil-scenery"></i></div>
                                </a>
                                Portfolio
                            </li>
                            <li className={styles.nav__item}>
                                <a href="#contact" className={styles.nav__link}>
                                    <div className={styles.nav__icon}><i className="uil uil-message"></i></div>
                                </a>
                                Contact
                            </li>
                        </ul>
                        <i className="uil uil-times" id="nav-close"></i>
                    </div>
                    <div className="nav__btns">
                        <div className="nav__toggle" id="nav-toggle">
                            <i className="uil uil-apps"></i>
                        </div>
                    </div>
                </nav>
                  
            </header>
        </div>
    );
}
export default Header;