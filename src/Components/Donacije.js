import { Link } from "react-router-dom";
import Forma from './Forma';
import './Donacije.css';
function Donacije() {
    const [otvorenaForma, setOtvorenaForma] = useState(false);
    return (
        <div id="donacije">
            {otvorenaForma && (
                <Forma zatvori={() => setOtvorenaForma(false)} />
            )}

            <header className="d-hero">
                <h1>Tvoja podrška spašava živote</h1>
                <p>Svaka donacija, bez obzira na iznos, direktno pomaže u liječenju, hranjenju i zbrinjavanju naših njuškica.</p>
            </header>

            <section className="d-sadrzaj">

                <div className="d-sekcija financije">
                    <h2>Financijska pomoć</h2>

                    <div className="forma-gumb-kontejner">
                        <button className="btn-otvori-formu" onClick={() => setOtvorenaForma(true)}>
                            Ispuni kontakt formu za donatore
                        </button>
                        <p className="forma-napomena">
                            Ispuni formu kako bismo ti mogli osobno zahvaliti i poslati potvrdu o donaciji!
                        </p>
                    </div>

                    <div className="uplatnica-grid">
                        <div className="uplatnica-podaci">
                            <div className="podatak-red">
                                <span>Primatelj:</span>
                                <strong>Udruga Azilija, Zagreb</strong>
                            </div>
                            <div className="podatak-red">
                                <span>IBAN:</span>
                                <strong>HR12 3456 7890 1234 5678 9</strong>
                            </div>
                            <div className="podatak-red">
                                <span>Model i poziv na broj:</span>
                                <strong>HR00 2024-01</strong>
                            </div>
                            <div className="podatak-red">
                                <span>Opis plaćanja:</span>
                                <strong>Donacija za rad azila</strong>
                            </div>
                        </div>

                        <div className="qr-kod-okvir">
                            <div className="qr-placeholder">
                                <span>SCAN & PAY</span>
                                <p>Skeniraj barkod za brzu uplatu</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-grid-materijalno">
                    <div className="materijalno-kartica">
                        <div className="m-ikona">🦴</div>
                        <h3>Hrana i poslastice</h3>
                        <p>Uvijek nam nedostaje kvalitetne suhe hrane (briketa) i konzervi, posebno za štence i seniore.</p>
                    </div>

                    <div className="materijalno-kartica">
                        <div className="m-ikona">💊</div>
                        <h3>Lijekovi i higijena</h3>
                        <p>Sredstva protiv nametnika (ampule, ogrlice), šamponi i gaze su nam svakodnevna potreba.</p>
                    </div>

                    <div className="materijalno-kartica">
                        <div className="m-ikona">🏠</div>
                        <h3>Oprema</h3>
                        <p>Povoci, ogrlice, stare deke, ručnici i igračke pomažu nam da psima bude udobnije.</p>
                    </div>
                </div>

                <div className="d-zahvala">
                    <h3>Hvala ti što si dio naše priče!</h3>
                    <p>Zahvaljujući tvojim donacijama, prošle godine smo uspješno udomili preko 150 pasa i osigurali medicinsku skrb za sve naše štićenike.</p>
                </div>

            </section>
        </div>
    )
}
export default Donacije;