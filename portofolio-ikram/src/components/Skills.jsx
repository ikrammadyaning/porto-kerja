import { techGroups } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="container">
      <div className="panel">
        <p className="kicker">Tools &amp; skill</p>
        <h2 className="section-title">Teknologi yang saya pakai</h2>
        <p className="muted">Kombinasi teknologi modern dan alur kerja terstruktur, tanpa klaim persentase buatan.</p>
        <div className="tech-grid">
          {techGroups.map((g) => (
            <div className={`tech-group ${g.wide ? 'wide' : ''}`} key={g.title}>
              <h3>{g.title}</h3>
              <div className="chips">
                {g.items.map((i) => (
                  <span className="chip" key={i}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
