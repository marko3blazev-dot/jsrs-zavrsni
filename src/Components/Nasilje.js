import { Link } from "react-router-dom";
import './Nasilje.css';
function Nasilje() {
    return (
        <div id="nasilje">
            <header className="pz-hero">
                <h1>Stop zlostavljanju!</h1>
                <p>Ne okreći glavu. Tvoja prijava može spasiti nečiji život i zaustaviti patnju.</p>
            </header>

            <div className="pz-sadrzaj">

                <section className="pz-uvod">
                    <div className="pz-upozorenje">
                        <h3>Što trebate znati?</h3>
                        <p><strong>Napuštanje životinje</strong> i <strong>zanemarivanje/zlostavljanje</strong> su kažnjiva djela prema Zakonu o zaštiti životinja. Udruge nemaju zakonske ovlasti oduzimati životinje ni kažnjavati počinitelje. Prijava se mora podnijeti nadležnoj <strong>veterinarskoj inspekciji</strong>.</p>
                    </div>
                </section>

                <section className="pz-grid-sekcija">
                    <div className="pz-kartica">
                        <div className="pz-ikona">⛓️</div>
                        <h3>Što se smatra zlostavljanjem?</h3>
                        <p>Riječ je o različitim oblicima kršenja zakona, uključujući:</p>
                        <ul>
                            <li>Držanje psa na vrlo kratkom lancu</li>
                            <li>Držanje životinje na suncu bez zaklona i vode</li>
                            <li>Neodlasci veterinaru i neliječenje bolesti</li>
                            <li>Uskraćivanje redovite hrane i vode</li>
                            <li>Držanje psa u stanu bez izvođenja u šetnju</li>
                            <li>Udaranje, okrutnost i trovanje životinja</li>
                        </ul>
                    </div>

                    <div className="pz-kartica">
                        <div className="pz-ikona">📄</div>
                        <h3>Što prijava mora sadržavati?</h3>
                        <p>Da bi inspekcija mogla izaći na teren, pripremite:</p>
                        <ul>
                            <li><strong>Točnu adresu:</strong> Mjesto gdje se životinja nalazi.</li>
                            <li><strong>Opis događaja:</strong> Konkretni podaci o vrsti zanemarivanja.</li>
                            <li><strong>Dokaze:</strong> Fotografije i/ili video snimke (ključno!).</li>
                            <li><strong>Podatke:</strong> Registracija vozila (ako je izbačen iz auta), iskazi svjedoka, i sl.</li>
                        </ul>
                        <div className="pz-anonimnost">
                            <strong>🔒 Zaštita identiteta:</strong> Ako postoji opasnost po tvoju sigurnost, u prijavi zatraži anonimnost. Inspekcija je dužna postupati po tom zahtjevu!
                        </div>
                    </div>
                </section>

                <section className="pz-akcija">
                    <h2>Podnošenje prijave traje samo 10 minuta.</h2>
                    <p>Prijavu podnosite putem službene stranice Državnog inspektorata (DIRH).</p>
                    <a
                        href="https://dirh.gov.hr/podnosenje-prijava/83"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-prijavi-inspekciji"
                    >
                        Podnesi prijavu ovdje &rarr;
                    </a>
                </section>

            </div>
        </div>
    )
}
export default Nasilje;