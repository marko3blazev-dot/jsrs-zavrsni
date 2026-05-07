import './Content.css';
function Content() {
    return (
        <main className='Content'>
            <h1>Početna stranica</h1>
            <section className="hero-section">
                <div className="hero-content">
                    <p className="intro-text">
                        Svaka životinja zaslužuje dom pun ljubavi i sigurnosti.
                        U Aziliji svakodnevno radimo na tome da napuštenim, zaboravljenim i ranjenim
                        šapicama pružimo toplinu, punu zdjelicu i, ono najvažnije, priliku za sretan život.
                        Pregledaj naše štićenike – možda se tvoj novi najbolji prijatelj krije baš ovdje.
                    </p>
                </div>
            </section>
            <section className="site-features">
                <h2 className="section-title">Kako vam naša stranica može pomoći?</h2>
                <div className="features-grid">

                    <div className="feature-card">
                        <div className="feature-icon">🐾</div>
                        <h3>Pregled za udomljavanje</h3>
                        <p>
                            Upoznajte naše trenutne štićenike. Pregledajte galerije slika, pročitajte njihove
                            životne priče i saznajte karakteristike svakog psa ili mačke kako biste pronašli
                            idealnog ljubimca za svoj dom.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">❤️</div>
                        <h3>Donacije i kumstvo</h3>
                        <p>
                            Saznajte kako financijski ili materijalno podržati azil. Putem stranice možete
                            pronaći podatke za uplatu jednokratnih donacija ili ispuniti obrazac za virtualno
                            kumstvo određenoj životinji.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🤝</div>
                        <h3>Prijava za volontiranje</h3>
                        <p>
                            Želite nam se pridružiti? Ovdje možete pročitati sve o našim volonterskim programima,
                            saznati termine za šetnje pasa te ispuniti online prijavnicu za nove volontere.
                        </p>
                    </div>

                    <div className="feature-card alert-card">
                        <div className="feature-icon">⚠️</div>
                        <h3>Prijava nasilja i zanemarivanja</h3>
                        <p>
                            Ako ste svjedok zlostavljanja životinja, naša stranica nudi siguran i brz obrazac
                            za prijavu. Vaša prijava može anonimno biti proslijeđena nadležnim institucijama i
                            našoj terenskoj službi.
                        </p>
                    </div>

                </div>
            </section>
        </main>
    )
}
export default Content;