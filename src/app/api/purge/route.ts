import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { path } = await req.json();
    if (!path) {
      return NextResponse.json({ error: 'Path is required' }, { status: 400 });
    }

    // Call jsDelivr Purge API
    const targetUrl = `https://purge.jsdelivr.net/gh/jojin1709/iconyx@main/${path}`;
    const response = await fetch(targetUrl);
    
    if (!response.ok) {
      return NextResponse.json({ 
        error: `jsDelivr returned status ${response.status}: ${response.statusText}` 
      }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to call jsDelivr purge API' }, { status: 500 });
  }
}
