import { Link } from "react-router-dom";
import './Kumstvo.css';
function Kumstvo({ psi }) {
    return (
        <div id="kumstvo">
            <h2>Program Kumstva</h2>
            <p>Odaberite kategoriju za pregled pasa.</p>
            <details className="dobna-skupina">
                <summary className="accordion-header">Štenci (&lt; 1 godine)</summary>
                <div className="accordion-content">
                    <div className="podkategorija">
                        <h1>Mali psi (&lt; 10 kg)</h1>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[0].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[0].vrsta}</p>
                            <p><strong>Dob/Težina:</strong> {psi[0].dob} / {psi[0].kilaza}</p>
                        </div>
                    </div>
                    <div className="podkategorija">
                        <h4>Srednji psi (10 - 25 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[1].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[1].vrsta}</p>
                            <p><strong>Dob/Težina:</strong> {psi[1].dob} / {psi[1].kilaza}</p>
                        </div>
                    </div>
                    <div className="podkategorija">
                        <h4>Veliki psi (&gt; 25 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[2].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[2].vrsta}</p>
                            <p><strong>Dob/Težina:</strong> {psi[2].dob} / {psi[2].kilaza}</p>
                        </div>
                    </div>
                </div>
            </details>
            <details className="dobna-skupina">
                <summary className="accordion-header">Odrasli (1 - 7 godina)</summary>
                <div className="accordion-content">
                    <div className="podkategorija">
                        <h4>Mali psi (&lt; 10 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[3].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[3].vrsta}</p>
                            <p><strong>Dob/Težina:</strong> {psi[3].dob} / {psi[3].kilaza}</p>
                        </div>
                    </div>
                    <div className="podkategorija">
                        <h4>Srednji psi (10 - 25 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[4].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[4].vrsta}</p>
                            <p><strong>Dob/Težina:</strong> {psi[4].dob} / {psi[4].kilaza}</p>
                        </div>
                    </div>
                    <div className="podkategorija">
                        <h4>Veliki psi (&gt; 25 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[5].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[5].vrsta}</p>
                            <p><strong>Dob/Težina:</strong> {psi[5].dob} / {psi[5].kilaza}</p>
                        </div>
                    </div>
                </div>
            </details>

            {/* KATEGORIJA 3: SENIORI */}
            <details className="dobna-skupina">
                <summary className="accordion-header">Seniori (8+ godina)</summary>
                <div className="accordion-content">
                    <div className="podkategorija">
                        <h4>Mali psi (&lt; 10 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[6].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[6].vrsta}</p>
                            <p><strong>Dob/Težina:</strong> {psi[6].dob} / {psi[6].kilaza}</p>
                        </div>
                    </div>
                    <div className="podkategorija">
                        <h4>Srednji psi (10 - 25 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[7].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[7].vrsta}</p>
                            <p><strong>Dob/Težina:</strong> {psi[7].dob} / {psi[7].kilaza}</p>
                        </div>
                    </div>
                    <div className="podkategorija">
                        <h4>Veliki psi (&gt; 25 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[8].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[8].vrsta}</p>
                            <p><strong>Dob/Težina:</strong> {psi[8].dob} / {psi[8].kilaza}</p>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    )
}
export default Kumstvo;