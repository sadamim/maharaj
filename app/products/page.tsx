"use client";


import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { allProducts, categories } from '../content/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts =  allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured/default
  });

  return (
    <div className="pt-24 min-h-screen ">
      <div className='bg-cream'>
 {/* Hero Section */}

      <section className="products-hero relative py-20 lg:py-32 bg-deep-maroon overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('/images/MSIPL_banner.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        <div className="container-padding mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-6">
              <span className="text-sm text-white tracking-wider uppercase">Our Collection</span>
            </div>
            <h1 className="text-white mb-6">Premium Home-Care Essentials</h1>

          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="products-filter-section bg-white border-b border-gray-200 sticky products-filter-bar z-40">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-6 lg:items-center lg:justify-between py-3 lg:py-6">

            {/* Search */}


            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide w-full order-2 pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`product-category-pill px-4 py-2 rounded-full whitespace-nowrap text-sm transition-all
              ${selectedCategory === category
                      ? 'bg-gold text-white shadow'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 w-full lg:w-auto order-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="product-sort w-full lg:w-auto px-4 py-2.5 border-2 border-gray-200 rounded-full
                     focus:border-gold focus:outline-none transition-colors bg-drak
                     cursor-pointer text-sm text-black"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

          </div>
        </div>
      </section>



      {/* Products Grid */}
      <section className="products-catalog-section py-16">
        <div className="container-padding mx-auto">
          <div className="products-catalog-toolbar mb-6 flex flex-wrap items-center justify-between gap-3 text-gray-600">
            <span className="text-sm md:text-base">
              Showing <b>{sortedProducts.length}</b> products
            </span>

<button
  onClick={() => {
    const files = [
      "/images/Shashi_Catalogue.pdf",
      "/images/Catalogue_image.pdf",
    ];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;
      link.download = file.split("/").pop() ?? "catalogue.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }}
  className="catalog-download px-4 py-2 rounded-full whitespace-nowrap transition-all bg-gold text-white shadow-md"
>
  <Download className="w-4 h-4" /> Download All Catalogues
</button>

          </div>


          <div className="products-page-grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

            {sortedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All Products');
                  setSearchTerm('');
                }}
                className="mt-6 px-6 py-3 bg-gold text-white rounded-full hover:bg-gold-dark transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
      </div>

    </div>
  );
}

function ProductCard({ product, index }: { product: typeof allProducts[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="catalog-product-card group relative bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500"
    >
      {/* Badges */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 flex flex-col gap-1 sm:gap-2">
        {product.bestseller && (
          <div className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gold text-white text-[10px] sm:text-xs tracking-wider uppercase rounded-full">
            Bestseller
          </div>
        )}
        {product.new && (
          <div className="px-2 py-0.5 sm:px-3 sm:py-1 bg-earth text-white text-[10px] sm:text-xs tracking-wider uppercase rounded-full">
            New
          </div>
        )}
      </div>

      {/* Image */}
      <div className="catalog-product-image relative aspect-square overflow-hidden bg-gray-100">
        <motion.div
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-5 sm:p-8"
          />
        </motion.div>

      </div>

      {/* Info */}
      <div className="catalog-product-info p-4 sm:p-6">
        <div className="text-[10px] sm:text-xs text-gold tracking-wider uppercase mb-1 sm:mb-2">
          {product.category}
        </div>

        {/* Rating */}


        {/* Name */}
        <h3 className="text-base sm:text-xl mb-1 sm:mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Included */}
        {Array.isArray(product.extent) && product.extent.length > 0 && (
          <div className="pt-2 sm:pt-3 border-t border-gray-100">
            <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">
              Included:
            </span>
            <span className="text-xs sm:text-sm text-gray-700 ml-1">
              {product.extent.join(" • ")}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
