import { Link } from "react-router-dom";
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
        </div>
    )
}
export default Kumstvo;