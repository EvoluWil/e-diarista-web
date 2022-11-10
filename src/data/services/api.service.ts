import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ediaristas-api-php.herokuapp.com'
  //baseURL: 'http://localhost:3001/v1'
});
