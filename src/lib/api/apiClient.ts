import axios from 'axios';

const URL = 'http://localhost:8080/auth';


export interface JournalEntry {
    id: string;
    entry: string;
    author: string;
    userId: string;
}

export interface User {
    id: string;
    email: string;
    username: string;
    password: string;
    role: string;
}

const apiClient = axios.create({
    baseURL: URL,
    headers: { 'Content-Type': 'application/json', },
},
);


//interceptor fügt an jeden request den token an
apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        if (config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default apiClient;


