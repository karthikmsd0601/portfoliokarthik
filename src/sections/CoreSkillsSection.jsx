import { motion } from 'framer-motion'
import SectionHeading from '../components/common/SectionHeading'
import SkillItem from '../components/skills/SkillItem'
import { skills } from '../data/skills'
import './CoreSkillsSection.css'

export default function CoreSkillsSection() {
  return (
    <section id="skills" className="core-skills">
      <div className="container">
        <SectionHeading className="core-skills__heading">Core Skills</SectionHeading>

        <div className="core-skills__row">
          <motion.div
            className="core-skills__connector"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
          {skills.map((skill, index) => (
            <SkillItem key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
