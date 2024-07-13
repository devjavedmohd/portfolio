import './footer.component.scss';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">Want to work with me?</div>
                    <div className="footer-center">
                        <a className="message-submit" href="mailto:dev.javedmohd@gmail.com">
                            <span>Let's Talk</span>
                            <img src="/images/email.svg" alt="email" />
                        </a>
                    </div>
                    <div className="footer-right">
                        <div>
                            <a className="message-submit phone" href="tel:+447413253019">
                                <img src="/images/phone.svg" alt="phone" />
                            </a>
                            <a className="message-submit in" href="https://www.linkedin.com/in/javedrhul/" target="_blank">
                                <img src="/images/in.svg" alt="linkedin" />
                            </a>
                            <a className="message-submit be" href="https://www.behance.net/mohammed-javed" target="_blank">
                                <img src="/images/be.svg" alt="behance" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-brand none">
                    <div className="footer-brand-in">
                        <img src="/images/logo.svg" alt="Mohammad Javed" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;