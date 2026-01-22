"use client";

import { motion, useAnimation } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Link from "next/link";
import { useEffect } from "react";

/* ---------------- SHASHI ---------------- */
const ingredients = [
  {
    name: "Shashi Pink M-Lore Detergent Cake",
    benefit: "Daily washing care",
    description:
      "Detergent cake designed for daily washing that effectively removes dirt while keeping clothes fresh and well maintained.",
    image: "/images/SHASHI PINK MLORE.webp",
  },
  {
    name: "Shashi Pink Pouch (125g)",
    benefit: "Compact & convenient cleaning",
    description:
      "A compact detergent pouch ideal for everyday use, offering effective cleaning performance in a convenient size.",
    image: "/images/SHASHI PINK POUCH 125G.webp",
  },
  {
    name: "Shashi Pink Bullet Set",
    benefit: "Powerful hand wash cleaning",
    description:
      "Bullet detergent cake set that tackles tough stains and grease while preserving fabric quality and freshness.",
    image: "/images/SHASHI PINK BULLET.webp",
  },
  {
    name: "Shashi Arya Blue Detergent Cake",
    benefit: "Deep stain removal",
    description:
      "Arya Blue detergent cake formulated for deep cleaning, removing stubborn stains and keeping clothes bright.",
    image: "/images/SHASHI ARYA BLUE.webp",
  },
  {
    name: "Shashi Scouring Dishwash Powder",
    benefit: "Effective utensil cleaning",
    description:
      "Scouring dishwash powder that removes grease and food residue efficiently, leaving utensils clean and hygienic.",
    image: "/images/SHASHI SCOURING POWDER .webp",
  },
];

/* ---------------- SAVAAL ---------------- */
const ingredients2 = [
  {
    name: "Savaal Gold Washing Powder",
    benefit: "Premium washing care",
    description: "Premium washing powder for superior cleanliness and freshness.",
    image: "/images/SAVAAL_GOLD_WASHING_POWDER.webp",
  },
  {
    name: "Savaal 999 Washing Powder",
    benefit: "High performance detergent",
    description: "High performance washing powder for tough stain removal.",
    image: "/images/SHASHI WASHING POWDER.webp",
  },
  {
    name: "Savaal Blue Pouch",
    benefit: "Compact & economical",
    description: "Compact washing powder pouch for daily household use.",
    image: "/images/SAVAAL BLUE POUCH 100g-MP-10.webp",
  },
  {
    name: "Savaal White Pouch",
    benefit: "Gentle daily wash",
    description: "White detergent pouch designed for everyday fabric care.",
    image: "/images/SAVAAL WHITE POUCH.webp",
  },
  {
    name: "Savaal Max Blue Detergent Cake",
    benefit: "Powerful stain removal",
    description: "Blue detergent cake that removes stubborn stains effectively.",
    image: "/images/SAVAAL_MAX_BLUE_DETERGENT_CAKE.webp",
  },
];

type SliderRowProps = {
  data: any[];
  reverse?: boolean;
};

/* ---------------- SLIDER ROW ---------------- */
const SliderRow = ({ data, reverse = false }: SliderRowProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls, reverse]);

  return (
    <div className="ingredients-slider overflow-hidden">
      <motion.div
        className="ingredients-track flex"
        animate={controls}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() =>
          controls.start({
            x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
            transition: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
          })
        }
      >
        {[...data, ...data].map((item, index) => (
          <div className="ingredient-card" key={index}>
            {/* Image */}
            <div className="ingredient-image">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="ingredient-content">
              <span className="ingredient-badge">{item.benefit}</span>
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function Ingredients() {
  return (
    <section
      id="ingredients"
      className="py-20 lg:py-32 bg-gradient-to-b from-cream to-white"
    >
      <div className="container-padding mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mx-auto"
        >
          <h2 className="mb-6">Premium Home-Care Essentials</h2>
          <p className="text-gray-600">
            Discover our trusted detergent and dishwash products crafted for
            superior cleanliness, long-lasting freshness, and everyday care.
          </p>
        </motion.div>

        <h2 className="mb-6 text-center">SHASHI</h2>
        <SliderRow data={ingredients} />

        <div className="h-14" />

        <h2 className="mb-6 text-center">SAVAAL</h2>
        <SliderRow data={ingredients2} reverse />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-charcoal text-white rounded-full hover:bg-gold transition-colors duration-300"
          >
            <Link href="/products">
              <span className="tracking-wide">View All Products</span>
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
