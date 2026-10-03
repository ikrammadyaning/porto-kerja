import foto from '../assets/foto-profil.png'
import { heroTech, heroTags } from '../data.js'

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-text">
        <span className="pill">
          Hai, saya Ikram Madyaning <i className="dot" /> Open to Networking &amp; Collaboration  
        </span>
        <h1>Ikram Madyaning</h1>
        <p className="hero-role">Web &amp; Mobile App Developer</p>
        <p className="hero-desc">
          Seorang web developer yang memiliki ketertarikan pada teknologi, desain, dan
          pengembangan solusi digital. Saya senang mengubah ide menjadi pengalaman digital
          yang fungsional, menarik, dan mudah digunakan.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#projects">
            Lihat karya saya
          </a>
          <a className="btn btn-ghost" href="/CV-Ikram-Madyaning.pdf" download>
            Unduh CV
          </a>
        </div>
        <div className="hero-tech">
          <p className="mini-label">Teknologi utama</p>
          <div className="chips">
            {heroTech.map((t) => (
              <span className="chip" key={t.name}>
                <span aria-hidden="true">{t.icon}</span> {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="photo-frame">
          <img src={foto} alt="Foto Ikram Madyaning" />
          <div className="float-badge top">
            <strong>HSI Boarding School</strong>
            <small>Sukabumi, ID</small>
          </div>
          <span className="tag-sticker tag-1">{heroTags[0]}</span>
          <span className="tag-sticker tag-2">{heroTags[1]}</span>
          <div className="spark-btn" aria-hidden="true">✦</div>
          <div className="float-badge bottom">
            <div className="row">
              <small>Kesiapan kolaborasi</small>
              <b className="accent-text">100%</b>
            </div>
            <div className="row status">
              <i className="dot" /> <strong>Aktif &amp; terbuka</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
