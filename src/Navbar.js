import './Navbar.css';

function Navbar(){
    return(
        <header className='Navbar'>
            <h1>Azilija</h1>
            <nav>
                <a>Početna</a>
                <a>Donacije</a>
                <a>Volontiranje</a>
                <a>Udomljavanje/kumstvo</a>
                <a>Prijava nasilja nad životinjama</a>
            </nav>
        </header>
    )
}
export default Navbar;