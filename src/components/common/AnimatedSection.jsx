import { motion } from 'framer-motion'

const motionTags = { div: motion.div, article: motion.article, ul: motion.ul, li: motion.li }

export default function AnimatedSection({
  as = motion.div,
  children,
  delay = 0,
  className,
  y = 20,
  ...rest
}) {
  const Component = typeof as === 'string' ? motionTags[as] ?? motion.div : as
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  )
}
