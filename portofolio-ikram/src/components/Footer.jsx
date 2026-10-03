import { navLinks, EMAIL, GITHUB } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <a href="#home" className="brand">
            <span className="brand-logo">I</span>
            <span className="brand-text">
              <strong>Ikram Madyaning</strong>
              <small>Web Developer &amp; Mobile App Developer</small>
            </span>
          </a>
          <ul className="footer-links">
            {[...navLinks, { id: 'contact', label: 'Contact' }].map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Ikram Madyaning. Dirancang dengan fokus pada kesederhanaan, transparansi, dan performa tinggi.</p>
          <div className="footer-mini">
            <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`mailto:${EMAIL}`}>Email</a>
            <a href="http://linkedin.com/in/ikram-madyaning-74b1b239b" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
