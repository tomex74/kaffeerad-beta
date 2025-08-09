import { NextResponse } from 'next/server'

export async function GET() {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
    service: 'KaffeeRad Berlin',
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  }

  try {
    return NextResponse.json(healthCheck, { status: 200 })
  } catch (error) {
    healthCheck.message = 'ERROR'
    return NextResponse.json(healthCheck, { status: 503 })
  }
}