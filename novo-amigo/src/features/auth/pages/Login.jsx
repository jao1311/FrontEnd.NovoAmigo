import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Input from '../../../components/ui/input';
import Button from '../../../components/ui/button';
import './Login.css'; // Estilos específicos para a página de login

const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            // Redirecionar ou realizar outra ação após o login
        } catch (err) {
            setError('Falha ao fazer login. Verifique suas credenciais.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Entrar</Button>
            </form>
        </div>
    );
};

export default Login;