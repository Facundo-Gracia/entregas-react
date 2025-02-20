import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav className="barra">
                <p>Logo de la empresa</p>
                <ul className='nav-bar'>
                    <li>Inicio</li>
                    <li>Tortas</li>
                    <li>Galletitas</li>
                </ul>
                <img className='carrito' src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt=""/>
            </nav>
        </header>
    );
};

export default Navbar;