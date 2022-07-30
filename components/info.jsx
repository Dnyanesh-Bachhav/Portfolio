import Image from 'next/image';
import styles from '../styles/info.module.css';
import logo from "../public/blob.svg";
function Info() {
    return (
        <>
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <div className={styles.home__social}>
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
                            <h1 className={styles.home__title}>Hi, I'm Dnyanesh</h1>
                            <h3 className={styles.home__subtitle}>Web Developer</h3>
                            <p className={styles.home__description}>Lorem ipsum dolor sit amet sunt dignissimos iusto earum non iste! Nulla nemo quos corrupti hic ipsum.</p>
                            <a href="" className="button button__flex">
                                Contact Me <span className={styles.button__icon}><i className="uil uil-message"></i></span>
                            </a>
                        </div>
                    </div>
                    <div className={styles.home__scroll}>
                        <a href="#about" className={styles["home__scroll__button"]+" "+ styles["button__flex"]}>
                            <span className={styles.home__scroll__mouse}><i className="uil uil-mouse-alt"></i></span>
                            <span className={ styles.home__scroll__name}>Scroll-down</span>
                            <span className={styles.home__scroll__arrow}><i className="uil uil-arrow-down"></i></span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Info;