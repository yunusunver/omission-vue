import axios from 'axios';
import { BASE_URL, Storages } from '../utility/const';

let apiUrl = process.env.NODE_ENV == "production" ? BASE_URL.PRODUCTION : BASE_URL.DEV;

// Axios Base Configuration
const instance = axios.create({
    baseURL: apiUrl
});
// Interceptors
instance.interceptors.request.use(
    config => {
        let token = localStorage.getItem(Storages.OMISSION_USER);

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        
        return Promise.reject(error);
    }
);



export default instance;