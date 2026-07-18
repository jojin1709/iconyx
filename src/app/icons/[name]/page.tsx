import { icons } from '@/lib/icons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IconDetailView from '@/components/IconDetailView';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface RouteProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  return icons.map((icon) => ({
    name: icon.name,
  }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { name } = await params;
  const icon = icons.find((i) => i.name === name);

  if (!icon) {
    return {
      title: 'Icon Not Found — Iconyx',
    };
  }

  return {
    title: `${icon.name} Icon — Free SVG CDN`,
    description: `Free high-quality SVG CDN URL and React component code snippet for the "${icon.name}" vector icon in the "${icon.category}" category.`,
    keywords: [icon.name, 'svg icon', 'free icon', 'icon cdn', icon.category],
  };
}

export default async function IconDetailPage({ params }: RouteProps) {
  const { name } = await params;
  const icon = icons.find((i) => i.name === name);

  if (!icon) {
    notFound();
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '4rem 0' }}>
        <IconDetailView icon={icon} />
      </main>
      <Footer />
    </div>
  );
}
