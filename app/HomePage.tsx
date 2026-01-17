"use client";

import {Hero} from "./components/Hero";
import {FeaturedGallary} from "./components/Gallary";
import {Ingredients} from "./components/Ingredients";
import {Testimonials} from "./components/Testimonials";
import { BrandStory } from "./components/BrandStory";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Ingredients />
      <Testimonials />
      <FeaturedGallary />
    </>
  );
}
