import { motion } from 'framer-motion';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const products = [
  { id: 1, image: '/images/g1.webp' },
  { id: 2, image: '/images/g2.webp' },
  { id: 3, image: '/images/g3.webp' },
  // { id: 4, image: '/images/g4.webp' },
  { id: 5, image: '/images/g5.webp' },
  { id: 6, image: '/images/g6.webp' },
  { id: 7, image: '/images/g7.webp' },
];

export function FeaturedGallary() {
  return (
    <section id="shop" className="py-20 lg:py-32 bg-cream">
      <div className="container-padding mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2>Gallery</h2>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: any) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <motion.div
          animate={{ scale: hover ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={product.image}
            alt="gallery"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
