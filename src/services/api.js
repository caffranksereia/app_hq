import axios from 'axios';
import md5 from 'md5';

const apikey = process.env.APIKEY;
const privateKey = process.env.PRIVATEKEY;
const ts = Number(new Date());
const hash = md5(ts + privateKey + apikey);

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: apikey,
    hash: hash,
  },
});

export default instance;
