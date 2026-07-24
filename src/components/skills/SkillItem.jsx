import { motion } from 'framer-motion'
import './SkillItem.css'

export default function SkillItem({ skill, index }) {
  const { title, description, Icon, treatment } = skill

  return (
    <motion.div
      className="skill-item"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="skill-item__stem-top" aria-hidden="true" />
      <motion.div
        className={`skill-item__node skill-item__node--${treatment}`}
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.35, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <Icon className="skill-item__icon" />
      </motion.div>
      <div className="skill-item__stem-bottom" aria-hidden="true" />

      <motion.div
        className="skill-item__card"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, delay: index * 0.08 + 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="skill-item__title">{title}</h3>
        <p className="skill-item__description">{description}</p>
      </motion.div>
    </motion.div>
  )
}
