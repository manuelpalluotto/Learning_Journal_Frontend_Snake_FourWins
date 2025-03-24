import { NextApiRequest, NextApiResponse } from 'next';
import mysql, { RowDataPacket } from 'mysql2/promise';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Nur GET erlaubt' });

    const { id } = req.query;

    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'projects',
        port: 3306
    });

    const [rows] = await connection.execute<RowDataPacket[]>('SELECT image FROM projects WHERE id = ?', [id]);

    if (rows.length === 0) return res.status(404).json({ error: 'Bild nicht gefunden' });

    res.setHeader('Content-Type', 'image/png'); // Passe den MIME-Typ an, falls nötig
    res.send(rows[0].image);
}
