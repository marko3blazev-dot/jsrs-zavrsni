import { Link } from "react-router-dom";
import './Volontiranje.css';
function Volontiranje() {
    const prilike = [
        {
            naslov: "Akcija šetnje pasa",
            opis: "Pridružite se našim vikend akcijama socijalizacije i šetnje. Svaki korak s njima znači puno.",
            link: "https://www.facebook.com/share/1GefJQ976R/",
            izvor: "Facebook",
            grad: "Šibenik"
        },
        {
            naslov: "Pomoć u azilu",
            opis: "Trebamo ruke za pomoć pri hranjenju, čišćenju i uređenju okoliša našeg skloništa.",
            link: "https://www.facebook.com/share/14e6rcYuoT7/",
            izvor: "Facebook",
            grad: "Dubrovnik"
        },
        {
            naslov: "Svjetski standardi volontiranja",
            opis: "Saznajte više o tome kako funkcionira volontiranje na globalnoj razini putem Petfindera.",
            link: "https://www.petfinder.com/",
            izvor: "Petfinder",
            grad: "Globalno"
        }
    ];
    return (
        <div id="volontiranje">
            <header className="v-hero">
                <h1>Postani glas onih koji ga nemaju</h1>
                <p>Tvoje vrijeme je najvredniji dar koji možeš pokloniti napuštenom psu.</p>
            </header>

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
                <div className="v-grid-poveznica">
                    {prilike.map((item, index) => (
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
            </section>
        </div>
    )
}
export default Volontiranje;