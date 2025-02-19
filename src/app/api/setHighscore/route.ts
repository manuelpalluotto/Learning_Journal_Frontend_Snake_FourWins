'use server';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { headers } from "next/headers";

export async function POST(request: Request) {

    const headersList = await headers();
    const ip = headersList.get('x-real-ip') || headersList.get('x-forwarded-for');
    const body = await request.json();
    const score = body.score;

    try {
        const scores = await prisma.scores.upsert({
            where: { ipAddress: ip || '' },
            update: {
                score
            },
            create: {
                ipAddress: ip || 'default',
                score
            }
        });
        return NextResponse.json(scores);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}
