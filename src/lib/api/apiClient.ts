import axios from 'axios';

const URL = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? 'http://localhost:8080/'
  : 'http://lj-backend:8080/';

  
const apiClient = axios.create({
    baseURL: URL,
    headers: { 'Content-Type': 'application/json', },
    withCredentials: true,
},
);

export interface JournalEntry {
    id: string;
    author: string;
    entry: string;
    timestamp?: string; 
    userId: string;
}


export interface User {
    id: string;
    email: string;
    username: string;
    password: string;
    role: string;
    classroom: string;
}


apiClient.interceptors.response.use(
    response => response, 
    error => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
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


