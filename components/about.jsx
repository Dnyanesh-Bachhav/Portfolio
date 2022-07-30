import Image from "next/image";
import logo from "../assets/images/Dnyanesh_Bachhav.jpeg";
import { ABOUT_DESCRIPTION, STUDENT_NAME } from "./constants";
function About(){
    return(
        <>
        <section className="about section" id="about">
            <h2 className="section__title">About me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container container grid">
                <Image src={logo} alt={STUDENT_NAME} className="about__img" />
                <div className="about__data">
                    <p className="about__description">{ABOUT_DESCRIPTION}</p>
                    <div className="about__info">
                        <div>
                            <span className="about__info__title">15+</span>
                            <span className="about__info__name">Completed<br/> project</span>
                        </div>
                        <div>
                            <span className="about__info__title">20+</span>
                            <span className="about__info__name">Years<br/> experience</span>
                        </div>
                        <div>
                            <span className="about__info__title">2+</span>
                            <span className="about__info__name">Companies<br/> worked</span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a download="" href="offer_letter.pdf" className="button button__flex" >
                        Download CV<i class="uil uil-download-alt buton__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default About;