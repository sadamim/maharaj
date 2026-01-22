"use client";


import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Filter, Search } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

const categories = [
  'All Products',
  'Washing Powders',
  'Liquid Detergents',
  'Dishwash',
  'Dishwash Gel',
  'Toilet Cleaner',
  'Floor Cleaner',
  'Detergent Cake',
];

const allProducts = [
  {
    id: 1,
    name: "Shashi Pink M-Lore Detergent Cake",
    category: "Detergent Cake",
    description: "Detergent cake for daily washing 150G & 60 PCS",
    price: 15,
    rating: 4.5,
    reviews: 120,
    image: "/images/SHASHI PIKK DEETERGENT CAKE.webp",
    bestseller: false,
    new: false,
  },
  {
    id: 2,
    name: "Shashi Pink Pouch",
    category: "Detergent Cake",
    description: "Compact detergent pouch",
    price: 10,
    rating: 4.4,
    reviews: 95,
    image: "/images/Shashi Pink Pouch.webp",
    bestseller: false,
    new: false,
    extent: ['(125g)', '(150g)', '(200g)']
  },
  {
    id: 3,
    name: "Shashi Pink Bullet Set",
    category: "Detergent Cake",
    description: "Bullet detergent cake 1 SET ,6 PCS",
    price: 180,
    rating: 4.6,
    reviews: 85,
    image: "/images/SHASHI PINK BULLET.webp",
    bestseller: false,
    new: false,
  },
  {
    id: 4,
    name: "Shashi Pink Bullet Pouch",
    category: "Detergent Cake",
    description: "Bullet detergent cake 250G 60 PCS",
    price: 30,
    rating: 4.6,
    reviews: 85,
    image: "/images/Shashi Pink Pouch.webp",
    bestseller: false,
    new: false,
  },
  {
    id: 5,
    name: "Shashi Arya Blue Detergent Cake",
    category: "Detergent Cake",
    description: "Arya blue detergent cake",
    price: 26,
    rating: 4.6,
    reviews: 130,
    image: "/images/SHASHI ARYA BLUE.webp",
    bestseller: false,
    new: false,
    extent: ['(250g)', '(300g)']
  },
  {
    id: 6,
    name: "Shashi Blue Pouch",
    category: "Detergent Cake",
    description: "Blue detergent pouch",
    price: 10,
    rating: 4.4,
    reviews: 100,
    image: "/images/Shashi Blue Pouch.webp",
    bestseller: false,
    new: false,
  },
 
 
  {
    id: 9,
    name: "Shashi Pink & Blue Washing Powder",
    category: "Washing Powder",
    description: "Dual colour washing powder",
    price: 90,
    rating: 4.7,
    reviews: 155,
    "image": "/images/SHASHI PINK & BLUE WASHING POWDE 1kg-MRP-100.webp",
    bestseller: false,
    new: false,
  },
  {
    id: 10,
    name: "Shashi Hi-Clean Washing Powder",
    category: "Washing Powder",
    description: "Hi-clean detergent powder",
    price: 10,
    rating: 4.5,
    reviews: 140,
    image: "/images/SHASHI CLEAN WASHING POWDER.webp",
    bestseller: false,
    new: false,
  },
 
  {
    id: 12,
    name: "Shashi Triple Action Detergent Powder",
    category: "Washing Powder",
    description: "Triple action detergent powder",
    price: 99,
    rating: 4.8,
    reviews: 210,
    image: "/images/SHASHI TRIPLE ACTION.webp",
    bestseller: false,
    new: false,
    extent: ['(500g)', '(1kg)', '(3+1kg)']
  },
 
  {
    id: 14,
    name: "Shashi Bheema Phenyl",
    category: "Phenyl",
    description: "Phenyl floor cleaner",
    price: 90,
    rating: 4.6,
    reviews: 160,
    image: "/images/SHASHI BHEEMAA PHYNYL.webp",
    bestseller: false,
    new: false,
  },
  
  {
    id: 16,
    name: "Mr Win Washing Powder",
    category: "Washing Powder",
    description: "Budget washing powder",
    price: 10,
    rating: 4.3,
    reviews: 120,
    image: "/images/Mr WIN WASHING POWDER.webp",
    bestseller: false,
    new: false,
  },
  {
    id: 17,
    name: "Shashi Gramflour Beauty Soap",
    category: "Beauty Soap",
    description: "Jar packed beauty soap",
    price: 150,
    rating: 4.7,
    reviews: 140,
    image: "/images/Shashi Gramflour Beauty Soap (6pc Jar).webp",
    bestseller: false,
    new: false,
    extent: ['(4pc Jar)', '(6pc Jar)']
  },
  {
    id: 18,
    name: "Shashi Papaya Beauty Soap",
    category: "Beauty Soap",
    description: "Papaya beauty soap jar",
    price: 230,
    rating: 4.8,
    reviews: 170,
    image: "/images/SHASHI PAPAYA BEAUTY SOAP (4PC JAR).webp",
    bestseller: false,
    new: false,
    extent: ['(4pc Jar)', '(6pc Jar)']
  },
  {
    id: 19,
    name: "Shashi Fabric Conditioner",
    category: "Fabric Conditioner",
    description: "Fabric softener",
    price: 4,
    rating: 4.4,
    reviews: 110,
    image: "/images/Shashi Fabric Conditioner.webp",
    bestseller: false,
    new: false,
  },
  {
    id: 20,
    name: "Savaal Oxydol Dishwash Gel",
    category: "Dishwash Gel",
    description: "Dishwash gel",
    price: 150,
    rating: 4.6,
    reviews: 145,
    image: "/images/SAVAAL OXYDOL DISH WASH GEL.webp",
    bestseller: false,
    new: false,
  },
 
  {
    id: 22,
    name: "Savaal Captain Floor Cleaner",
    category: "Floor Cleaner",
    description: "Floor cleaning liquid",
    price: 199,
    rating: 4.7,
    reviews: 160,
    image: "/images/SAVAAL CAPTAIN FLOOR CLEANER.webp",
    bestseller: false,
    new: false,
  },
  {
    id: 23,
    name: "Shashi Sandal Beauty Soap",
    category: "Beauty Soap",
    description: "Sandal fragrance soap",
    price: 45,
    rating: 4.8,
    reviews: 180,
    image: "/images/SHASHI SANDAL BEAUTY SOAP.webp",
    bestseller: false,
    new: false,
  },

  {
    "id": 24,
    "name": "Shashi Washing Powder",
    "category": "Washing Powder",
    "description": "General purpose washing powder",
    "price": 55,
    "rating": 4.5,
    "reviews": 120,
    "image": "/images/SHASHI WASHING POWDER.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 25,
    "name": "Shashi Hi-Clean Washing Powder",
    "category": "Washing Powder",
    "description": "Hi-clean detergent powder",
    "price": 60,
    "rating": 4.6,
    "reviews": 140,
    "image": "/images/SHASHI CLEAN WASHING POWDER.webp",
    "bestseller": true,
    "new": false
  },
 
  {
    "id": 27,
    "name": "Mr Win Washing Powder",
    "category": "Washing Powder",
    "description": "Economical washing powder",
    "price": 50,
    "rating": 4.3,
    "reviews": 90,
    image: "/images/Mr WIN WASHING POWDER.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 28,
    "name": "Savaal Gold Washing Powder",
    "category": "Washing Powder",
    "description": "Premium washing powder",
    "price": 100,
    "rating": 4.5,
    "reviews": 110,
    "image": "/images/SAVAAL GOLD WASHING POWDER.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 29,
    "name": "Savaal 999 Washing Powder",
    "category": "Washing Powder",
    "description": "High performance detergent",
    "price": 60,
    "rating": 4.6,
    "reviews": 130,
    "image": "/images/SHASHI WASHING POWDER.webp",
    "bestseller": true,
    "new": false
  },
  {
    "id": 30,
    "name": "Savaal Blue Pouch",
    "category": "Washing Powder",
    "description": "Compact washing powder pouch",
    "price": 10,
    "rating": 4.4,
    "reviews": 80,
    "image": "/images/SAVAAL BLUE POUCH 100g-MP-10.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 31,
    "name": "Shashi Pink Pouch",
    "category": "Detergent Cake",
    "description": "Pink detergent pouch",
    "price": 10,
    "rating": 4.5,
    "reviews": 150,
    "image": "/images/SHASHI PINK POUCH.webp",
    "bestseller": true,
    "new": false
  },
  {
    "id": 32,
    "name": "Shashi Blue Pouch",
    "category": "Detergent Cake",
    "description": "Blue detergent pouch",
    "price": 10,
    "rating": 4.5,
    "reviews": 145,
    image: "/images/SHASHI BLUE POUCH.webp",
    "bestseller": true,
    "new": false
  },
  {
    "id": 33,
    "name": "Shashi Pink Detergent Cake",
    "category": "Detergent Cake",
    "description": "Classic pink detergent cake",
    "price": 12,
    "rating": 4.6,
    "reviews": 210,
    "image": "/images/SHASHI PIKK DEETERGENT CAKE.webp",
    "bestseller": true,
    "new": false
  },
  {
    "id": 34,
    "name": "Shashi Anti Bacterial Detergent Cake",
    "category": "Detergent Cake",
    "description": "Anti bacterial detergent cake",
    "price": 25,
    "rating": 4.7,
    "reviews": 190,
    "image": "/images/SHASHI ANTIBACTERIAL DETERGENT CAKE.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 35,
    "name": "Mr Bheem Detergent Cake",
    "category": "Detergent Cake",
    "description": "Heavy duty detergent cake",
    "price": 15,
    "rating": 4.4,
    "reviews": 160,
    "image": "/images/MBHEEM DETERGENT CAKE.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 36,
    "name": "Mr Bheem Detergent Powder",
    "category": "Detergent Powder",
    "description": "Heavy duty detergent powder",
    "price": 15,
    "rating": 4.4,
    "reviews": 160,
    "image": "/images/Mr Bheem Detergent Powder.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 37,
    "name": "Savaal White Pouch",
    "category": "Detergent Cake",
    "description": "White detergent pouch",
    "price": 10,
    "rating": 4.3,
    "reviews": 140,
    "image": "/images/SAVAAL WHITE POUCH.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 38,
    "name": "Savaal Max Blue Detergent Cake",
    "category": "Detergent Cake",
    "description": "Blue detergent cake",
    "price": 10,
    "rating": 4.5,
    "reviews": 170,
    "image": "/images/SAVAAL MAX BLUE DETERGENT CAKE.webp",
    "bestseller": true,
    "new": false
  },
  {
    "id": 39,
    "name": "Savaal White Gold Detergent Cake",
    "category": "Detergent Cake",
    "description": "Premium detergent cake",
    "price": 25,
    "rating": 4.6,
    "reviews": 200,
    "image": "/images/SAVAAL WHITE GOLD DETINGENT CAKE.webp",
    "bestseller": true,
    "new": false
  },
  {
    "id": 40,
    "name": "Savaal More Bright Detergent Cake",
    "category": "Detergent Cake",
    "description": "Extra bright detergent cake",
    "price": 20,
    "rating": 4.4,
    "reviews": 155,
    "image": "/images/SAVAAL MORE BRIGHT DETERGENT CAKE.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 41,
    "name": "Savaal Max White Detergent Cake",
    "category": "Detergent Cake",
    "description": "White detergent cake",
    "price": 10,
    "rating": 4.5,
    "reviews": 165,
    "image": "/images/SAVAAL MAX WHITE DETERGENT CAKE.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 42,
    "name": "Savaal White Detergent Cake",
    "category": "Detergent Cake",
    "description": "Standard white detergent cake",
    "price": 12,
    "rating": 4.4,
    "reviews": 150,
    "image": "/images/SAVAAL WHITE DETERGENT CAKE.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 43,
    "name": "Savaal Oxydol Dishwash Bar",
    "category": "Dishwash",
    "description": "Oxydol dishwash bar",
    "price": 10,
    "rating": 4.6,
    "reviews": 180,
    "image": "/images/SAVAAL OXYEOL DISHWASH BAR.webp",
    "bestseller": true,
    "new": false
  },
  {
    "id": 44,
    "name": "Savaal Oxydol Dishwash Bar Round",
    "category": "Dishwash",
    "description": "Round dishwash bar",
    "price": 25,
    "rating": 4.7,
    "reviews": 200,
    "image": "/images/SAVAAL OXYDOL DISHWASH BAR .webp",
    "bestseller": true,
    "new": false
  },
  {
    "id": 45,
    "name": "Savaal Oxydol Dishwash Gel",
    "category": "Dishwash Gel",
    "description": "Dishwash gel",
    "price": 105,
    "rating": 4.7,
    "reviews": 170,
    "image": "/images/SAVAAL OXYDOL DISHWASH GEL.webp",
    "bestseller": true,
    "new": false
  },
  {
    "id": 46,
    "name": "Shashi Arya Dishwash Bar",
    "category": "Dishwash",
    "description": "Arya dishwash bar",
    "price": 10,
    "rating": 4.5,
    "reviews": 160,
    "image": "/images/SHASHI ARYA DISHWASHI BAR.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 47,
    "name": "Shashi Arya Dishwash Bar Round",
    "category": "Dishwash",
    "description": "Arya round dishwash bar",
    "price": 25,
    "rating": 4.6,
    "reviews": 175,
    "image": "/images/SHASHI ARYA DISHWASH BAR ROUND.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 48,
    "name": "Shashi Scouring Powder",
    "category": "Dishwash",
    "description": "Scouring powder",
    "price": 10,
    "rating": 4.4,
    "reviews": 140,
    "image": "/images/SHASHI SCOURING POWDER .webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 49,
    "name": "Shashi Sandal Beauty Soap",
    "category": "Beauty Soap",
    "description": "Sandal soap",
    "price": 30,
    "rating": 4.8,
    "reviews": 240,
    "image": "/images/SHASHI SANDAL BEAUTY SOAP.webp",
    "bestseller": true,
    "new": false
  },
  {
    "id": 50,
    "name": "Shashi Neem & Tulasi Beauty Soap",
    "category": "Beauty Soap",
    "description": "Herbal soap",
    "price": 30,
    "rating": 4.7,
    "reviews": 220,
    "image": "/images/SHASHI NEEM A TULASI BEAUTY SOAR.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 51,
    "name": "Shashi Gram Flour Beauty Soap",
    "category": "Beauty Soap",
    "description": "Gram flour soap",
    "price": 120,
    "rating": 4.9,
    "reviews": 300,
    "image": "/images/SHASHI GRAM POWDER BEAUTY SOAP.webp",
    "bestseller": true,
    "new": false
  },
  {
    "id": 52,
    "name": "Shashi Bheema Phenyl",
    "category": "Phenyl",
    "description": "Phenyl floor cleaner",
    "price": 70,
    "rating": 4.6,
    "reviews": 180,
    "image": "/images/SHASHI BHEEMAA PHYNYL.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 53,
    "name": "Savaal Extra Act Phenyl",
    "category": "Phenyl",
    "description": "Extra active phenyl",
    "price": 70,
    "rating": 4.6,
    "reviews": 170,
    "image": "/images/SAVAAL EXTRAA ACT PHYS.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 54,
    "name": "Shashi Scrubber",
    "category": "Scrubber",
    "description": "Steel scrubber",
    "price": 15,
    "rating": 4.4,
    "reviews": 160,
    "image": "/images/SHASHI SCRUBBER.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 64,
    "name": "Savaal Scrubber",
    "category": "Scrubber",
    "description": "Steel scrubber",
    "price": 15,
    "rating": 4.4,
    "reviews": 150,
    "image": "/images/SAVAAL SCRUBBER.webp",
    "bestseller": false,
    "new": false
  },
  {
    "id": 55,
    "name": "Savaal Captain Floor Cleaner",
    "category": "Floor Cleaner",
    "description": "Floor cleaning liquid",
    "price": 93,
    "rating": 4.7,
    "reviews": 200,
    "image": "/images/SAVAAL CAPTAIN FLOOR CLEANER.webp",
    "bestseller": true,
    "new": false
  },
  {
    "id": 56,
    "name": "Savaal Captain Toilet Cleaner",
    "category": "Toilet Cleaner",
    "description": "Toilet cleaning liquid",
    "price": 90,
    "rating": 4.6,
    "reviews": 190,
    "image": "/images/SAVAAL CAPTAIN TOILET CLEANE.webp",
    "bestseller": true,
    "new": false
  },
  {
    "id": 57,
    "name": "Shashi Matic Liquid Detergent",
    "category": "Liquid Detergent",
    "description": "Liquid detergent for machines",
    "price": 220,
    "rating": 4.6,
    "reviews": 160,
    "image": "/images/SHASHI MATIC.webp",
    "bestseller": true,
    "new": false
  },
  {
    "id": 58,
    "name": "Shashi Pink Detergent Cake",
    "category": "Detergent Cake",
    "description": "Pink detergent cake",
    "price": 20,
    "rating": 4.5,
    "reviews": 145,
    "image": "/images/SHASHI PIKK DEETERGENT CAKE.webp",
    "bestseller": false,
    "new": false
  }


];

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
    <div className="pt-24 min-h-screen bg-cream">
      {/* Hero Section */}

      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('/images/productbanner.webp')`,
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
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
              <span className="text-sm text-gold tracking-wider uppercase">Our Collection</span>
            </div>
            <h1 className="text-white mb-6">Premium Home-Care Essentials</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover our refined range of detergents, soaps, and cleaning solutions — thoughtfully crafted to deliver powerful performance, fabric safety, and long-lasting freshness for every home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b border-gray-200 sticky top-14 sm:top-16 lg:top-24 z-40">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-6 lg:items-center lg:justify-between py-3 lg:py-6">

            {/* Search */}
            

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide w-full order-2 pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm transition-all
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
                className="w-full lg:w-auto px-4 py-2.5 border-2 border-gray-200 rounded-full
                     focus:border-gold focus:outline-none transition-colors bg-white
                     cursor-pointer text-sm"
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
      <section className="py-16">
        <div className="container-padding mx-auto">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-gray-600">
            <span className="text-sm md:text-base">
              Showing <b>{sortedProducts.length}</b> products
            </span>

            <a
              href="/files/sample.pdf"
              download
              className="px-4 py-2 rounded-full whitespace-nowrap transition-all bg-gold text-white shadow-md"
            >
              Download All Products
            </a>
          </div>


          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

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
  );
}

function ProductCard({ product, index }: { product: typeof allProducts[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500"
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

      {/* Favorite */}
      <motion.button
        onClick={() => setIsFavorited(!isFavorited)}
        whileTap={{ scale: 0.9 }}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10
                   w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm
                   rounded-full flex items-center justify-center shadow-md"
      >
        <Heart
          className={`w-4 h-4 sm:w-5 sm:h-5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
        />
      </motion.button>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <motion.div
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hover Overlay (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex absolute inset-0 bg-black/20 items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-white text-charcoal rounded-full flex items-center gap-2 shadow-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="tracking-wide text-sm">Quick Add</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-4 sm:p-6">
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

