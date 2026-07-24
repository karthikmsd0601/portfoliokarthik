import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from '../components/common/SectionHeading'
import pointingPerson from '../assets/images/about/pointing-person.webp'
import './AboutSection.css'

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeading className="about__heading">About Me</SectionHeading>

        <div className="about__content">
          <motion.div
            className="about__image-wrap"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={pointingPerson}
              alt="Illustrated portrait of Karthik pointing toward the about text"
              className="about__image"
              width={782}
              height={873}
              loading="lazy"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: [0, -14, 0] }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }
            />
          </motion.div>

          <motion.p
            className="about__text"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I&apos;m Karthik, a UI/UX Designer with a background in Graphic
            Design. I create intuitive, user-centered digital experiences that
            combine thoughtful problem-solving with clean and engaging visual
            design. I enjoy simplifying complex ideas into functional
            interfaces that are easy to understand and enjoyable to use. My
            approach focuses on understanding user needs, solving real
            problems, and creating meaningful experiences through design.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
