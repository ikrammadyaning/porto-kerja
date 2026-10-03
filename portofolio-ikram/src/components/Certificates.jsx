import { certificates } from '../data.js'

export default function Certificates() {
  return (
    <section id="certificates" className="container">
      <p className="kicker">Kredensial</p>
      <h2 className="section-title">Sertifikasi (2026)</h2>
      <p className="muted">Daftar program sertifikasi formal dan pelatihan terverifikasi yang telah diselesaikan.</p>
      <div className="grid grid-3 start">
        {certificates.map((c) => (
          <article className="card cert" key={c.title}>
            <div className="cert-top">
              <span className="tag">{c.issuer}</span>
              <span className="muted">2026</span>
            </div>
            <h3>{c.title}</h3>
            <p className="desc">{c.desc}</p>
            <div className="cert-foot">
              <span className="muted">Tautan belum tersedia</span>
              <span className="green">Terverifikasi</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
