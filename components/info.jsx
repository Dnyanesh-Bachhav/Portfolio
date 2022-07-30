import Image from 'next/image';
import logo from "../public/blob.svg";
function Info() {
    return (
        <>
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <div className="home__social">
                            <a href="" className="home__social__icon">
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                            <a href="" className="home__social__icon">
                                <i className="uil uil-github-alt"></i>
                            </a>
                            <a href="" className="home__social__icon">
                                <i className="uil uil-instagram"></i>
                            </a>
                        </div>
                        <div className="home__img">
                            <Image src={logo} />
                        </div>
                        <div className="home__data">
                            <h1 className="home__title">Hi, I'm Dnyanesh</h1>
                            <h3 className="home__subtitle">Web Developer</h3>
                            <p className="home__description">Lorem ipsum dolor sit amet sunt dignissimos iusto earum non iste! Nulla nemo quos corrupti hic ipsum.</p>
                            <a href="" className="button button__flex">
                                Contact Me <span className="button__icon"><i className="uil uil-message"></i></span>
                            </a>
                        </div>
                    </div>
                    <div className="home__scroll">
                        <a href="#about" className="home__scroll__button button__flex">
                            <i className="uil uil-mouse-alt home__scroll__mouse "></i>
                            <span className="home__scroll__name">Scroll-down</span>
                            <i className="uil uil-arrow-down home__scroll__arrow"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Info;