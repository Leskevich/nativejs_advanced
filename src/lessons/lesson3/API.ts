import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '8575ca9d';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
