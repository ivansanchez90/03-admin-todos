import { NextResponse, NextRequest } from 'next/server'
//rag
export async function GET(request: Request) {
  return NextResponse.json({
    hola: 'mundo',
  })
}
