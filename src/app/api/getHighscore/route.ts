'use server';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {

    try {
        const scores = await prisma.scores.findFirst({
            select: {
                score: true
            },
            orderBy: {
                score: 'desc'
            }
        });
        return NextResponse.json(scores);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}
