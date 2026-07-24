import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      aria-label={`View ${project.title} case study on Behance (opens in a new tab)`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
    >
      <motion.img
        src={project.image}
        alt={project.alt}
        className="project-card__image"
        width={535}
        height={408}
        loading={index < 2 ? 'eager' : 'lazy'}
        variants={{ hover: { scale: 1.03 } }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.a>
  )
}
