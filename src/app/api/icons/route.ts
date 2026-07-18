import { NextResponse } from 'next/server';
import { icons, CATEGORIES } from '@/lib/icons';

export async function GET() {
  try {
    const data = {
      total: icons.length,
      categoriesCount: CATEGORIES.length - 1, // minus 'all'
      categories: CATEGORIES.filter(c => c.id !== 'all').map(c => ({
        id: c.id,
        label: c.label,
        count: icons.filter(i => i.category === c.id).length
      })),
      icons: icons.map(i => ({
        name: i.name,
        category: i.category,
        tags: i.tags,
        cdnUrl: `https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/${i.category}/${i.name}.svg`
      }))
    };

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}
