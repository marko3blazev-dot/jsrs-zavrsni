import { Link } from "react-router-dom";
import './Volontiranje.css';
function Volontiranje() {
    const prilike = [
        {
            naslov: "Akcija šetnje pasa",
            opis: "Pridružite se našim vikend akcijama socijalizacije i šetnje. Svaki korak s njima znači puno.",
            link: "https://www.facebook.com/share/1GefJQ976R/",
            izvor: "Facebook",
            grad: "Šibenik",
            zupanija: "Šibensko-Kninska županija:"
        },
        {
            naslov: "Pomoć u azilu",
            opis: "Trebamo ruke za pomoć pri hranjenju, čišćenju i uređenju okoliša našeg skloništa.",
            link: "https://www.facebook.com/share/14e6rcYuoT7/",
            izvor: "Facebook",
            grad: "Dubrovnik",
            zupanija: "Dubrovačko-Neretvanska županija:"
        },
        {
            naslov: "Svakodnevni rad i briga u azilu",
            opis: "Pridruži nam se u svakodnevnim zadacima: od hranjenja i održavanja čistoće, do uređenja prostora u kojem naše šapice borave.",
            link: "https://www.noina-arka.hr/kako-mogu-pomoci/",
            izvor: "Noina Arka",
            grad: "Dumovec",
            zupanija: "Grad Zagreb:"
        },
        {
            naslov: "Svjetski standardi volontiranja",
            opis: "Saznajte više o tome kako funkcionira volontiranje na globalnoj razini putem Petfindera.",
            link: "https://www.petfinder.com/",
            izvor: "Petfinder",
            grad: "Globalno",
            zupanija: "Međunarodno:"
        }
    ];
    const prilikePoZupanijama = prilike.reduce((grupe, prilika) => {
        const zupanija = prilika.zupanija || "Ostale županije";
        if (!grupe[zupanija]) grupe[zupanija] = [];
        grupe[zupanija].push(prilika);
        return grupe;
    }, {});
    return (
        <div id="volontiranje">
            <section className="v-info-sekcija">
                <div className="v-tekst-blok">
                    <h2>Što znači biti volonter Azila?</h2>
                    <p>
                        Volontiranje nije samo rad, to je prilika da direktno utječete na kvalitetu života
                        pasa koji čekaju svoj zauvijek dom. Naši volonteri su srce azila i ključni su
                        u procesu socijalizacije životinja.
                    </p>
                </div>

                <div className="v-aktivnosti-grid">
                    <div className="aktivnost-kartica">
                        <span>🐕</span>
                        <h4>Šetnja i igra</h4>
                        <p>Pružite psima prijeko potreban pokret i pažnju izvan boksa.</p>
                    </div>
                    <div className="aktivnost-kartica">
                        <span>🧼</span>
                        <h4>Održavanje</h4>
                        <p>Pomoć pri čišćenju prostora i pripremi hrane za štićenike.</p>
                    </div>
                    <div className="aktivnost-kartica">
                        <span>📸</span>
                        <h4>Promocija</h4>
                        <p>Fotografiranje pasa i pomoć u vođenju društvenih mreža radi udomljavanja.</p>
                    </div>
                </div>
            </section>

            <section className="v-linkovi-sekcija">
                <h2>Trenutne prilike za pomoć</h2>
                <div className="kategorije-stupac">

                    {Object.keys(prilikePoZupanijama).sort().map((imeZupanije) => (

                        <details className="dobna-skupina" key={imeZupanije}>
                            <summary className="accordion-header">{imeZupanije}</summary>
                            <div className="accordion-content">

                                <div className="v-grid-poveznica">
                                    {prilikePoZupanijama[imeZupanije].map((item, index) => (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" key={index} className="v-vanjski-link">

                                            <div className="kartica-tagovi">
                                                <span className="izvor-tag">{item.izvor}</span>
                                                <span className="grad-tag">📍 {item.grad}</span>
                                            </div>

                                            <h3>{item.naslov}</h3>
                                            <p>{item.opis}</p>
                                            <div className="v-strelica">Saznaj više &rarr;</div>
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </details>

                    ))}
                </div>
            </section>
        </div>
    )
}
export default Volontiranje;