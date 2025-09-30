import React from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../../../hooks/useApi';
import Card from '../../../components/ui/card';

const AdoptionDetails = () => {
    const { id } = useParams();
    const { data: animal, loading, error } = useApi(`/api/adoption/${id}`);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro ao carregar os detalhes do animal.</div>;

    return (
        <div>
            <h1>Detalhes do Animal</h1>
            {animal && (
                <Card>
                    <h2>{animal.name}</h2>
                    <img src={animal.image} alt={animal.name} />
                    <p>{animal.description}</p>
                    <p>Idade: {animal.age} anos</p>
                    <p>Raça: {animal.breed}</p>
                </Card>
            )}
        </div>
    );
};

export default AdoptionDetails;