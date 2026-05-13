import './Content.css';
import { Link } from "react-router-dom";
function Content() {
    return (
        <main className='Content'>
            <section className="hero-banner">
                <div className="hero-tekst">
                    <h1>Pronađi svog novog najboljeg prijatelja</h1>
                    <p>Zajedno možemo stvoriti bolji svijet za napuštene i zlostavljane životinje. Odaberi kako želiš pomoći!</p>
                </div>
            </section>

            <section className="glavne-kartice-sekcija">
                <div className="kartice-kontejner">

                    <Link to="/kumstvo" className="akcijska-kartica">
                        <div className="ikona">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z" style={{ display: "none" }} />
                                <path d="M12 8.5c-.93 0-1.74.5-2.24 1.25-.5-.75-1.31-1.25-2.24-1.25-1.52 0-2.76 1.24-2.76 2.76 0 1.34 1.05 3.32 3.37 5.76.71.74 1.24 1.15 1.63 1.39.15.09.34.09.49 0 .39-.24.92-.65 1.63-1.39 2.32-2.44 3.37-4.42 3.37-5.76 0-1.52-1.24-2.76-2.76-2.76zm-5-3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM8.5 5.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                            </svg>
                        </div>
                        <h3>Udomi ili Kumuj</h3>
                    </Link>

                    <Link to="/volontiranje" className="akcijska-kartica">
                        <div className="ikona">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm4.5 4H7.5v-1c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25v1z" />
                            </svg>
                        </div>
                        <h3>Volontiraj</h3>
                    </Link>

                    <Link to="/donacije" className="akcijska-kartica">
                        <div className="ikona">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </div>
                        <h3>Donacije</h3>
                    </Link>

                    <Link to="/nasilje" className="akcijska-kartica">
                        <div className="ikona">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                            </svg>
                        </div>
                        <h3>Prijava nasilja</h3>
                    </Link>

                </div>
            </section>

            <section className="opis-stranice-sekcija">
                <div className="opis-kontejner">
                    <h2>Vaša poveznica sa skloništima za pse</h2>
                    <p>
                        Azilija je zamišljena kao centralna <strong>poveznica azila</strong> na jednom mjestu. 
                        Naša misija je povezati ljude velikog srca s napuštenim životinjama te omogućiti brz i 
                        <strong> laki pristup volonterskim programima</strong> u azilima. Bilo da želite udomiti, 
                        donirati ili pokloniti svoje vrijeme, ovdje počinje vaša priča.
                    </p>
                </div>
            </section>
        </main>
    )
}
export default Content;