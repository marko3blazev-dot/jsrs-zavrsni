import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="Footer">
            <div className="footer-content">

                <div className="footer-section about">
                    <h2 className="footer-logo">Azilija</h2>
                    <p>
                        Naša misija je osigurati sigurno utočište i novu priliku za svaku napuštenu i zlostavljanu životinju.
                        Zajedno stvaramo bolji svijet za njih.
                    </p>
                    <div className="about-brzi-linkovi">
                        <ul>
                            <li><Link to="/">Početna stranica</Link></li>
                            <li><Link to="/kumstvo">Udomljavanje i kumstvo</Link></li>
                            <li><Link to="/donacije">Donacije</Link></li>
                            <li><Link to="/volontiranje">Volontiranje</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-section contact">
                    <h3>Kontaktirajte nas</h3>

                    <div className="contact-list-vertical">

                        <a href="https://maps.google.com/search?q=Ulica+Hrvatskih+Žrtava+85%2C+21210+Solin" target="_blank" rel="noopener noreferrer" className="contact-row">
                            <div className="ikona-krug">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 8 16 8 16s8-10.75 8-16c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                                </svg>
                            </div>
                            <span className="contact-text">Posjetite nas (Lokacija)</span>
                        </a>

                        <a href="tel:+385958244022" className="contact-row">
                            <div className="ikona-krug">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.75-.03-1.03.24l-2.2 2.2c-2.83-1.44-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02-.37-1.12-.57-2.32-.57-3.57 0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                                </svg>
                            </div>
                            <span className="contact-text">+385 95 824 4022</span>
                        </a>

                        <a href="https://wa.me/385958244022" target="_blank" rel="noopener noreferrer" className="contact-row">
                            <div className="ikona-krug">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.75-.03-1.03.24l-2.2 2.2c-2.83-1.44-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02-.37-1.12-.57-2.32-.57-3.57 0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                                </svg>
                            </div>
                            <span className="contact-text">WhatsApp poruka</span>
                        </a>

                        <a href="mailto:marko3blazev@gmail.com" className="contact-row">
                            <div className="ikona-krug">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </div>
                            <span className="contact-text">E-mail adresa</span>
                        </a>

                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-row">
                            <div className="ikona-krug">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                                </svg>
                            </div>
                            <span className="contact-text">Facebook stranica</span>
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-row">
                            <div className="ikona-krug">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </div>
                            <span className="contact-text">Instagram profil</span>
                        </a>

                    </div>
                </div>

                <div className="footer-section emergency">
                    <h3>Hitne intervencije</h3>
                    <p>Svjedočite zlostavljanju ili ste pronašli teško ozlijeđenu životinju?</p>
                    <a href="#prijava" className="btn-emergency">Prijavi</a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; 2026. Azilija. Sva prava pridržana.</p>
            </div>
        </footer>
    )
}
export default Footer;