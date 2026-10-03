import { steps } from '../data.js'

export default function Process() {
  return (
    <section id="process" className="container">
      <p className="kicker">Alur kerja</p>
      <h2 className="section-title">Proses desain &amp; pengembangan</h2>
      <div className="grid grid-5">
        {steps.map((s) => (
          <article className="card step" key={s.no}>
            <span className="index-no">{s.no}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
