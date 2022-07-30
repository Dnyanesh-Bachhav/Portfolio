import Image from 'next/image';
import styles from '../styles/info.module.css';
import logo from "../public/blob.svg";
function Info() {
    return (
        <>
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <div className="home__social">
                            <a href="" className={ styles.home__social__icon}>
                                <i class="uil uil-linkedin-alt"></i>
                            </a>
                            <a href="" className={ styles.home__social__icon}>
                                <i class="uil uil-github-alt"></i>
                            </a>
                            <a href="" className={ styles.home__social__icon}>
                                <i class="uil uil-instagram"></i>
                            </a>
                        </div>
                        <div className="home__img">
                            <Image src={logo} width={125} height={125} />
                        </div>
                        <div className="home__data">
                            <h1 className={styles.home__title}>Hi, I'm Dnyanesh</h1>
                            <h3 className={styles.home__subtitle}>Web Developer</h3>
                            <p className={styles.home__description}>Lorem ipsum dolor sit amet sunt dignissimos iusto earum non iste! Nulla nemo quos corrupti hic ipsum.</p>
                            <a href="" className="button button--flex">
                                Contact Me <i class="uil uil-message button__icon"></i>
                            </a>
                        </div>
                    </div>
                    <div className={styles.home__scroll}>
                        <a href="#about" className="home__scroll-button button-flex">
                            <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                            <span class="home__scroll-name">Scroll-down</span>
                            <i class="uil uil-arrow-down home__scroll-arrow"></i> 
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Info;