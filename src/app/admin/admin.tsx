import '@/css/admin.css';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import axios from 'axios';
import Sidenav from '@/components/Sidenav';

export default function Admin() {
    const [file, setFile] = useState<File | null>(null);
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function handleUpload(event: React.FormEvent) {
        event.preventDefault();
        if (!file) {
            alert('Bitte wähle eine Datei aus.');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);
        formData.append('title', title);
        formData.append('description', description);

        try {
            await axios.post('http://manuel-palluotto:3306/projects', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Projekt erfolgreich hochgeladen!');
            setFile(null);
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Fehler beim Hochladen:', error);
        }
    }

    return (
        <div className="admin-wrapper">
            <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
            <div className="admin-container">
                <h1>Admin-Bereich</h1>
                <h2>Neues Projekt hochladen</h2>
                <form onSubmit={handleUpload} className="upload-form">
                    <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} required />
                    <input type="text" placeholder="Projekttitel" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <textarea placeholder="Projektbeschreibung" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                    <button type="submit" className="submit-button">Hochladen</button>
                </form>
            </div>
        </div>
    );
}