import pool from '@/lib/db';
import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

export async function GET() {

    try {
        const [rows] = await pool.query('SELECT score FROM snake_gamer ORDER BY score DESC LIMIT 1');
        return NextResponse.json(rows);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}
