import './whatido.component.scss'

const WhatIDo = () => {
    return (
        <section className="container whatido">
            <h2 className="latest-head">What I Do</h2>
            <article className="latest-work">
                <h3>Design</h3>
                <div className="what-i-do">
                    <div className="what-i-do-info">
                        <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000"
                            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <p>Establishing the right visual connection with your customers and users by creating
                                eye-catching and memorable designs as well as meaningful user experience.</p>
                            <div className="what-i-do-info-art">
                                <img src="/images/design-main.svg" alt="Design" />
                            </div>
                        </div>
                        <div className="info-cards-wrapper" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30"
                            data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <div className="info-cards">
                                <div className="info-cards-title">Websites and Platforms</div>
                                <div className="info-icon-img">
                                    <img src="/images/websites.svg" alt="Websites and Platforms" />
                                </div>
                            </div>
                            <div className="info-cards">
                                <div className="info-cards-title">Mobile Web Apps</div>
                                <div className="info-icon-img">
                                    <img src="/images/mobile-web.svg" alt="Mobile Web Apps" />
                                </div>
                            </div>
                            <div className="info-cards">
                                <div className="info-cards-title">Strategy and Branding</div>
                                <div className="info-icon-img">
                                    <img src="/images/branding.svg" alt="Strategy and Branding" />
                                </div>
                            </div>
                            <div className="info-cards">
                                <div className="info-cards-title">Design Concept</div>
                                <div className="info-icon-img">
                                    <img src="/images/design-concept.svg" alt="Design Concept" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="latest-work">
                <h3>Development</h3>
                <div className="what-i-do">
                    <div className="what-i-do-info">
                        <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000"
                            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <p>Implementing your project with scalable architecture design, modern technology, and an
                                excellent level of data security.</p>
                            <div className="what-i-do-info-art">
                                <img src="/images/dev.svg" alt="Development" />
                            </div>
                        </div>
                        <div className="info-cards-wrapper" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30"
                            data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <div className="info-cards">
                                <div className="info-cards-title">PSD to HTML conversion</div>
                                <div className="info-icon-img">
                                    <img src="/images/psd-html.svg" alt="PSD to HTML conversion" />
                                </div>
                            </div>
                            <div className="info-cards">
                                <div className="info-cards-title">Responsive Web Design</div>
                                <div className="info-icon-img">
                                    <img src="/images/responsive.svg" alt="Responsive Web Design" />
                                </div>
                            </div>
                            <div className="info-cards">
                                <div className="info-cards-title">Mobile Web App Development</div>
                                <div className="info-icon-img">
                                    <img src="/images/mobile-app.svg" alt="Mobile Web App Development" />
                                </div>
                            </div>
                            <div className="info-cards">
                                <div className="info-cards-title">Agile Software Development</div>
                                <div className="info-icon-img">
                                    <img src="/images/development.svg" alt="Mobile Web App Development" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default WhatIDo;