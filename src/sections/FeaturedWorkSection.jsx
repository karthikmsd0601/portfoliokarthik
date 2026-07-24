import AnimatedSection from '../components/common/AnimatedSection'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/projects'
import './FeaturedWorkSection.css'

export default function FeaturedWorkSection() {
  return (
    <section id="work" className="featured-work">
      <div className="container">
        <AnimatedSection as="div" className="featured-work__header">
          <h2 className="featured-work__title">Featured Work</h2>
          <a
            className="featured-work__view-all"
            href="https://www.behance.net/karthikm95"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all works on Behance (opens in a new tab)"
          >
            View All Works <span aria-hidden="true">&rarr;</span>
          </a>
        </AnimatedSection>

        <div className="featured-work__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
