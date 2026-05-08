import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <header className='Navbar'>
            <h1>Azilija</h1>
            <table>
                <tr>
                    <td><Link to="/">Početna</Link></td>
                    <td><Link to="/donacije">Donacije</Link></td>
                    <td><Link to="/volontiranje">Volontiranje</Link></td>
                    <td><Link to="/kumstvo">Udomljavaje/Kumstvo</Link></td>
                    <td><Link to="/nasilje">Prijava nasilja nad životinjama</Link></td>
                </tr>
            </table>
        </header>
    )
}
export default Navbar;