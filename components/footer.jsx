import { FIRST_NAME, STUDENT_NAME } from "./constants";

function Footer(){
    return(
        <footer>
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">{FIRST_NAME}</h1>
                        <span className="footer__subtitle">Web Developer</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Skills</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Contact</a>
                        </li>
                    </ul>
                    <div className="footer__socials">
                        <a href="#" className="footer__social">
                        <i class="uil uil-instagram"></i>
                        </a>
                        <a href="#" className="footer__social">
                        <i class="uil uil-linkedin-alt"></i>
                        </a>
                        <a href="#" className="footer__social">
                        <i class="uil uil-youtube"></i>
                        </a>
                    </div>
                </div>
                <p className="footer__copy">&#169; {STUDENT_NAME}. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;