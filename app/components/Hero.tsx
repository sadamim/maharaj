import { ArrowRight, ArrowLeft, Leaf, Package, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const heroStats = [
  { target: 100, suffix: "%", label: "Natural Ingredients", Icon: Leaf },
  { target: 25, suffix: "+", label: "Soap Varieties", Icon: Package },
  { target: 50, suffix: "K+", label: "Happy Customers", Icon: Users },
];

export function Hero() {
  /* ---------------- HERO BANNER SLIDES ---------------- */
  const banners = [
    {
      id: 1,
      desktop: "/images/Mahraja_Banner_new.webp",
      mobile: "/images/Maharaja_banner_mob_version.webp",
    },
    {
      id: 2,
      desktop: "/images/web banner2.webp",
      mobile: "/images/mobile_banner2.webp",
    },
    {
      id: 3,
      desktop: "/images/web banner3.webp",
      mobile: "/images/mobile_banner3.webp",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [statCounts, setStatCounts] = useState(heroStats.map(() => 0));
  const statsRef = useRef<HTMLElement | null>(null);

  /* ---------------- AUTO SLIDE ---------------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const statsElement = statsRef.current;
    if (!statsElement) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setStatCounts(heroStats.map((stat) => stat.target));
      return;
    }

    let frame = 0;
    const duration = 1400;

    const animateStats = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setStatCounts(heroStats.map((stat) => Math.round(stat.target * eased)));

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          statsElement.classList.add("stats-active");
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(statsElement);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="w-full">
      {/* ================= HERO BANNER SLIDER ================= */}
      <section className="hero-banner relative overflow-hidden bg-charcoal">
        {/* SLIDE */}
        <div key={current} className="absolute inset-0">
          <picture>
            {/* MOBILE IMAGE */}
            <source
              media="(max-width: 768px)"
              srcSet={banners[current].mobile}
            />

            {/* DESKTOP IMAGE */}
            <ImageWithFallback
              src={banners[current].desktop}
              alt="Hero Banner"
              className="
                w-full
                h-auto md:h-full
                object-contain md:object-cover
              "
            />
          </picture>

          {/* Overlay */}

        </div>

        {/* LEFT ARROW */}
        <button
          onClick={() =>
            setCurrent(current === 0 ? banners.length - 1 : current - 1)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gold/80 hover:bg-gold p-3 rounded-full"
        >
          <ArrowLeft className="text-black" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => setCurrent((current + 1) % banners.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gold/80 hover:bg-gold p-3 rounded-full"

        >
          <ArrowRight className="text-black" />
        </button>
      </section>
      <section className="home-about-intro" data-reveal><div className="heritage-shell"><div className="home-about-media"><Image src="/images/Ourstory.webp" alt="Maharaj Soaps Industries" fill sizes="(max-width: 900px) 100vw, 42vw" /></div><article><span>ABOUT MAHARAJ SOAPS</span><h2 className="text-center mb-5">Clean living begins at home</h2><p>At Maharaj Soaps Industries, we believe that clean living begins at home. Since the year 2000, we have been dedicated to crafting dependable and high-quality home care solutions that families can trust every day. From detergent soaps and washing powders to liquid detergents, dish wash bars, and phenyls, each product is thoughtfully developed to deliver effective cleanliness with care.</p><p>Our products are manufactured under trusted brands such as <strong>Shashi</strong> and <strong>Savaal</strong>, reflecting our commitment to quality, consistency, and performance. What began as a focused manufacturing effort has grown into a purpose-driven organization serving thousands of households with reliable hygiene solutions.</p><a href="/about">View More</a></article></div></section>


      {/* ================= STATS ================= */}
      <section ref={statsRef} className="stats-section py-16 sm:py-20 ">
        <div className="max-w-7xl mx-auto px-4 flex justify-between gap-6">
          {heroStats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon"><stat.Icon /></div>
              <div className="stat-text">
                <div className="stat-value">{statCounts[i]}{stat.suffix}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
