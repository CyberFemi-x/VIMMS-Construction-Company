import "./contact.css"
function Contact (){
    return(

        <>
                        {/* ── CTA BAND ── */}
            <section className="cta-band">
                <h2 className="cta-title">Ready to Build Something Great?</h2>
                <p className="cta-sub">
                Tell us about your project and we'll get back within 24 hours.
                </p>
                <a href="#contact" className="btn-primary">
                Request a Free Consultation
                </a>
            </section>

            {/* ── CONTACT ── */}
            <section id="contact" className="section" style={{ background: "#111" }}>
                <div className="section-header">
                <p className="section-eyebrow">Get In Touch</p>
                <h2 className="section-title">Let's Talk</h2>
                </div>
                <div className="contact-grid">
                <div>
                    {[
                    { label: "Phone", val: "+234 801 234 5678" },
                    { label: "Email", val: "hello@buildstrong.ng" },
                    { label: "Address", val: "14 Bourdillon Rd, Ikoyi, Lagos" },
                    { label: "Hours", val: "Mon – Sat: 7am – 6pm" },
                    ].map((c) => (
                    <div key={c.label} className="contact-row">
                        <span className="contact-label">{c.label}</span>
                        <span className="contact-val">{c.val}</span>
                    </div>
                    ))}
                </div>
                <form className="form" onSubmit={(e) => e.preventDefault()}>
                    <input className="input" placeholder="Your Name" />
                    <input className="input" placeholder="Email Address" />
                    <input className="input" placeholder="Project Type" />
                    <textarea className="textarea" placeholder="Tell us about your project..." rows={4} />
                    <button type="submit" className="btn-primary">
                    Send Message
                    </button>
                </form>
                </div>
            </section>


        </>
    )

}
export default Contact 