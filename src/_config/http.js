import axios from 'axios';

const apiMarvel = axios.create({
  baseURL: 'https://developer.marvel.com/',
});

export default apiMarvel;
