import Image from "next/image";
import portfolio2 from "../assets/images/portfolio2.jpg";
function Portfolio(){
    return(
        <section className="section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Projects I have completed</span>
            <div className="portfolio__container container grid">
                <article className="portfolio__item">
                    <div className="portfolio__item__image">
                        <Image src={portfolio2} />
                        {/* <img src="../assets/images/portfolio2.jpg" alt="" srcset="" /> */}
                    </div>
                    <h3 className="project__title">Portfolio item title</h3>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button">Github</a>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button ml-2">Live Demo</a>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item__image">
                    <Image src={portfolio2} />
                    </div>
                    <h3 className="project__title">Portfolio item title</h3>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button">Github</a>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button ml-2">Live Demo</a>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item__image">
                        <Image src={portfolio2} />
                    </div>
                    <h3 className="project__title">Portfolio item title</h3>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button">Github</a>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button ml-2">Live Demo</a>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item__image">
                        <Image src={portfolio2} />
                    </div>
                    <h3 className="project__title">Portfolio item title</h3>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button">Github</a>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button ml-2">Live Demo</a>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item__image">
                        <Image src={portfolio2} />
                    </div>
                    <h3 className="project__title">Portfolio item title</h3>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button">Github</a>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button ml-2">Live Demo</a>
                </article>
            </div>
        </section>
    );
}
export default Portfolio;