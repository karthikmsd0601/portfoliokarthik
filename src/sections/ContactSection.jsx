import AnimatedSection from '../components/common/AnimatedSection'
import SectionHeading from '../components/common/SectionHeading'
import ContactLink from '../components/common/ContactLink'
import ContactForm from '../components/contact/ContactForm'
import { EmailIcon, LocationIcon, BehanceIcon, ResumeIcon } from '../assets/icons/ContactIcons'
import './ContactSection.css'

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <SectionHeading className="contact-section__heading">Contact</SectionHeading>

        <div className="contact-section__grid">
          <AnimatedSection as="div" className="contact-info">
            <span className="contact-info__pill">Available for Work</span>

            <h3 className="contact-info__title">
              Let&apos;s Work
              <br />
              Together
            </h3>

            <p className="contact-info__paragraph">
              I&apos;m seeking a full-time UI/UX
              <br />
              &amp; Graphic Designer role to
              <br />
              create meaningful digital
              <br />
              experiences and impactful
              <br />
              designs.
            </p>

            <div className="contact-info__links">
              <ContactLink icon={<EmailIcon />} href="mailto:karthikmsd0601@gmail.com">
                karthikmsd0601@gmail.com
              </ContactLink>
              <ContactLink
                icon={<LocationIcon />}
                href="https://www.google.com/maps/search/?api=1&query=Coimbatore%2C%20India"
                external
              >
                Coimbatore, India
              </ContactLink>
              <ContactLink icon={<BehanceIcon />} href="https://www.behance.net/karthikm95" external>
                Behance
              </ContactLink>
              <ContactLink icon={<ResumeIcon />} href="/resume.pdf" external>
                Resume
              </ContactLink>
            </div>
          </AnimatedSection>

          <AnimatedSection as="div" delay={0.1}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
