const API_BASE_URL = 'http://localhost:8080';

export interface AuthResponse {
    message?: string;
}

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
}



export async function login(username: string, password: string): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            credentials: 'include',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Login fehlgeschlagen');
    }
    return response.json();
}



export async function fetchEntries(): Promise<JournalEntry[]> {
    const response = await fetch(
        `${API_BASE_URL}/entries`, {
        method: 'GET',
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error('Fehler beim Abrufen der Einträge');
    }

    return response.json();

}



export async function fetchUsers(): Promise<User[]> {
    const response = await fetch(
        `${API_BASE_URL}/users`, {
        method: 'GET',
        credentials: 'include',
    }
    );



    if (!response.ok) {
        throw new Error('Fehler beim Laden der Benutzer');
    }

    return response.json();
}