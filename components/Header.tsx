"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Close, Menu, Moon, Sun } from "./icons";

type Theme = "light" | "dark";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Services", href: "#services" },
  { label: "Rates & Packages", href: "#rates" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("work");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -62%", threshold: [0.05, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
    try {
      localStorage.setItem("ninjatech-theme", nextTheme);
    } catch {
      // The theme still applies for this visit when storage is unavailable.
    }
  }

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="#work" className="brand" aria-label="NinjaTech Guys home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><span>N</span></span>
          <span className="brand-copy"><strong>NinjaTech</strong><small>Guys</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} className={active === href.slice(1) ? "active" : ""}>{label}</a>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-pressed={theme === "dark"}
          onClick={toggleTheme}
        >
          <span className="theme-icon theme-icon-sun"><Sun /></span>
          <span className="theme-icon theme-icon-moon"><Moon /></span>
        </button>

        <a href="#book-call" className="nav-cta">Book a Call <ArrowUpRight /></a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navItems.map(({ label, href }, index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{label}
            </a>
          ))}
          <a href="#book-call" className="mobile-cta" onClick={() => setOpen(false)}>Book a Call <ArrowUpRight /></a>
        </nav>
      </div>
    </header>
  );
}
