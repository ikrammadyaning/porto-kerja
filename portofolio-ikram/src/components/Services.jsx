import { services } from '../data.js'

export default function Services() {
  return (
    <section id="services" className="container">
      <p className="kicker">Layanan</p>
      <h2 className="section-title">Yang bisa saya kerjakan</h2>
      <div className="grid grid-4">
        {services.map((s, i) => (
          <article className="card service" key={s.title}>
            <span className="index-no">{String(i + 1).padStart(2, '0')}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
