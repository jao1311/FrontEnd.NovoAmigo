import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.exemplo.com', // URL base da API
  timeout: 10000, // Tempo limite para requisições
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para obter dados
export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    throw error;
  }
};

// Função para enviar dados
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    throw error;
  }
};

// Outras funções de API podem ser adicionadas aqui

export default api;