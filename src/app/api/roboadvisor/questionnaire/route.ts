import { NextResponse } from 'next/server';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'http://localhost:3005';

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/roboadvisor/questionnaire`, {
      method: 'GET',
      cache: 'no-store',
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || 'Erreur proxy questionnaire roboadvisor' },
      { status: 500 }
    );
  }
}
