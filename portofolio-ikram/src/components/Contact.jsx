import { useState } from 'react'
import { EMAIL, GITHUB, topics } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ nama: '', email: '', topik: topics[0], pesan: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[Portofolio] ${form.topik} — ${form.nama}`)
    const body = encodeURIComponent(`Nama: ${form.nama}\nEmail: ${form.email}\nTopik: ${form.topik}\n\n${form.pesan}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="container">
      <div className="panel contact">
        <div className="contact-left">
          <p className="kicker">Kontak</p>
          <h2 className="contact-title">
            Punya rencana proyek? <span>Mari membangun sesuatu bersama.</span>
          </h2>
          <span className="pill">
            <i className="dot" /> Terbuka untuk kolaborasi &amp; proyek lepas
          </span>
          <p className="muted">
            Tertarik mendiskusikan peluang proyek web, kolaborasi aplikasi mobile, atau sekadar
            bertukar wawasan pemrograman? Kirimkan pesan Anda melalui kontak berikut.
          </p>
          <a className="contact-row"  href="https://mail.google.com/mail/?view=cm&fs=1&to=emailkamu@gmail.com">
            <span aria-hidden="true"></span> {EMAIL}
          </a>
          <a className="contact-row" href={GITHUB} target="_blank" rel="noreferrer">
            <span aria-hidden="true"></span> github.com/ikrammadyaning
          </a>
            <a className="contact-row" href="https://linkedin.com/in/ikram-madyaning-74b1b239b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <span aria-hidden="true"></span> LinkedIn : Ikram Madyaning
            </a>
            <a className="contact-row" href="https://wa.me/6285759040262" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <span aria-hidden="true"></span> WhatsApp : +62 857-5904-0262
            </a>
          </div>

        <form className="form" onSubmit={onSubmit}>
          <div className="form-2">
            <label>
              Nama lengkap
              <input required placeholder="Nama Anda" value={form.nama} onChange={set('nama')} />
            </label>
            <label>
              Alamat email
              <input required type="email" placeholder="nama@domain.com" value={form.email} onChange={set('email')} />
            </label>
          </div>
          <label>
            Topik / kebutuhan proyek
            <select value={form.topik} onChange={set('topik')}>
              {topics.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label>
            Pesan Anda
            <textarea
              required
              rows="4"
              placeholder="Ceritakan gambaran proyek atau pesan yang ingin disampaikan..."
              value={form.pesan}
              onChange={set('pesan')}
            />
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            Kirim pesan sekarang
          </button>
          <p className="form-note">Formulir akan mengarahkan pesan langsung ke klien email default Anda.</p>
        </form>
      </div>
    </section>
  )
}
