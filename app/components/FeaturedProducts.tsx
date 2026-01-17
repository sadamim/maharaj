import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Lavender Bliss',
    description: 'Calming lavender with shea butter',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1763485955921-d3842bd90eb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzb2FwJTIwbmF0dXJhbHxlbnwxfHx8fDE3NjU1MjIwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.9,
    bestseller: true,
  },
  {
    id: 2,
    name: 'Rose Garden',
    description: 'Delicate rose petals with argan oil',
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1588546071922-7c599cdf651b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwc29hcCUyMGVsZWdhbnR8ZW58MXx8fHwxNzY1NTIyMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5.0,
    bestseller: false,
  },
  {
    id: 3,
    name: 'Citrus Awakening',
    description: 'Energizing blend of orange & lemon',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1607006555278-8d2de55615e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHNvYXAlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY1NTIyMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.8,
    bestseller: true,
  },
  {
    id: 4,
    name: 'Mint Refresh',
    description: 'Cooling peppermint with eucalyptus',
    price: 23.99,
    image: 'https://images.unsplash.com/photo-1760614034530-a0d34463e03d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBsdXh1cnl8ZW58MXx8fHwxNzY1NTIyMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.7,
    bestseller: false,
  },
];

export function FeaturedProducts() {
  return (
    <section id="shop" className="py-20 lg:py-32 bg-cream">
      <div className="container-padding mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center"
        >
          <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-4">
            <span className="text-sm text-gold tracking-wider uppercase">Featured Collection</span>
          </div>
          <h2 className="mb-6">Artisan Crafted Soaps</h2>
          <p className="text-gray-600 max-w-2xl">
            Each bar is meticulously handcrafted with premium natural ingredients, 
            designed to nourish your skin and elevate your daily ritual.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-charcoal text-white rounded-full hover:bg-gold transition-colors duration-300"
          >
            <span className="tracking-wide">View All Products</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 flex flex-col h-full"
    >
      {/* Bestseller Badge */}
      {product.bestseller && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gold text-white text-xs tracking-wider uppercase rounded-full">
          Bestseller
        </div>
      )}

      {/* Favorite Button */}
      <motion.button
        onClick={() => setIsFavorited(!isFavorited)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md"
      >
        <Heart
          className={`w-5 h-5 transition-colors ${
            isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'
          }`}
        />
      </motion.button>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/20 flex items-center justify-center"
        >
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-charcoal rounded-full flex items-center gap-2 shadow-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="tracking-wide">Quick Add</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-gold text-gold'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">{product.rating}</span>
        </div>

        {/* Name & Description */}
        <h3 className="text-xl mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-2xl text-charcoal">${product.price}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-gold/10 hover:bg-gold text-gold hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
