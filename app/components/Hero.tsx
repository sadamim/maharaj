import { ArrowRight, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";

export function Hero() {
  /* ---------------- HERO BANNER SLIDES ---------------- */
  const banners = [
    {
      id: 1,
      desktop: "/images/web banner.webp",
      mobile: "/images/mobile_banner.webp",
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

  /* ---------------- AUTO SLIDE ---------------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
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

      {/* ================= STATS ================= */}
      <section className="stats-section py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 flex justify-between gap-6">
          {[
            { value: "100%", label: "Natural Ingredients" },
            { value: "25+", label: "Soap Varieties" },
            { value: "50K+", label: "Happy Customers" },
          ].map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
