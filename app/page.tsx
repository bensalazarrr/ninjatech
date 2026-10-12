import Image from "next/image";
import { Header } from "@/components/Header";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code,
  Compass,
  Facebook,
  Layers,
  Mail,
  PenTool,
} from "@/components/icons";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description: "High-performance digital storefronts engineered for conversion, clarity, and lasting brand authority.",
    icon: Code,
  },
  {
    number: "02",
    title: "Custom Web Apps",
    description: "Scalable, purpose-built solutions developed from the ground up to solve complex business challenges.",
    icon: Layers,
  },
  {
    number: "03",
    title: "UI/UX Design",
    description: "Thoughtful design systems that balance intuitive user experiences with strong technical performance.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Technology Consulting",
    description: "Practical guidance on architecture, stack selection, and long-term technical scalability.",
    icon: Compass,
  },
];

const stack = [
  { number: "01", title: "Frontend", description: "Accessible interfaces with clean, responsive interaction.", items: ["React", "Tailwind CSS"] },
  { number: "02", title: "Backend & Data", description: "Reliable application logic and well-structured data layers.", items: ["Node.js", "Prisma", "GraphQL"] },
  { number: "03", title: "Platforms", description: "Flexible solutions for modern web and content-driven needs.", items: ["WordPress", "React Native"] },
  { number: "04", title: "Workflow", description: "Collaborative version control for dependable delivery.", items: ["Git"] },
];

const packages = [
  {
    title: "Business Website",
    label: "Focused presence",
    description: "For local businesses and teams that need a polished, responsive website built around clear goals.",
    features: ["Responsive page system", "Conversion-focused UI", "Contact or inquiry flow"],
  },
  {
    title: "Custom Web Application",
    label: "Most flexible",
    description: "For workflow, operations, or customer experiences that need a tailored application foundation.",
    features: ["Custom application scope", "Data and API architecture", "Scalable interface system"],
    popular: true,
  },
  {
    title: "Design & Consulting",
    label: "Strategic support",
    description: "For teams that need UI/UX direction, technology planning, or focused guidance before development.",
    features: ["UI/UX design direction", "Architecture consultation", "Technology recommendations"],
  },
];

const team = [
  {
    initials: "BS",
    name: "Benedict Salazar",
    role: "Lead Architect & Founder",
    email: "benedictsalazar64@gmail.com",
    facebook: "https://www.facebook.com/szzzz.beneddd/",
  },
  {
    initials: "MG",
    name: "Marc Angelo Gutierrez",
    role: "UX Strategist & Co-Founder",
    email: "marcangelogutierrez08@gmail.com",
    facebook: "https://www.facebook.com/marcangelo.gutierrez.1",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />

      <main id="main-content">
        <section id="work" className="hero section-anchor">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="container hero-grid">
            <Reveal className="hero-copy">
              <p className="eyebrow"><span /> Digital product studio · Valenzuela City</p>
              <h1><span>Turning ideas</span><span>into</span><em>powerful tech</em><span>solutions.</span></h1>
              <p className="hero-lede">
                NinjaTech Guys builds high-performance web applications and thoughtful digital experiences that help businesses move forward with clarity.
              </p>
              <div className="button-row">
                <a className="button button-dark" href="#book-call">Start a Project <ArrowUpRight /></a>
                <a className="button button-ghost" href="#projects">View Our Work <ArrowRight /></a>
              </div>
              <div className="hero-meta" aria-label="Studio highlights">
                <div><span>Focus</span><strong>Web Apps & Business Sites</strong></div>
                <div><span>Approach</span><strong>Design-led Engineering</strong></div>
              </div>
            </Reveal>

            <Reveal className="hero-panel" delay={0.12}>
              <div className="hero-panel-head">
                <span>Ways to work together</span>
                <span className="availability"><i /> Taking inquiries</span>
              </div>
              {packages.map((item, index) => (
                <a key={item.title} href="#rates" className="hero-service-row">
                  <span className="hero-service-number">0{index + 1}</span>
                  <span><strong>{item.title}</strong><small>{item.label}</small></span>
                  <ArrowUpRight />
                </a>
              ))}
              <div className="hero-panel-foot">
                <span>Every engagement begins with a conversation.</span>
                <a href="#book-call">Book a call <ArrowRight /></a>
              </div>
            </Reveal>
          </div>
          <div className="container scroll-cue" aria-hidden="true"><span>Scroll to explore</span><i /></div>
        </section>

        <section className="about-section section-pad">
          <div className="container">
            <Reveal className="section-intro section-intro-wide">
              <div>
                <p className="eyebrow"><span /> Developer overview</p>
                <h2>Two minds.<br />One clear vision.</h2>
              </div>
              <p>
                We bridge complex technology and practical business growth. Every custom web application and consulting engagement is grounded in precision, collaboration, and a shared commitment to better digital experiences.
              </p>
            </Reveal>

            <div className="team-grid">
              {team.map((member, index) => (
                <Reveal className="team-card" delay={index * 0.08} key={member.name}>
                  <div className="team-top">
                    <div className="avatar" aria-hidden="true"><span>{member.initials}</span></div>
                    <span className="team-index">0{index + 1}</span>
                  </div>
                  <div className="team-content">
                    <p>{member.role}</p>
                    <h3>{member.name}</h3>
                  </div>
                  <div className="team-links">
                    <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`} title={`Email ${member.name}`}><Mail /></a>
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on Facebook`} title={`${member.name} on Facebook`}><Facebook /></a>
                    <a className="team-email" href={`mailto:${member.email}`}>{member.email}</a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section section-pad section-anchor">
          <div className="container">
            <Reveal className="section-heading-row">
              <div>
                <p className="eyebrow eyebrow-light"><span /> Selected work</p>
                <h2>Featured projects.</h2>
              </div>
              <p>Existing work from the NinjaTech Guys portfolio, presented with a sharper focus on the challenge and experience.</p>
            </Reveal>

            <div className="project-list">
              <Reveal className="project-card">
                <a href="https://hdse.lol/" target="_blank" rel="noopener noreferrer" className="project-image" aria-label="Open HDS-E live project">
                  <Image src="/projects/hdse.png" fill sizes="(max-width: 900px) 100vw, 62vw" alt="HDS-E property management simulation sign-in screen" priority />
                  <span className="project-open"><ArrowUpRight /></span>
                </a>
                <div className="project-info">
                  <div className="project-number">01 / Web application</div>
                  <div>
                    <h3>HDS-E</h3>
                    <p>A property management simulation with an interactive interface designed to mirror real hotel front-desk operations.</p>
                  </div>
                  <a href="https://hdse.lol/" target="_blank" rel="noopener noreferrer">View live project <ArrowUpRight /></a>
                </div>
              </Reveal>

              <Reveal className="project-card project-card-reverse">
                <a href="https://sample-auto.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-image" aria-label="Open Sample Auto live project">
                  <Image src="/projects/sample-auto.png" fill sizes="(max-width: 900px) 100vw, 62vw" alt="Sample Auto business website homepage" />
                  <span className="project-open"><ArrowUpRight /></span>
                </a>
                <div className="project-info">
                  <div className="project-number">02 / Business website</div>
                  <div>
                    <h3>Sample Auto</h3>
                    <p>A custom business website concept built for a local automotive service business.</p>
                  </div>
                  <a href="https://sample-auto.vercel.app/" target="_blank" rel="noopener noreferrer">View live project <ArrowUpRight /></a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="tech-stack" className="stack-section section-pad section-anchor">
          <div className="container">
            <Reveal className="section-intro">
              <div>
                <p className="eyebrow"><span /> Tools & infrastructure</p>
                <h2>Our technology stack.</h2>
              </div>
              <p>Modern tools selected to support responsive interfaces, sound application architecture, and maintainable delivery.</p>
            </Reveal>
            <div className="stack-grid">
              {stack.map((category, index) => (
                <Reveal className="stack-card" delay={index * 0.06} key={category.title}>
                  <span className="stack-number">{category.number}</span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <div className="pill-list">
                    {category.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services-section section-pad section-anchor">
          <div className="container">
            <Reveal className="section-intro section-intro-wide">
              <div>
                <p className="eyebrow"><span /> Core expertise</p>
                <h2>From first idea to a product that works.</h2>
              </div>
              <div className="intro-aside">
                <p>Focused digital services for organizations that value both thoughtful design and dependable technology.</p>
                <a className="text-link" href="#book-call">Explore a project with us <ArrowRight /></a>
              </div>
            </Reveal>
            <div className="services-list">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal className="service-row" delay={index * 0.05} key={service.title}>
                    <span className="service-number">{service.number}</span>
                    <span className="service-icon"><Icon /></span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ArrowUpRight className="service-arrow" />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="rates" className="pricing-section section-pad section-anchor">
          <div className="container">
            <Reveal className="pricing-heading">
              <p className="eyebrow eyebrow-light"><span /> Rates & packages</p>
              <h2>A clear starting point.<br /><em>A scope built around you.</em></h2>
              <p>Official fixed rates are not published. Every package begins with a project review and a tailored quote.</p>
            </Reveal>
            <div className="pricing-grid">
              {packages.map((item, index) => (
                <Reveal className={`pricing-card ${item.popular ? "featured" : ""}`} delay={index * 0.08} key={item.title}>
                  {item.popular && <span className="popular-badge">Most flexible</span>}
                  <span className="package-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="quote-label">Request a quote</div>
                  <ul>
                    {item.features.map((feature) => <li key={feature}><Check />{feature}</li>)}
                  </ul>
                  <a className="pricing-button" href="#book-call">Start a conversation <ArrowRight /></a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="book-call" className="book-section section-pad section-anchor">
          <div className="container book-grid">
            <Reveal className="book-copy">
              <p className="eyebrow"><span /> Schedule a consultation</p>
              <h2>Tell us about your project.</h2>
              <p>Share what you are building, where you are in the process, and the outcome you need. We’ll use those details to start a focused conversation.</p>
              <div className="book-details">
                <span>Based in</span><strong>Valenzuela City</strong>
                <span>Best for</span><strong>Websites, apps & product strategy</strong>
              </div>
            </Reveal>
            <Reveal delay={0.1}><InquiryForm /></Reveal>
          </div>
        </section>

        <section id="contact" className="contact-section section-anchor">
          <div className="container">
            <Reveal className="contact-panel">
              <div className="contact-copy">
                <p className="eyebrow eyebrow-light"><span /> Get in touch</p>
                <h2>Let&apos;s work<br />together.</h2>
                <p>Have a project in mind or want to collaborate? Reach either founder directly.</p>
                <a className="contact-phone" href="tel:+639636527633"><span>Business line</span>0963 652 7633</a>
              </div>
              <div className="contact-list">
                {team.map((member) => (
                  <div className="contact-person" key={member.name}>
                    <div><span>{member.role}</span><strong>{member.name}</strong></div>
                    <div className="contact-actions">
                      <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}><Mail /><span>{member.email}</span></a>
                      <a href={member.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on Facebook`}><Facebook /></a>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a href="#work" className="footer-brand"><span className="brand-mark"><span>N</span></span><strong>NinjaTech Guys</strong></a>
          <p>Turning ideas into powerful tech solutions.</p>
          <nav aria-label="Footer navigation">
            <a href="#projects">Work</a><a href="#services">Services</a><a href="#rates">Packages</a><a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 NinjaTech Guys. All rights reserved.</span>
          <span>Valenzuela City, Philippines</span>
          <a href="#work">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
