import './hero.css';
import { useState, useEffect } from "react";
import { NAV_LINKS } from '../constants/navLinks';

function Hero() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ── NAV ── */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        
        <span className="logo">
          <span className="logo-accent">VIMSS CONSTRUCTION COMPANY</span>
        </span>

        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-link"
            >
              {l}
            </a>
          ))}

          <a href="#contact" className="nav-cta">
            Get a Quote
          </a>
        </div>

        <button
          className="burger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="mobile-menu">

          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </a>

        </div>
      )}

      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-content">
          <p className="hero-eyebrow">Construction Excellence Since 2020</p>
          <h1 className="hero-title">
            We Build{" "}
            <span className="hero-accent">
              What <br />
              Lasts.
            </span>
          </h1>
          <p className="hero-sub">
            Premium construction services for commercial, industrial, and
            residential projects across Nigeria.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              View Our Work
            </a>
            <a href="#contact" className="btn-ghost">
              Start a Project →
            </a>
          </div>
        </div>

        {/* Diagonal accent block */}
        <div className="hero-accent-block" />
      </section>

    </>
  );
}

export default Hero;