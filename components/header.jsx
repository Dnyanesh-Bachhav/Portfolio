import Script from "next/script";
import styles from "../styles/Header.module.css";
function Header() {
    function handleClick() {
        console.log("Hello World...!!!");
        const navMenu = document.getElementById("nav-menu");
        const navToggle = document.getElementById("nav-toggle");
        
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                console.log("Clicked...");
                navMenu.classList.add("showMenu");
            })
        }
        
    }
    
    function handleClose(){

        const navMenu = document.getElementById("nav-menu");
        const navClose = document.getElementById("nav-close");
        if (navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove("showMenu");
            })
        }

    }

    return (
        <div>
            <header className="header" id="header">
                <nav className="nav">
                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <div className="nav__icon"><i className="uil uil-estate"></i></div>
                                    Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#About" className="nav__link">
                                    <div className="nav__icon"><i className="uil uil-user"></i></div>
                                    About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <div className="nav__icon"><i className="uil uil-file-alt"></i></div>
                                    Skills
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <div className="nav__icon"><i className="uil uil-scenery"></i></div>
                                    Portfolio
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <div className="nav__icon"><i className="uil uil-message"></i></div>
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="nav__close"><i className="uil uil-times" id="nav-close" onClick={handleClose}></i></div>
                    </div>
                    <div className="nav__btns">
                        <a href="#" className={styles.nav__logo}>Dnyanesh Bachhav</a>
                        <div className={styles.nav__toggle} id="nav-toggle" onClick={handleClick}>
                            <i className="uil uil-apps"></i>
                        </div>
                    </div>
                </nav>

            </header>
        </div>
    );
}
export default Header;