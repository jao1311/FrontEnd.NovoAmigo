import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import Button from '../../../components/ui/button';
import Input from '../../../components/ui/input';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useAuth();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(email, password);
            history.push('/'); // Redireciona para a página inicial após o registro
        } catch (err) {
            setError('Falha ao registrar. Tente novamente.');
        }
    };

    return (
        <div>
            <h2>Registrar</h2>
            {error && <p>{error}</p>}
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
                <Button type="submit">Registrar</Button>
            </form>
        </div>
    );
};

export default Register;