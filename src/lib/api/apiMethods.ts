import apiClient from "./apiClient";
import { JournalEntry, User } from '@/lib/api/apiClient';


export async function login(username: string, password: string): Promise<string> {
    const response = await apiClient.post<{ token: string }>(
        '/login', { username, password }
    );
    return response.data.token;
}

export async function fetchEntries(): Promise<JournalEntry[]> {
    const response = await apiClient.get<JournalEntry[]>('/entries');
    return response.data;
}

export async function addEntry(entry: Omit<JournalEntry, 'id'>): Promise<JournalEntry> {
    const response = await apiClient.post<JournalEntry>('/entries', entry);
    return response.data;
}

export async function fetchUsers(): Promise<User[]> {
    const response = await apiClient.get<User[]>('/users');
    return response.data;
}

export async function addUser(user: Omit<User, 'id'>): Promise<User> {
    const response = await apiClient.post<User>('/users', user);
    return response.data;
}