import "./Footer.css";
function Footer() {
    <footer className="Footer">
        <div className="footer-content">

            <div className="footer-section about">
                <h2 className="footer-logo">Azilija</h2>
                <p>
                    Naša misija je osigurati sigurno utočište i novu priliku za svaku napuštenu i zlostavljanu životinju.
                    Zajedno stvaramo bolji svijet za njih.
                </p>
                <div className="social-links">
                    <a href="#facebook" className="social-icon">FB</a>
                    <a href="#instagram" className="social-icon">IG</a>
                    <a href="#twitter" className="social-icon">X</a>
                </div>
            </div>

            <div className="footer-section links">
                <h3>Brzi linkovi</h3>
                <ul>
                    <li><a href="#pocetna">Početna stranica</a></li>
                    <li><a href="#udomljavanje">Udomljavanje</a></li>
                    <li><a href="#donacije">Donacije i kumstvo</a></li>
                    <li><a href="#volontiranje">Volontiranje</a></li>
                </ul>
            </div>

            <div className="footer-section contact">
                <h3>Kontaktirajte nas</h3>
                <ul>
                    <li><span>📍</span> Ulica spasa 123, 10000 Zagreb</li>
                    <li><span>📞</span> +385 1 234 5678</li>
                    <li><span>✉️</span> info@azilija.hr</li>
                </ul>
            </div>

            <div className="footer-section emergency">
                <h3>Hitne intervencije</h3>
                <p>Svjedočite zlostavljanju ili ste pronašli teško ozlijeđenu životinju?</p>
                <a href="#prijava" className="btn-emergency">Prijavi odmah</a>
            </div>

        </div>

        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Azilija. Sva prava pridržana.</p>
        </div>
    </footer>
}