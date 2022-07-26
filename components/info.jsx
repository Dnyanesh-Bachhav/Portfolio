import Image from 'next/image';
function Info() {
    return (
        <>
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <div className="home__social">
                            <a href="" className="home__social-icon">
                                <i class="uil uil-linkedin-alt"></i>
                            </a>
                            <a href="" className="home__social-icon">
                                <i class="uil uil-github-alt"></i>
                            </a>
                            <a href="" className="home__social-icon">
                                <i class="uil uil-instagram"></i>
                            </a>
                        </div>
                        <div className="home__img">
                            <Image src="/blob.svg" width={50} height={50} />

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Info;