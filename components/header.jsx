import Script from "next/script";
import { FIRST_NAME, STUDENT_NAME } from "./constants";
function Header() {
    function handleClick() {
        const navMenu = document.getElementById("nav-menu");
        const navToggle = document.getElementById("nav-toggle");
        
        if (navToggle) {
            navToggle.addEventListener('click', () => {
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
                <nav className="nav container">
                <a href="#" className="nav__logo">{FIRST_NAME}</a>
                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <i className="uil uil-estate nav__icon"></i>
                                    Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <i className="uil uil-user nav__icon"></i>
                                    About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <i className="uil uil-file-alt nav__icon"></i>
                                    Skills
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <i className="uil uil-scenery nav__icon"></i>
                                    Portfolio
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="uil uil-message nav__icon"></i>
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <i className="uil uil-times nav__close" id="nav-close" onClick={handleClose}></i>
                    </div>

                    <div className="nav__btns">
                        <i class="uil uil-moon change__theme" id="theme__button"></i>
                        <div className="nav__toggle" id="nav-toggle" onClick={handleClick}>
                            <i className="uil uil-apps"></i>
                        </div>
                    </div>
                </nav>

            </header>
        </div>
    );
}
export default Header;