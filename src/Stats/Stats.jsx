import './stats.css';
import { STATS } from '../constants/stats';

function Stats() {

  return (
    <>
       {/* ── STATS BAR ── */}
      <section className="stats-bar">
        {STATS.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section">
        <div className="about-grid">
          <div className="about-img-block">
            <div className="about-img-inner">
              <div className="about-img-pattern" />
              <span className="about-img-label">EST. 2020</span>
            </div>
          </div>
          <div className="about-text">
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="section-title">
              Built on Trust,<br />Driven by Precision
            </h2>
            <p className="body">
              VIMSS Construction has been transforming the Nigerian construction
              landscape for over 6 years. We combine world-class engineering
              expertise with deep local knowledge to deliver structures that
              define skylines and stand the test of time.
            </p>
            <p className="body">
              From groundbreaking to ribbon-cutting, our team of certified
              engineers and skilled tradespeople maintain uncompromising
              standards at every stage of the build.
            </p>
            <div className="about-features">
              {["ISO 9001 Certified", "COREN Registered", "Safety First Culture"].map((f) => (
                <div key={f} className="feature">
                  <span className="feature-dot" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Stats;