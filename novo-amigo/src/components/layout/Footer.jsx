import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div>
                <p>Contato: contato@novo-amigo.com</p>
                <p>Telefone: (11) 1234-5678</p>
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()} Novo Amigo. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;