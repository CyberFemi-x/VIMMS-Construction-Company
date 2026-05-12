import "./contact.css"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

function Contact() {
    const form = useRef()
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE,
            import.meta.env.VITE_EMAILJS_TEMPLATE,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC
        )
        .then(() => {
            alert("Message sent successfully!")
            e.target.reset()
        })
        .catch((error) => {
            console.log(error)
            alert("Failed to send message")
        })
        .finally(() => {
            setLoading(false)
        })
    }

    return (
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

                    {/* CONTACT INFO */}
                    <div>
                        {[
                            { label: "Phone", val: "+234 810 70 413 72" },
                            { label: "Email", val: "vimssconstructionandengineerin@gmail.com" },
                            { label: "Address", val: "12A Glorious Estate, Eleshin Bus Stop, Elepe, Ikorodu, Lagos State" },
                            { label: "Hours", val: "Mon – Sat: 7am – 6pm" },
                            { label: "RC No:", val: "8608079" },
                        ].map((c) => (
                            <div key={c.label} className="contact-row">
                                <span className="contact-label">{c.label}</span>
                                <span className="contact-val">{c.val}</span>
                            </div>
                        ))}
                    </div>

                    {/* FORM */}
                    <form ref={form} className="form" onSubmit={sendEmail}>

                        <input
                            className="input"
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                        />

                        <input
                            className="input"
                            type="email"
                            name="user_email"
                            placeholder="Email Address"
                            required
                        />

                        <input
                            className="input"
                            type="text"
                            name="project_type"
                            placeholder="Project Type"
                            required
                        />

                        <textarea
                            className="textarea"
                            name="message"
                            placeholder="Tell us about your project..."
                            rows={4}
                            required
                        />

                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                    </form>

                </div>
            </section>
        </>
    )
}

export default Contact