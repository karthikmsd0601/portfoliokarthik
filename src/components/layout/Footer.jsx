import AnimatedSection from '../common/AnimatedSection'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__container">
        <AnimatedSection as="div" className="site-footer__panel">
          <p className="site-footer__brand">K A R T H I K</p>
          <p className="site-footer__role">UI/UX Designer &amp; Graphic Designer</p>
          <p className="site-footer__tagline">
            Passionate about designing user-centered products and
            <br />
            impactful brand visuals.
          </p>
        </AnimatedSection>
      </div>
    </footer>
  )
}
