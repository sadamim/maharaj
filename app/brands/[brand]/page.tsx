import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BrandPageClient, type BrandMeta } from './BrandPageClient';
import { brandTaglines } from '../../content/msipl';

export const brands: BrandMeta[] = [
  { key: 'shashi', name: 'SHASHI', tagline: brandTaglines.shashi },
  { key: 'savaal', name: 'SAVAAL', tagline: brandTaglines.savaal },
  { key: 'shashi-plus', name: 'SHASHI+', tagline: brandTaglines.shashiPlus, extra: brandTaglines.shashiPlusExtra },
];

export function generateStaticParams() {
  return brands.map((b) => ({ brand: b.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand: slug } = await params;
  const brand = brands.find((b) => b.key === slug);
  return {
    title: brand ? `${brand.name} - MSIPL` : 'Brand - MSIPL',
    description: brand?.tagline,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand: slug } = await params;
  const brand = brands.find((b) => b.key === slug);
  if (!brand) notFound();

  return <BrandPageClient brand={brand} allBrands={brands} />;
}
