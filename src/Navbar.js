import './Navbar.css';

function Navbar(){
    return(
        <header className='Navbar'>
            <h1>Azilija</h1>
            <nav>
                <a href='/'>Početna</a>
                <a href=''>Donacije</a>
                <a href=''>Volontiranje</a>
                <a href=''>Udomljavanje/kumstvo</a>
                <a href=''>Prijava nasilja nad životinjama</a>
            </nav>
        </header>
    )
}
export default Navbar;