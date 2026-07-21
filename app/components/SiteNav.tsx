"use client";

import Link from "next/link";
import { useState } from "react";
import { List, X, Phone } from "@phosphor-icons/react";

const navLinks = [
  { label: "About",        href: "/about" },
  { label: "Pricing",      href: "/pricing" },
  { label: "Resources",    href: "/resources" },
];

const PHONE = "(559) 349-6165";
const PHONE_HREF = "tel:+151****0100";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // The homepage hero is now a light editorial layout, so the header is always
  // solid. (Previously it was transparent over a full-bleed video hero.)
  const showSolid = true;

  return (
    <header
      className="w-full transition-colors duration-300"
      style={{
        backgroundColor: showSolid ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: showSolid ? "blur(8px)" : "none",
        borderBottom: showSolid ? "1px solid #E4DDD5" : "1px solid transparent",
      }}
      data-scrolled={showSolid}
    >
      <div className="page-container">
        <div className="flex h-[72px] items-center justify-between gap-6">

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="shrink-0"
            aria-label="Leads for Liberty — Home"
          >
            <span
              data-logo-wordmark
              aria-hidden="true"
              style={{
                display: "block",
                width: "104px",
                height: "52px",
                maxWidth: "42vw",
                backgroundColor: "var(--color-navy)",
                WebkitMaskImage: "url(/logo.png)",
                maskImage: "url(/logo.png)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "left center",
                maskPosition: "left center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
          </Link>

          {/* ── Desktop Nav (centered) ────────────────────────────────────── */}
          <nav
            className="hidden md:flex items-center gap-1 flex-1 justify-center"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body nav-link px-3 py-2 text-sm font-medium no-underline rounded-[6px] transition-colors duration-150"
                style={{ color: showSolid ? "var(--color-navy)" : "var(--color-linen)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop Right ──────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href={PHONE_HREF}
              className="font-body nav-phone flex items-center gap-1.5 text-sm whitespace-nowrap no-underline transition-colors duration-300"
              style={{ color: showSolid ? "var(--color-warm-gray)" : "rgba(250,248,245,0.82)" }}
            >
              <Phone size={15} weight="regular" aria-hidden="true" />
              {PHONE}
            </a>
            <Link href="/book" className="btn-primary" style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}>
              Book a call
            </Link>
          </div>

          {/* ── Mobile Hamburger ─────────────────────────────────────────── */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-[6px] transition-colors focus-visible:outline-none"
            style={{ color: showSolid ? "var(--color-navy)" : "var(--color-linen)" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen
              ? <X size={22} weight="bold" aria-hidden="true" />
              : <List size={22} weight="bold" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ────────────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        className="mobile-menu md:hidden"
        data-open={menuOpen}
        aria-hidden={!menuOpen}
        style={{
          background: "#ffffff",
          borderTop: "1px solid #E4DDD5",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div>
          <nav className="px-4 pb-5 pt-2 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body nav-link px-3 py-3 text-base font-medium text-navy no-underline rounded-[6px] transition-colors duration-150"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div
              className="mt-3 pt-4 flex flex-col gap-3"
              style={{ borderTop: "1px solid #E4DDD5" }}
            >
              <a
                href={PHONE_HREF}
                className="font-body px-3 flex items-center gap-2 text-sm font-medium text-warm-gray no-underline"
              >
                <Phone size={15} weight="regular" aria-hidden="true" />
                {PHONE}
              </a>
              <Link
                href="/book"
                className="btn-primary text-center justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Book a call
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
