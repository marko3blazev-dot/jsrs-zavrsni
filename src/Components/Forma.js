import React, { Component } from "react";

class Forma extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imePrezime: '',
            email: '',
            iznos: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hvala Vam, ${this.state.imePrezime}! Uspješno ste dogovorili kumstvo za psa po imenu ${this.props.pas.ime} s mjesečnim iznosom od ${this.state.iznos} €.`);

        this.props.zatvori();
    }

    render() {
        const { pas, zatvori } = this.props;

        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h3>Postani kum za: <span style={{ color: '#166534' }}>{pas.ime}</span></h3>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-grupa">
                            <label>Ime i prezime:</label>
                            <input
                                type="text"
                                name="imePrezime"
                                value={this.state.imePrezime}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="form-grupa">
                            <label>Email adresa:</label>
                            <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="form-grupa">
                            <label>Iznos donacije (€):</label>
                            <input
                                type="number"
                                name="iznos"
                                min="1"
                                value={this.state.iznos}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="modal-akcije">
                            <button type="submit" className="btn-potvrdi">Potvrdi</button>
                            <button type="button" className="btn-odustani" onClick={zatvori}>Odustani</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Forma;