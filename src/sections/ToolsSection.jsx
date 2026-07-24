import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import SectionHeading from '../components/common/SectionHeading'
import { tools } from '../data/tools'
import './ToolsSection.css'

function ToolList({ ariaHidden = false }) {
  return (
    <div className="tools__list" aria-hidden={ariaHidden || undefined}>
      {tools.map((tool) => (
        <div className="tools__item" key={tool.id}>
          <tool.Logo className="tools__logo" />
          <span className="tools__name">{tool.name}</span>
        </div>
      ))}
    </div>
  )
}

export default function ToolsSection() {
  const shouldReduceMotion = useReducedMotion()
  const trackRef = useRef(null)

  useEffect(() => {
    const onVisibility = () => {
      const track = trackRef.current
      if (!track) return
      track.style.animationPlayState = document.hidden ? 'paused' : 'running'
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  return (
    <section id="tools" className="tools">
      <div className="container">
        <SectionHeading className="tools__heading">Tools</SectionHeading>
      </div>

      {shouldReduceMotion ? (
        <div className="tools__static container">
          <ToolList />
        </div>
      ) : (
        <div className="tools__marquee" aria-label="Design tools used">
          <div className="tools__track" ref={trackRef}>
            <ToolList />
            <ToolList ariaHidden />
          </div>
        </div>
      )}
    </section>
  )
}
