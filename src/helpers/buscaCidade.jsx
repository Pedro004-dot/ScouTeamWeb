import axios from 'axios';

const baseUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades';

export async function fetchStates() {
    try {
        const response = await axios.get(`${baseUrl}/estados`);
        return response.data.sort((a, b) => a.nome.localeCompare(b.nome));
    } catch (error) {
        console.error('Erro ao buscar estados:', error);
        return [];
    }
}

export async function fetchCities(uf) {
    try {
        const response = await axios.get(`${baseUrl}/estados/${uf}/municipios`);
        return response.data.sort((a, b) => a.nome.localeCompare(b.nome));
    } catch (error) {
        console.error('Erro ao buscar cidades:', error);
        return [];
    }
}
