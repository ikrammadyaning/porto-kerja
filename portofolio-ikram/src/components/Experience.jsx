import { timeline } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="container">
      <p className="kicker">Rekam jejak</p>
      <h2 className="section-title">Pengalaman &amp; pendidikan</h2>
      <div className="panel timeline">
        {timeline.map((t, i) => (
          <div className={`t-row ${t.edu && !timeline[i - 1]?.edu ? 'gap' : ''}`} key={i}>
            <div>
              <span className={`badge badge-${t.tone}`}>{t.badge}</span>
            </div>
            <div>
              <h3>{t.title}</h3>
              <p className={`org ${t.edu ? 'green' : ''}`}>{t.org}</p>
              <p className="desc">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
