import './Navbar.css';
import CartWidget from '../CartWidget/Cartwidget';

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
                <CartWidget />
            </nav>
        </header>
    );
};

export default Navbar;