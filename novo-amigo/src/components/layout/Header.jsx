import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importando estilos específicos do cabeçalho

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/adoption">Adoção</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Registrar</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;