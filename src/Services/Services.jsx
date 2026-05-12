import "./services.css"
import { SERVICES } from "../constants/services"

function Services (){

    return (
        <>
            {/* ── SERVICES ── */}
            <section id="services" className="section" style={{ background: "#111" }}>
                <div className="section-header">
                <p className="section-eyebrow">What We Do</p>
                <h2 className="section-title">Our Core Services</h2>
                </div>
                <div className="services-grid">
                {SERVICES.map((s, i) => (
                <div key={i} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <span className="service-arrow">→</span>
                </div>
                    ))}
                </div>
            </section>
  
        </>      
    )
}
export default Services