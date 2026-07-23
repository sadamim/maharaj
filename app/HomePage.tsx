"use client";
import Image from "next/image";
import { useEffect,useState } from "react";
import { ArrowLeft,ArrowRight,Award,Heart,Leaf,Sparkles,Star,X,ZoomIn } from "lucide-react";
import { Hero } from "./components/Hero";
import { Ingredients } from "./components/Ingredients";

const features=[[Leaf,"Pure & Natural","Carefully selected ingredients for everyday Indian homes."],[Award,"Handcrafted Quality","Traditional care supported by modern manufacturing precision."],[Heart,"Cruelty-Free","Responsible care for families, communities and our shared world."],[Sparkles,"Luxury Experience","Rich lather and comforting fragrance in every wash."]];
const products=[
 ["SHASHI","Fabric care","Pink M-Lore Detergent Cake","/images/SHASHI PIKK DEETERGENT CAKE.webp"],["SHASHI","Fabric care","Arya Blue Detergent Cake","/images/SHASHI ARYA BLUE.webp"],["SHASHI","Fabric care","Triple Action Powder","/images/SHASHI TRIPLE ACTION.webp"],["SHASHI","Bath care","Papaya Beauty Soap","/images/SHASHI PAPAYA BEAUTY SOAP (4PC JAR).webp"],
 ["SAVAAL","Fabric care","Gold Washing Powder","/images/SAVAAL_GOLD_WASHING_POWDER.webp"],["SAVAAL","Dish care","Oxydol Dishwash Gel","/images/SAVAAL_OXYDOL_DISHWASH_GEL.webp"],["SAVAAL","Home care","Captain Floor Cleaner","/images/SAVAAL_CAPTAIN_FLOOR_CLEANER.webp"]];
const reviews=[["It is the dependable quality you notice every day — rich lather, a gentle fragrance and a clean that feels reassuring for the whole family.","Anita Sharma","Homemaker, Bengaluru"],["Maharaja products are honest, effective and always feel made with Indian families in mind.","Meena Kaur","Mother & homemaker"],["The consistency and service make Maharaja a partner we can genuinely rely on.","Arjun Patel","Hospitality business owner"]];
const gallery=["g8.webp","g12.webp","g9.webp","g13.webp","g10.webp","g15.webp"];

export default function HomePage(){const[tab,setTab]=useState("ALL"),[review,setReview]=useState(0),[light,setLight]=useState<string|null>(null);useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");o.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll("[data-reveal]").forEach(e=>o.observe(e));return()=>o.disconnect()},[]);useEffect(()=>{const t=setInterval(()=>setReview(v=>(v+1)%reviews.length),7000);return()=>clearInterval(t)},[]);return <>
 <Hero />
 <section className="heritage-section" data-reveal><div className="heritage-shell"><header className="section-title"><span>WHY MAHARAJA</span><h2>Care in every bar. Trust in every home.</h2><p>Rooted in Karnataka and raised on family values, we make products that work hard while staying gentle.</p></header><div className="why-grid">{features.map(([Icon,t,d],i)=><article key={String(t)}><Icon/><small>0{i+1}</small><h3>{t as string}</h3><p>{d as string}</p></article>)}</div></div></section>
 <Ingredients />
 <section className="review-area" data-reveal><div className="heritage-shell"><header><span>WHAT OUR CUSTOMERS SAY</span><h2>Loved in homes, across generations.</h2><div className="stars">{[1,2,3,4,5].map(x=><Star key={x}/>)}</div></header><article className="review-card"><blockquote>“{reviews[review][0]}”</blockquote><footer><div><b>{reviews[review][1]}</b><small>{reviews[review][2]}</small></div><nav><button onClick={()=>setReview((review+reviews.length-1)%reviews.length)}><ArrowLeft/></button><span>{review+1}/{reviews.length}</span><button onClick={()=>setReview((review+1)%reviews.length)}><ArrowRight/></button></nav></footer></article></div></section>
 <section className="heritage-section gallery-area" data-reveal><div className="heritage-shell"><header className="section-title"><span>INSIDE MAHARAJA</span><h2>Made close to home.</h2></header><div className="new-gallery">{gallery.map((g,i)=><button className={`g${i}`} key={g} onClick={()=>setLight(`/images/${g}`)}><Image src={`/images/${g}`} alt="Maharaja gallery" fill loading="lazy" sizes="40vw"/><i><ZoomIn/> View</i></button>)}</div></div></section>
 {light&&<div className="new-lightbox" onClick={()=>setLight(null)}><button><X/></button><div><Image src={light} alt="Gallery preview" fill sizes="90vw"/></div></div>}
 </>}
