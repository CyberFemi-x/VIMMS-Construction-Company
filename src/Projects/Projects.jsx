import './projects.css'
import { PROJECTS } from '../constants/projects,'

function Projects (){

    return (

        <>
            {/* ── PROJECTS ── */}
            <section id="projects" className="section">
                <div className="section-header">
                <p className="section-eyebrow">Portfolio</p>
                <h2 className="section-title">Recent Projects</h2>
                </div>
                <div className="projects-grid">
                {PROJECTS.map((p, i) => (
                    <div key={i} className="project-card">
                    <div className="project-img">
                        <div className="project-img-fill" />
                    </div>
                    <div className="project-info">
                        <span className="project-tag">{p.tag}</span>
                        <span className="project-year">{p.year}</span>
                    </div>
                    <h3 className="project-title">{p.title}</h3>
                    </div>
                ))}
                </div>
            </section>        
        </>

    )
}

export default Projects