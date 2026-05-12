import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero/Hero.jsx'
import Stats from './Stats/Stats.jsx';
import Services from './Services/Services.jsx';
import Projects from './Projects/Projects.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Stats />
    <Services />
    <Projects/>
  </StrictMode>,
)
