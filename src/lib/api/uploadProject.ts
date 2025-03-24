import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Nur POST erlaubt' });

    const { title, description, image } = req.body;

    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'projects',
        port: 3306
    });

    await connection.execute('INSERT INTO projects (title, description, image) VALUES (?, ?, ?)', [title, description, image]);
    res.json({ message: 'Bild erfolgreich gespeichert!' });
}
