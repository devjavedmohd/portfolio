import './stack.component.scss'

const Stack = () => {
    return (
        <section className="skills-stack">
        <div className="container" data-aos="fade-up" data-aos-offset="20" data-aos-delay="30" data-aos-duration="1000"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
            <h2 className="latest-head">Skills Stack</h2>
            <article className="latest-work">
                <h3 className="none">Design</h3>
                <div className="horizontal-bars">
                    <div className="skills-sections" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30"
                        data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true"
                        data-aos-once="false">
                        <div><img src="/images/designer.svg" alt="Designer" /></div>
                        <h3>Design</h3>
                        <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                        <div className="design-tools">Things I enjoy designing:</div>
                        <p>UX, UI, Web, Mobile, Apps, Logos</p>

                        <div className="design-tools">Design Tools:</div>
                        <ul className="service-stack">
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Sketch</li>
                            <li>Balsamiq Mockups</li>
                            <li>Pen & Paper</li>
                            <li>Figma</li>
                            <li>Invision</li>
                            <li>Zeplin</li>
                        </ul>
                    </div>
                    <div className="skills-sections" data-aos="fade-up" data-aos-offset="20" data-aos-delay="40"
                        data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true"
                        data-aos-once="false">
                        <div><img src="/images/frontend.svg" alt="Designer" /></div>
                        <h3>Development</h3>
                        <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                        <div className="design-tools">Languages I speak:</div>
                        <p>HTML, CSS, Sass, JavaScript, Pug, Jade</p>

                        <div className="design-tools">Dev Tools:</div>
                        <ul className="service-stack">
                            <li>VS Code</li>
                            <li>WebStorm</li>
                            <li>Bootstrap</li>
                            <li>Tailwind</li>
                            <li>Bulma</li>
                            <li>Stylus</li>
                            <li>jQuery</li>
                            <li>Quasar</li>
                            <li>Git</li>
                            <li>JIRA</li>
                        </ul>
                    </div>
                    <div className="skills-sections" data-aos="fade-up" data-aos-offset="30" data-aos-delay="50"
                        data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-mirror="true"
                        data-aos-once="false">
                        <div><img src="/images/learning.svg" alt="Designer" /></div>
                        <h3>Learning</h3>
                        <p>I continuously develop my skills because I'm a geek of learning trending tech things and
                            spoken languages.</p>
                        <div className="design-tools">Dev:</div>
                        <p>Vue.js, Angular, Node.js, Quasar, Ionic, MongoDB, Salesforce, Visualforce</p>

                        <div className="design-tools">Spoken:</div>
                        <ul className="service-stack">
                            <li>English</li>
                            <li>German</li>

                        </ul>
                    </div>
                </div>
                <p className="bottom-note" data-aos="fade-up" data-aos-offset="20" data-aos-delay="40"
                    data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                    I am strong hand-code experience in HTML/CSS/Bootstrap/Tailwind and design tools Photoshop,
                    Illustrator and etc.
                    Hands-on experience with Responsive Web Design (RWD) that supports multiple browser and devices,
                    iPad, iPhone, Android
                    Mobile, and other Smartphone support web applications. And geek learning new things...
                </p>
            </article>
        </div>
    </section>
    )
}

export default Stack;