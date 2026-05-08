import { Link } from "react-router-dom";
import React, { useState } from "react";
import Forma from "./Forma";
import './Kumstvo.css';
function Kumstvo({ psi }) {
    const [odabraniPas, setOdabraniPas] = useState(null);
    return (
        <div id="kumstvo">
            <h2>Program Kumstva</h2>
            <p>Odaberite kategoriju za pregled pasa.</p>
            <details className="dobna-skupina">
                <summary className="accordion-header">Štenci (&lt; 1 godine)</summary>
                <div className="accordion-content">
                    <div className="podkategorija">
                        <h4>Mali psi (&lt; 10 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[0].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[0].vrsta}</p>
                            <p><strong>Dob:</strong> {psi[0].dob}</p>
                            <p><strong>Težina:</strong> {psi[0].kilaza}</p>
                            <div className="akcijski-gumbi">
                                <a href={psi[0].link} target="_blank" rel="noopener noreferrer" className="btn-udomi">
                                    Udomi
                                </a>
                                <button className="btn-zakumi" onClick={() => setOdabraniPas(psi[0])}>
                                    Zakumi
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="podkategorija">
                        <h4>Srednji psi (10 - 25 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[1].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[1].vrsta}</p>
                            <p><strong>Dob:</strong> {psi[1].dob}</p>
                            <p><strong>Težina:</strong> {psi[1].kilaza}</p>
                        </div>
                    </div>
                    <div className="podkategorija">
                        <h4>Veliki psi (&gt; 25 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[2].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[2].vrsta}</p>
                            <p><strong>Dob:</strong> {psi[2].dob}</p>
                            <p><strong>Težina:</strong> {psi[2].kilaza}</p>
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
                            <p><strong>Dob:</strong> {psi[3].dob}</p>
                            <p><strong>Težina:</strong> {psi[3].kilaza}</p>
                        </div>
                    </div>
                    <div className="podkategorija">
                        <h4>Srednji psi (10 - 25 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[4].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[4].vrsta}</p>
                            <p><strong>Dob:</strong> {psi[4].dob}</p>
                            <p><strong>Težina:</strong> {psi[4].kilaza}</p>
                        </div>
                    </div>
                    <div className="podkategorija">
                        <h4>Veliki psi (&gt; 25 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[5].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[5].vrsta}</p>
                            <p><strong>Dob:</strong> {psi[5].dob}</p>
                            <p><strong>Težina:</strong> {psi[5].kilaza}</p>
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
                            <p><strong>Dob:</strong> {psi[6].dob}</p>
                            <p><strong>Težina:</strong> {psi[6].kilaza}</p>
                        </div>
                    </div>
                    <div className="podkategorija">
                        <h4>Srednji psi (10 - 25 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[7].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[7].vrsta}</p>
                            <p><strong>Dob:</strong> {psi[7].dob}</p>
                            <p><strong>Težina:</strong> {psi[7].kilaza}</p>
                            <a href={psi[7].link} target="_blank" rel="noopener noreferrer" className="btn-udomi">
                                Udomi
                            </a>
                        </div>
                    </div>
                    <div className="podkategorija">
                        <h4>Veliki psi (&gt; 25 kg)</h4>
                        <div className="pas-kartica">
                            <p><strong>Ime:</strong> {psi[8].ime}</p>
                            <p><strong>Vrsta:</strong> {psi[8].vrsta}</p>
                            <p><strong>Dob:</strong> {psi[8].dob}</p>
                            <p><strong>Težina:</strong> {psi[8].kilaza}</p>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    )
}
export default Kumstvo;