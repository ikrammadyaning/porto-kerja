import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="container">
      <div className="section-head">
        <div>
          <p className="kicker">Proyek pilihan</p>
          <h2 className="section-title">Karya terpilih</h2>
        </div>
        <a className="btn btn-soft btn-sm" href="#contact">
          Mulai proyek baru
        </a>
      </div>

      <div className="grid grid-3 start">
        {projects.map((p) => (
          <article className="card project" key={p.title}>
            <div className={`preview preview-${p.variant}`}>
              <div className="preview-top">
                <span>{p.previewTitle}</span>
                <em>{p.previewTag}</em>
              </div>
              {p.variant === 'purple' ? (
                <div className="preview-center">
                  <strong>{p.previewMain}</strong>
                  <small>{p.previewSub}</small>
                  <div className="dots"><i /><i /><i /></div>
                </div>
              ) : (
                <>
                  <div className="preview-box">
                    <strong>{p.previewMain}</strong>
                    <small>{p.previewSub}</small>
                  </div>
                  <div className="preview-foot">
                    <span>{p.previewFootL}</span>
                    <span>{p.previewFootR}</span>
                  </div>
                </>
              )}
            </div>

            <div className="project-meta">
              <span className="tag">{p.category}</span>
              <span className="tag">{p.year}</span>
              <span className={`status status-${p.statusTone}`}>{p.status}</span>
            </div>
            <h3>{p.title}</h3>
            <p className="role">{p.role}</p>
            <p className="desc">{p.desc}</p>
            <div className="chips">
              {p.tags.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>
            <div className="project-foot">
              {p.link ? (
                <a className="link-accent" href={p.link}>{p.linkLabel}</a>
              ) : (
                <span className="muted">{p.linkLabel}</span>
              )}
              <a className="link-plain" href="#contact">{p.detail}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
