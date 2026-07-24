import { motion, useReducedMotion } from 'framer-motion'
import portrait from '../assets/images/hero/portrait.webp'
import './HeroSection.css'

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <motion.p
          className="hero__statement"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Creating intuitive digital
          <br />
          experiences through
          <br />
          strategic UI/UX Designer
          <br />
          &amp; Graphic Designer
        </motion.p>

        <motion.div
          className="hero__portrait-wrap"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={portrait}
            alt="Karthik, UI/UX Designer and Graphic Designer, portrait"
            className="hero__portrait"
            width={1022}
            height={1033}
            loading="eager"
            {...{ fetchpriority: 'high' }}
          />
        </motion.div>

        <motion.p
          className="hero__description"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          I create user-centered digital
          <br />
          experiences and impactful visual
          <br />
          designs that balance usability, clarity,
          <br />
          and visual appeal.
        </motion.p>
      </div>
    </section>
  )
}
