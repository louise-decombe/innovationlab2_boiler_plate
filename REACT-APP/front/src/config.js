import io from 'socket.io-client';

export const API_URL = 'http://localhost:1337'
export const URL_LOGIN = 'http://localhost:1337/admin/auth/login'
export const URL_REGISTER = 'http://localhost:1337/admin/auth/register'

let STRAPI_ENDPOINT;

if (process.env.NODE_ENV !== 'production') {
    STRAPI_ENDPOINT = 'http://localhost:1337';
} else {
    STRAPI_ENDPOINT = process.env.REACT_APP_SERVER_URL
}

export const socket = io(STRAPI_ENDPOINT);
