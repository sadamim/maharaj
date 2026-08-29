"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { EnquiryModal } from '../../components/EnquiryModal';
import { productsByBrand, type BrandKey } from '../../content/products';
import { brandTaglines } from '../../content/msipl';

export type BrandMeta = { key: BrandKey; name: string; tagline: string; extra?: string };

const ALL = 'All Segments';

const brandBanners: Record<BrandKey, string> = {
  shashi: '/Shashi Banner-1.webp',
  savaal: '/Savaal_banner-1.webp',
  'shashi-plus': '/images/productbanner.webp',
};

export function BrandPageClient({
  brand,
  allBrands,
}: {
  brand: BrandMeta;
  allBrands: BrandMeta[];
}) {
  const [activeSegment, setActiveSegment] = useState(ALL);
  const [enquiryProduct, setEnquiryProduct] = useState<string | null>(null);

  const products = useMemo(
    () => (brand.key === 'shashi-plus' ? [] : productsByBrand(brand.key)),
    [brand.key]
  );

  const segments = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return [ALL, ...unique];
  }, [products]);

  const filtered =
    activeSegment === ALL ? products : products.filter((p) => p.category === activeSegment);

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-deep-maroon overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${brandBanners[brand.key]}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        <div className="container-padding relative z-10 w-full">
          <motion.div
            key={brand.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-left"
          >
            <h1 className="text-white mb-4">{brand.name}</h1>
            <p className="text-white/85 text-lg">{brand.tagline}</p>
            {brand.extra && <p className="text-white/60 text-sm italic mt-1">{brand.extra}</p>}
          </motion.div>
        </div>
      </section>

      {/* Brand switcher */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="container-padding mx-auto flex flex-wrap justify-center gap-3">
          {allBrands.map((b) => (
            <Link
              key={b.key}
              href={`/brands/${b.key}`}
              className={`px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors ${
                brand.key === b.key
                  ? 'bg-gold text-white shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {b.name}
            </Link>
          ))}
        </div>
      </section>

      {brand.key === 'shashi-plus' ? (
        <section className="py-20 lg:py-32 bg-white">
          <div className="container-padding mx-auto">
            <div className="max-w-xl mx-auto text-center bg-cream rounded-3xl border-2 border-dashed border-gray-200 py-20 px-8">
              <p className="text-2xl text-gray-400 mb-3 text-center">SHASHI+ product lineup launching soon.</p>
              <p className="text-sm text-gray-400 text-center">
                {brandTaglines.shashiPlusExtra} - full product listings will appear here once
                available.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Segment filter */}
          <section className="py-8 bg-white border-b border-gray-200">
            <div className="container-padding mx-auto flex flex-wrap justify-center gap-2">
              {segments.map((segment) => (
                <button
                  key={segment}
                  onClick={() => setActiveSegment(segment)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm transition-all ${
                    activeSegment === segment
                      ? 'bg-gold text-white shadow'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {segment}
                </button>
              ))}
            </div>
          </section>

          {/* Product grid */}
          <section className="py-16 bg-white">
            <div className="container-padding mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {filtered.map((product, index) => (
                  <motion.button
                    key={product.id}
                    type="button"
                    onClick={() => setEnquiryProduct(product.name)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.04 }}
                    className="bg-cream rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 text-left cursor-pointer"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-5 sm:p-8"
                      />
                    </div>
                    <div className="p-4 sm:p-6 text-center">
                      <div className="text-[10px] sm:text-xs text-gold tracking-wider uppercase mb-1 sm:mb-2">
                        {product.category}
                      </div>
                      <h3 className="text-base sm:text-lg mb-1 sm:mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold">
                        Enquire Now →
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {filtered.length === 0 && (
                <p className="text-center text-gray-500 py-16">
                  No products in this segment yet.
                </p>
              )}
            </div>
          </section>
        </>
      )}

      <EnquiryModal
        open={!!enquiryProduct}
        onClose={() => setEnquiryProduct(null)}
        productName={enquiryProduct ?? undefined}
      />
    </div>
  );
}
