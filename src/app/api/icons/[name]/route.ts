import { NextRequest, NextResponse } from 'next/server';
import { icons } from '@/lib/icons';

type Props = {
  params: Promise<{ name: string }>;
};

export async function GET(req: NextRequest, props: Props) {
  try {
    const { name } = await props.params;
    const searchParams = req.nextUrl.searchParams;
    const size = searchParams.get('size') || '24';
    const color = searchParams.get('color') || 'currentColor';
    const strokeWidth = searchParams.get('stroke') || '2';

    const icon = icons.find(i => i.name === name);
    if (!icon) {
      return NextResponse.json({ error: 'Icon not found' }, { status: 404 });
    }

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color.startsWith('#') ? color : '#' + color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${icon.svgContent}</svg>`;

    return new Response(svg, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
