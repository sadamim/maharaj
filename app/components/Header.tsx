"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { EnquiryModal } from "./EnquiryModal";

const LINKS: [string, string][] = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Products", "/brands"],
  ["Quality Assurance", "/quality-assurance"],
  ["Distributors", "/distributors"],
  ["Blogs", "/news"],
  ["Career", "/career"],
  ["Contact", "/contact"],
];

const BRAND_LINKS: [string, string][] = [
  ["SHASHI", "/brands/shashi"],
  ["SAVAAL", "/brands/savaal"],
  ["SHASHI+", "/brands/shashi-plus"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [enquiry, setEnquiry] = useState(false);

  useEffect(() => {
    const f = () => setScroll(scrollY > 50);
    f();
    addEventListener("scroll", f);
    return () => removeEventListener("scroll", f);
  }, []);

  const close = () => setOpen(false);

  const openEnquiry = () => {
    setOpen(false);
    setEnquiry(true);
  };

  return (
    <header className={`site-nav ${scroll ? "scrolled" : ""} ${open ? "open" : ""}`}>
      <div className="site-nav-inner">
        <Link href="/" className="site-nav-logo" aria-label="Maharaja Soaps home" onClick={close}>
          <Image src="/images/Maharaja_logo.webp" alt="Maharaja Soaps" width={92} height={76} />
        </Link>

        <nav className="site-nav-links">
          {LINKS.map(([label, href]) =>
            label === "Products" ? (
              <div className="site-nav-dropdown" key={href}>
                <Link href={href} onClick={close} className="site-nav-dropdown-trigger">
                  {label}
                  <ChevronDown className="site-nav-caret" aria-hidden="true" />
                </Link>
                <div className="site-nav-dropdown-panel">
                  {BRAND_LINKS.map(([brandLabel, brandHref]) => (
                    <Link href={brandHref} key={brandHref} onClick={close}>
                      {brandLabel}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link href={href} key={href} onClick={close}>{label}</Link>
            )
          )}
        </nav>

        <div className="site-nav-actions">
          <button type="button" className="site-nav-cta" onClick={openEnquiry}>
            Enquiry
          </button>
          <button onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <EnquiryModal open={enquiry} onClose={() => setEnquiry(false)} />
    </header>
  );
}
