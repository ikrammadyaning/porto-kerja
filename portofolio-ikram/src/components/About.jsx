import { stats } from '../data.js'

export default function About() {
  return (
    <section id="about" className="container">
      <div className="panel about">
        <div className="about-left">
          <p className="kicker">Tentang saya</p>
          <h2>Seorang Web Developer yang masih mencoba dan belajar hal baru</h2>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
                <small>{s.sub}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="about-right">
          <p>
            Saya adalah web developer yang juga aktif mengeksplorasi pengembangan aplikasi mobile.
            Berlatar belakang pendidikan teknologi informasi di <b>HSI Boarding School Sukabumi</b>,
            saya berfokus menciptakan antarmuka yang bersih, performa cepat, dan arsitektur data yang efisien.
          </p>
          <p>
            Portofolio ini merangkum dedikasi belajar, proyek real, serta keterbukaan untuk berjejaring
            dan berkolaborasi secara transparan dengan standar kode modern.
          </p>
          <a className="btn btn-ghost btn-sm" href="#experience">
            Pelajari lebih lanjut
          </a>
        </div>
      </div>
    </section>
  )
}
