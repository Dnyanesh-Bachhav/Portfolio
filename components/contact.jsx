function Contact(){
    return(
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i class="uil uil-phone contact__icon"></i>
                    
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">9370735440</span>
                        </div>
                    </div>

                    <div className="contact__information">
                    <i class="uil uil-envelope contact__icon"></i>
                    
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">dnyaneshbachhav2002@gmail</span>
                        </div>
                    </div>

                    <div className="contact__information">
                    <i class="uil uil-map-marker contact__icon"></i>
                    
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">Akurdi, Pune.</span>
                        </div>
                    </div>
                </div>

                <form action="" className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Name</label>
                            <input type="text" className="contact__input" />
                        </div>
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Email</label>
                            <input type="text" className="contact__input" />
                        </div>
                    </div>
                    <div className="contact__content">
                            <label htmlFor="" className="contact__label">Project</label>
                            <input type="text" className="contact__input" />
                    </div>
                    <div className="contact__content">
                            <label htmlFor="" className="contact__label">Message</label>
                            <textarea name="" id="" cols="0" rows="7" className="contact__input"></textarea>
                    </div>
                    <div>
                        <a href="#" className="button button__flex">
                            Send Me <i class="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Contact;