import React, { useEffect, useState } from 'react';
import { fetchAnimals } from '../../../services/api';
import Card from '../../../components/ui/card';
import './AdoptionList.css';

const AdoptionList = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAnimals = async () => {
            try {
                const data = await fetchAnimals();
                setAnimals(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getAnimals();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <div className="adoption-list">
            <h1>Animais Disponíveis para Adoção</h1>
            <div className="animal-cards">
                {animals.map(animal => (
                    <Card key={animal.id} animal={animal} />
                ))}
            </div>
        </div>
    );
};

export default AdoptionList;