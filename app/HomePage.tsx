"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Award, Heart, Leaf, Quote, Sparkles, Star, X, ZoomIn } from "lucide-react";
import { Hero } from "./components/Hero";
import { Ingredients } from "./components/Ingredients";
import { blogPosts } from "./content/blogPosts";

const blogs = blogPosts.map((post) => ({
    id: post.slug,
    title: post.title,
    category: "BLOG",
    description: post.metaDescription,
    image: post.image,
    link: `/news/blog/${post.slug}`,
}));
const features = [[Leaf, "Pure & Natural", "Carefully selected ingredients for everyday Indian homes."], [Award, "Handcrafted Quality", "Traditional care supported by modern manufacturing precision."], [Heart, "Cruelty-Free", "Responsible care for families, communities and our shared world."], [Sparkles, "Luxury Experience", "Rich lather and comforting fragrance in every wash."]];
const products = [
    ["SHASHI", "Fabric care", "Pink M-Lore Detergent Cake", "/images/SHASHI PIKK DEETERGENT CAKE.webp"], ["SHASHI", "Fabric care", "Arya Blue Detergent Cake", "/images/SHASHI ARYA BLUE.webp"], ["SHASHI", "Fabric care", "Triple Action Powder", "/images/SHASHI TRIPLE ACTION.webp"], ["SHASHI", "Bath care", "Papaya Beauty Soap", "/images/SHASHI PAPAYA BEAUTY SOAP (4PC JAR).webp"],
    ["SAVAAL", "Fabric care", "Gold Washing Powder", "/images/SAVAAL_GOLD_WASHING_POWDER.webp"], ["SAVAAL", "Dish care", "Oxydol Dishwash Gel", "/images/SAVAAL_OXYDOL_DISHWASH_GEL.webp"], ["SAVAAL", "Home care", "Captain Floor Cleaner", "/images/SAVAAL_CAPTAIN_FLOOR_CLEANER.webp"]];
const reviews = [
    ["I started using Maharaj soaps after my kids developed skin sensitivity. Five years later, we still haven’t switched. The soaps feel gentle, smell natural, and give me peace of mind every day.", "Anita Sharma", "Homemaker, Bengaluru"],
    ["After long workdays, I look for products that are simple and effective. Maharaj’s herbal soaps do exactly that — no harsh feel, no overpowering fragrance, just clean and refreshing.", "Rahul Verma", "Working Professional"],
    ["I’m very particular about what touches my skin. Maharaj soaps leave my skin feeling fresh and hydrated without dryness. It’s become a small but important part of my daily routine.", "Sneha Joshi", "Fitness Enthusiast"],
    ["We introduced Maharaj soaps across our hotel properties, and guests noticed the change immediately. The feedback has been genuinely positive, especially about fragrance and skin comfort.", "Arjun Patel", "Hospitality Business Owner"],
    ["From elders to kids, everyone at home uses Maharaj soap. It feels reassuring to use a product that’s affordable, reliable, and proudly made in India.", "Meena Kaur", "Mother & Homemaker"],
];
const gallery = ["g8.webp", "g12.webp", "g9.webp", "g13.webp", "g10.webp", "g15.webp"];

function initials(name: string) {
    return name
        .split(" ")
        .filter(Boolean)
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}

function ProductSection() {
    return (
        <section className="heritage-section product-area" data-reveal>
            <div className="heritage-shell">
                <header className="section-title">
                    <span>PREMIUM HOME-CARE ESSENTIALS</span>
                    <h2>Carefully curated products for every home.</h2>
                    <p>Discover trusted Maharaj essentials across detergent, dishcare, and bath categories.</p>
                </header>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {products.map(([brand, category, title, image]) => (
                        <article key={title} className="group overflow-hidden rounded-[28px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-2">
                            <div className="relative aspect-[4/3] overflow-hidden bg-[#eef5fb]">
                                <Image src={image} alt={title} fill className="object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="p-6">
                                <span className="inline-flex items-center rounded-full bg-[#e2eef8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2f6081]">
                                    {brand}
                                </span>
                                <h3 className="mt-4 text-lg font-semibold text-[#2e1c18]">{title}</h3>
                                <p className="mt-2 text-sm text-[#6d5b53]">{category}</p>
                                <a href="/brands" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#2f6081] transition-colors hover:text-[#1d3a4d]">
                                    View Product <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-12 text-center ">
                    <a href="/brands" className="inline-flex items-center justify-center rounded-full bg-[#dce9f5] px-8 py-3 text-sm font-semibold text-[#24485e] transition hover:bg-[#c3daed]">
                        View All Products
                    </a>
                </div>
            </div>
        </section>
    );
}

export default function HomePage() {
    const [light, setLight] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            }),
            { threshold: 0.12 }
        );

        document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return <>
        <Hero />
        <section className="heritage-section why-area" data-reveal>
            <div className="heritage-shell">
                <header className="section-title">
                    <span>WHY MAHARAJA</span>
                    <h2>Care in every bar. Trust in every home.</h2>
                    <p>Rooted in Karnataka and raised on family values, we make products that work hard while staying gentle.</p>
                </header>
                <div className="why-grid">
                    {features.map(([Icon, title, description], index) => (
                        <article key={String(title)}>
                            <div className="why-icon">
                                <svg className="" width="0" height="0" aria-hidden="true" focusable="false">
                                    <linearGradient id={`why-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#24485e" />
                                        <stop offset="100%" stopColor="#7fb0cc" />
                                    </linearGradient>
                                </svg>
                                <Icon style={{ stroke: `url(#why-gradient-${index})` }} />
                            </div>
                            <h3>{title as string}</h3>
                            <p>{description as string}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
        <Ingredients />
        {/* <ProductSection /> */}
        <section className="testimonial-section" data-reveal>
            <div className="heritage-shell">
                <header className="section-title center">
                    <span>WHAT OUR CUSTOMERS SAY</span>
                    <h2>Loved in homes, across generations.</h2>
                    <p>Real experiences from families and businesses who trust Maharaja every day.</p>
                </header>

                <div className="testimonial-summary">
                    <div className="stars">{[1, 2, 3, 4, 5].map((x) => <Star key={x} />)}</div>
                    <span>5.0 rating &middot; {reviews.length}+ verified stories</span>
                </div>
            </div>

            <div className="testimonial-marquee">
                <div className="testimonial-track">
                    {[...reviews, ...reviews].map(([quote, name, role], i) => (
                        <article className="testimonial-tile" key={i}>
                            <Quote className="testimonial-tile-icon" aria-hidden="true" />
                            <blockquote>{quote}</blockquote>
                            <div className="testimonial-person">
                                <div className="testimonial-avatar">{initials(name)}</div>
                                <div>
                                    <b>{name}</b>
                                    <small>{role}</small>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
 
        <section className="heritage-section gallery-area" data-reveal>
    <div className="heritage-shell">

        {/* Gallery */}
        <header className="section-title">
            <span>INSIDE MAHARAJA</span>
            <h2>Made close to home.</h2>
        </header>

        <div className="new-gallery">
            {gallery.map((image, index) => (
                <button
                    className={`g${index}`}
                    key={image}
                    onClick={() => setLight(`/images/${image}`)}
                >
                    <Image
                        src={`/images/${image}`}
                        alt="Maharaja gallery"
                        fill
                        loading="lazy"
                        sizes="40vw"
                    />

                    <i>
                        <ZoomIn /> View
                    </i>
                </button>
            ))}
        </div>


        {/* Dynamic Blogs Section */}
        <div className="blogs-area">
            <header className="section-title">
                <span>FROM MAHARAJA</span>
                <h2>Stories from our journey.</h2>
            </header>

            <div className="blogs-grid">
                {blogs.map((blog) => (
                    <article className="blog-card" key={blog.id}>

                        <div className="blog-image">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        <div className="blog-content">
                            <span className="blog-category">
                                {blog.category}
                            </span>

                            <h3>{blog.title}</h3>

                            <p>{blog.description}</p>

                            <a href={blog.link}>
                                Read Story →
                            </a>
                        </div>

                    </article>
                ))}
            </div>
        </div>

    </div>
</section>

        {light && (
            <div className="new-lightbox" onClick={() => setLight(null)}>
                <button><X /></button>
                <div><Image src={light} alt="Gallery preview" fill sizes="90vw" /></div>
            </div>
        )}
    </>;
}
