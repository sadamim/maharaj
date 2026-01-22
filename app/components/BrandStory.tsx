import { motion } from 'framer-motion';
import { Leaf, Award, Heart, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Link from 'next/link';

export function BrandStory() {
  const values = [
    {
      icon: Leaf,
      title: 'Pure & Natural',
      description: 'Only the finest organic ingredients, ethically sourced from around the world.',
    },
    {
      icon: Award,
      title: 'Handcrafted Quality',
      description: 'Each bar is carefully crafted by skilled artisans using traditional methods.',
    },
    {
      icon: Heart,
      title: 'Cruelty-Free',
      description: 'Never tested on animals. Vegan-friendly and environmentally conscious.',
    },
    {
      icon: Sparkles,
      title: 'Luxury Experience',
      description: 'Transform your daily routine into a spa-like indulgent experience.',
    },
  ];

  return (
    <section id="story" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container-padding mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
          
           

            <h2 className="mb-6  text-center lg:text-left leading-tight text-h1">
              Crafting a Cleaner
              <span className="block">Tomorrow</span>
            </h2>


            <div className="space-y-4 text-gray-700 mb-8 force-justify">
              <p>
                What began decades ago as a simple mission to make everyday cleaning easier and safer has grown into Maharaja Soap Factory, a name associated with trust, care, and quality.
              </p>

              <p>
                Our roots lie in thoughtful craftsmanship. With experience honed over generations, we focus on creating cleansing solutions that carry tradition with innovation. Every formula we develop undergoes careful testing, ensuring it delivers the performance families rely on.
              </p>

              <p>
                We believe that a truly clean home is one made with intention. That’s why we choose responsible sourcing, precise manufacturing, and uncompromising quality at every stage.
              </p>

              <p>
                From the first wash to the final rinse, our products are designed to bring freshness, comfort and confidence into your home.
              </p>
            </div>



            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-charcoal text-white rounded-full hover:bg-gold transition-colors duration-300"
            >
              <Link href='/about'>
               <span className="tracking-wide">Know About </span>
              </Link>
             
            </motion.button>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-h-[520px] lg:max-h-[600px] rounded-2xl overflow-hidden shadow-2xl mx-auto">
              <ImageWithFallback
                src="/images/Ourstory.webp"
                alt="Natural botanical ingredients"
                className="w-full h-full object-cover"
              />

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-earth/20 rounded-full blur-3xl" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -top-5 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-1">
                <div className="w-22 h-22 bg-[#ac1e23]/10 rounded-full flex items-center justify-center">
                  <img
                    src="/images/25yrs_Maharaja.png"
                    alt="Maharaja Logo"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div>
                  {/* Content here */}
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 lg:mt-32">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold to-earth rounded-2xl flex items-center justify-center shadow-lg"
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="mb-3 group-hover:text-gold transition-colors">{value.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
