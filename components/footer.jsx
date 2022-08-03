import { FIRST_NAME, MAIN_ROLE, STUDENT_NAME } from "./constants";

function Footer(){
    return(
        <footer>
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">{FIRST_NAME}</h1>
                        <span className="footer__subtitle">{MAIN_ROLE}</span>
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
                        <a href="#" className="footer__social" target="_blank">
                            <i class="uil uil-instagram"></i>
                        </a>
                        <a href="#" className="footer__social" target="_blank">
                            <i class="uil uil-linkedin-alt"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCSCnbpXEUH2Pv9imvuFVrqg" className="footer__social" target="_blank">
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