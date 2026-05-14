import { Link } from "react-router-dom";
import React, { useState } from "react";
import Forma from "./Forma";
import './Kumstvo.css';
function Kumstvo({ psi }) {
    const [odabraniPas, setOdabraniPas] = useState(null);
    let prikazForme = null;
    if (odabraniPas) {
        prikazForme = (
            <Forma
                pas={odabraniPas}
                zatvori={() => setOdabraniPas(null)}
            />
        );
    }
    return (
        <div id="kumstvo">
            <h2>Program udomljavanja i kumstva</h2>
            <p>Odaberite kategoriju za pregled pasa.</p>
            {prikazForme}
            <div className="kumstvo-dva-stupca">
                <div className="kategorije-stupac">
                    <details className="dobna-skupina">
                        <summary className="accordion-header">Štenci (&lt; 1 godine)</summary>
                        <div className="accordion-content">
                            <div className="podkategorija">
                                <h4>Mali psi (&lt; 10 kg)</h4>
                                <div className="pas-kartica">
                                    <div className="pas-info">
                                        <p><strong>Ime:</strong> {psi[0].ime}</p>
                                        <p><strong>Vrsta:</strong> {psi[0].vrsta}</p>
                                        <p><strong>Dob:</strong> {psi[0].dob}</p>
                                        <p><strong>Težina:</strong> {psi[0].kilaza}</p>

                                        <div className="akcijski-gumbi">
                                            {psi[0].link && (
                                                <a href={psi[0].link} target="_blank" rel="noopener noreferrer" className="btn-udomi">
                                                    Udomi
                                                </a>
                                            )}
                                            <button className="btn-zakumi" onClick={() => setOdabraniPas(psi[0])}>
                                                Zakumi
                                            </button>
                                        </div>
                                    </div>
                                    {psi[0].slika && (
                                        <a href={psi[0].link} target="_blank" rel="noopener noreferrer" className="slika-link">
                                            <img
                                                src={psi[0].slika}
                                                alt={`Slika od ${psi[0].ime}`}
                                                className="slika-psa"
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="podkategorija">
                                <h4>Srednji psi (10 - 25 kg)</h4>
                                <div className="pas-kartica">
                                    <div className="pas-info">
                                        <p><strong>Ime:</strong> {psi[1].ime}</p>
                                        <p><strong>Vrsta:</strong> {psi[1].vrsta}</p>
                                        <p><strong>Dob:</strong> {psi[1].dob}</p>
                                        <p><strong>Težina:</strong> {psi[1].kilaza}</p>

                                        <div className="akcijski-gumbi">
                                            {psi[1].link && (
                                                <a href={psi[1].link} target="_blank" rel="noopener noreferrer" className="btn-udomi">
                                                    Udomi
                                                </a>
                                            )}
                                            <button className="btn-zakumi" onClick={() => setOdabraniPas(psi[1])}>
                                                Zakumi
                                            </button>
                                        </div>
                                    </div>

                                    {psi[1].slika && (
                                        <a href={psi[1].link} target="_blank" rel="noopener noreferrer" className="slika-link">
                                            <img
                                                src={psi[1].slika}
                                                alt={`Slika od ${psi[1].ime}`}
                                                className="slika-psa"
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="podkategorija">
                                <h4>Veliki psi (&gt; 25 kg)</h4>
                                <div className="pas-kartica">
                                    <div className="pas-info">
                                        <p><strong>Ime:</strong> {psi[2].ime}</p>
                                        <p><strong>Vrsta:</strong> {psi[2].vrsta}</p>
                                        <p><strong>Dob:</strong> {psi[2].dob}</p>
                                        <p><strong>Težina:</strong> {psi[2].kilaza}</p>

                                        <div className="akcijski-gumbi">
                                            {psi[2].link && (
                                                <a href={psi[2].link} target="_blank" rel="noopener noreferrer" className="btn-udomi">
                                                    Udomi
                                                </a>
                                            )}
                                            <button className="btn-zakumi" onClick={() => setOdabraniPas(psi[2])}>
                                                Zakumi
                                            </button>
                                        </div>
                                    </div>

                                    {psi[2].slika && (
                                        <a href={psi[2].link} target="_blank" rel="noopener noreferrer" className="slika-link">
                                            <img
                                                src={psi[2].slika}
                                                alt={`Slika od ${psi[2].ime}`}
                                                className="slika-psa"
                                            />
                                        </a>
                                    )}
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
                                    <div className="pas-info">
                                        <p><strong>Ime:</strong> {psi[3].ime}</p>
                                        <p><strong>Vrsta:</strong> {psi[3].vrsta}</p>
                                        <p><strong>Dob:</strong> {psi[3].dob}</p>
                                        <p><strong>Težina:</strong> {psi[3].kilaza}</p>

                                        <div className="akcijski-gumbi">
                                            {psi[3].link && (
                                                <a href={psi[3].link} target="_blank" rel="noopener noreferrer" className="btn-udomi">
                                                    Udomi
                                                </a>
                                            )}
                                            <button className="btn-zakumi" onClick={() => setOdabraniPas(psi[3])}>
                                                Zakumi
                                            </button>
                                        </div>
                                    </div>

                                    {psi[3].slika && (
                                        <a href={psi[3].link} target="_blank" rel="noopener noreferrer" className="slika-link">
                                            <img
                                                src={psi[3].slika}
                                                alt={`Slika od ${psi[3].ime}`}
                                                className="slika-psa"
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="podkategorija">
                                <h4>Srednji psi (10 - 25 kg)</h4>
                                <div className="pas-kartica">
                                    <div className="pas-info">
                                        <p><strong>Ime:</strong> {psi[4].ime}</p>
                                        <p><strong>Vrsta:</strong> {psi[4].vrsta}</p>
                                        <p><strong>Dob:</strong> {psi[4].dob}</p>
                                        <p><strong>Težina:</strong> {psi[4].kilaza}</p>

                                        <div className="akcijski-gumbi">
                                            {psi[4].link && (
                                                <a href={psi[4].link} target="_blank" rel="noopener noreferrer" className="btn-udomi">
                                                    Udomi
                                                </a>
                                            )}
                                            <button className="btn-zakumi" onClick={() => setOdabraniPas(psi[4])}>
                                                Zakumi
                                            </button>
                                        </div>
                                    </div>

                                    {psi[4].slika && (
                                        <a href={psi[4].link} target="_blank" rel="noopener noreferrer" className="slika-link">
                                            <img
                                                src={psi[4].slika}
                                                alt={`Slika od ${psi[4].ime}`}
                                                className="slika-psa"
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="podkategorija">
                                <h4>Veliki psi (&gt; 25 kg)</h4>
                                <div className="pas-kartica">
                                    <div className="pas-info">
                                        <p><strong>Ime:</strong> {psi[5].ime}</p>
                                        <p><strong>Vrsta:</strong> {psi[5].vrsta}</p>
                                        <p><strong>Dob:</strong> {psi[5].dob}</p>
                                        <p><strong>Težina:</strong> {psi[5].kilaza}</p>

                                        <div className="akcijski-gumbi">
                                            {psi[5].link && (
                                                <a href={psi[5].link} target="_blank" rel="noopener noreferrer" className="btn-udomi">
                                                    Udomi
                                                </a>
                                            )}
                                            <button className="btn-zakumi" onClick={() => setOdabraniPas(psi[5])}>
                                                Zakumi
                                            </button>
                                        </div>
                                    </div>

                                    {psi[5].slika && (
                                        <a href={psi[5].link} target="_blank" rel="noopener noreferrer" className="slika-link">
                                            <img
                                                src={psi[5].slika}
                                                alt={`Slika od ${psi[5].ime}`}
                                                className="slika-psa"
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </details>

                    <details className="dobna-skupina">
                        <summary className="accordion-header">Seniori (8+ godina)</summary>
                        <div className="accordion-content">
                            <div className="podkategorija">
                                <h4>Mali psi (&lt; 10 kg)</h4>
                                <div className="pas-kartica">
                                    <div className="pas-info">
                                        <p><strong>Ime:</strong> {psi[6].ime}</p>
                                        <p><strong>Vrsta:</strong> {psi[6].vrsta}</p>
                                        <p><strong>Dob:</strong> {psi[6].dob}</p>
                                        <p><strong>Težina:</strong> {psi[6].kilaza}</p>

                                        <div className="akcijski-gumbi">
                                            {psi[6].link && (
                                                <a href={psi[6].link} target="_blank" rel="noopener noreferrer" className="btn-udomi">
                                                    Udomi
                                                </a>
                                            )}
                                            <button className="btn-zakumi" onClick={() => setOdabraniPas(psi[6])}>
                                                Zakumi
                                            </button>
                                        </div>
                                    </div>

                                    {psi[6].slika && (
                                        <a href={psi[6].link} target="_blank" rel="noopener noreferrer" className="slika-link">
                                            <img
                                                src={psi[6].slika}
                                                alt={`Slika od ${psi[6].ime}`}
                                                className="slika-psa"
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="podkategorija">
                                <h4>Srednji psi (10 - 25 kg)</h4>
                                <div className="pas-kartica">
                                    <div className="pas-info">
                                        <p><strong>Ime:</strong> {psi[7].ime}</p>
                                        <p><strong>Vrsta:</strong> {psi[7].vrsta}</p>
                                        <p><strong>Dob:</strong> {psi[7].dob}</p>
                                        <p><strong>Težina:</strong> {psi[7].kilaza}</p>

                                        <div className="akcijski-gumbi">
                                            {psi[7].link && (
                                                <a href={psi[7].link} target="_blank" rel="noopener noreferrer" className="btn-udomi">
                                                    Udomi
                                                </a>
                                            )}
                                            <button className="btn-zakumi" onClick={() => setOdabraniPas(psi[7])}>
                                                Zakumi
                                            </button>
                                        </div>
                                    </div>

                                    {psi[7].slika && (
                                        <a href={psi[7].link} target="_blank" rel="noopener noreferrer" className="slika-link">
                                            <img
                                                src={psi[7].slika}
                                                alt={`Slika od ${psi[7].ime}`}
                                                className="slika-psa"
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="podkategorija">
                                <h4>Veliki psi (&gt; 25 kg)</h4>
                                <div className="pas-kartica">
                                    <div className="pas-info">
                                        <p><strong>Ime:</strong> {psi[8].ime}</p>
                                        <p><strong>Vrsta:</strong> {psi[8].vrsta}</p>
                                        <p><strong>Dob:</strong> {psi[8].dob}</p>
                                        <p><strong>Težina:</strong> {psi[8].kilaza}</p>

                                        <div className="akcijski-gumbi">
                                            {psi[8].link && (
                                                <a href={psi[8].link} target="_blank" rel="noopener noreferrer" className="btn-udomi">
                                                    Udomi
                                                </a>
                                            )}
                                            <button className="btn-zakumi" onClick={() => setOdabraniPas(psi[8])}>
                                                Zakumi
                                            </button>
                                        </div>
                                    </div>

                                    {psi[8].slika && (
                                        <a href={psi[8].link} target="_blank" rel="noopener noreferrer" className="slika-link">
                                            <img
                                                src={psi[8].slika}
                                                alt={`Slika od ${psi[8].ime}`}
                                                className="slika-psa"
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
                <div className="informacije-stupac">

                    <details className="dobna-skupina info-dropdown">
                        <summary className="accordion-header">Zašto odabrati udomljavanje?</summary>
                        <div className="accordion-content">
                            <ul className="info-lista">
                                <li><strong>Zahvalnost bez granica:</strong> Udomljeni pas prepoznaje tvoju dobrotu i uzvraća je svakim pogledom.</li>
                                <li><strong>Ljubav u najčišćem obliku:</strong> Doživjet ćeš privrženost kakvu samo spašena njuškica može pružiti.</li>
                                <li><strong>Novi početak:</strong> Pružaš drugu priliku biću koje je iskusilo samoću i napuštenost.</li>
                            </ul>
                            <h4>Što dobivaš zauzvrat?</h4>
                            <ul className="info-lista">
                                <li><strong>Vjernog suputnika:</strong> Za šetnje, kauč, igru i sve životne trenutke.</li>
                                <li><strong>Terapeutski učinak:</strong> Nema boljeg lijeka za stres od mahanja repom nakon dugog dana.</li>
                                <li><strong>Ponos:</strong> Osjećaj da si spasio jedan život i učinio svijet boljim mjestom.</li>
                            </ul>
                            <p className="istaknuto-p">Nemoj samo maštati o idealnom prijatelju. Dođi, upoznaj ih i uvjeri se iz prve ruke koliko ljubavi stane u jedno toplo, čupavo srce. <br /><strong>Udomi, ne kupuj!</strong></p>
                        </div>
                    </details>

                    <details className="dobna-skupina info-dropdown">
                        <summary className="accordion-header">Postani kum i promijeni život! 🐾</summary>
                        <div className="accordion-content">
                            <p>Svaki pas zaslužuje priliku za sretan i ispunjen život, a ti mu u tome možeš pomoći. Postani kum jednoj od naših njuškica i osiguraj joj bolju budućnost.</p>
                            <h4>Kako funkcionira kumstvo?</h4>
                            <ul className="info-lista">
                                <li><strong>Odaberi iznos:</strong> Doniraj mjesečno onoliko koliko možeš izdvojiti. Svaka kuna i euro čine veliku razliku.</li>
                                <li><strong>Prati napredak:</strong> Tvoja njuškica slat će ti redovite fotke i obavijesti o svom napretku.</li>
                                <li><strong>Školica za pse:</strong> Tvojom donacijom pas će upisati školicu, proći socijalizaciju i lakše pronaći trajni dom.</li>
                            </ul>
                            <p className="istaknuto-p">Jednostavan korak za tebe, a cijeli svijet za njih. Prijavi se za kumstvo već danas!</p>
                        </div>
                    </details>

                </div>
            </div>
        </div>
    )
}
export default Kumstvo;