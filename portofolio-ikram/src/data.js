export const EMAIL = 'ikrammadyaning@gmail.com'
export const GITHUB = 'https://github.com/ikrammadyaning'

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'process', label: 'Process' },
]

export const heroTech = [
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'HTML5' },
  { name: 'JavaScript' },
  { name: 'CSS3' },
  { name: 'Supabase' },
  { name: 'Tailwind CSS' },
  { name: 'Vite' },
]

export const heroTags = ['AI & Tech Enthusiast', 'Islamic Dtech (Terasa)']

export const stats = [
  { value: '3+', label: 'Institusi formal', sub: 'HSI Boarding School' },
  { value: '5+', label: 'Proyek unggulan', sub: 'Teruji real' },
  { value: '6', label: 'Sertifikasi', sub: 'Terverifikasi' },
]

export const services = [
  { title: 'Web Development', desc: 'Pengembangan antarmuka responsif, modern, dan fitur website interaktif menggunakan React dan TypeScript.' },
  { title: 'Mobile App Dev', desc: 'Eksplorasi dan pengembangan aplikasi mobile cross-platform menggunakan React Native dengan navigasi mulus.' },
  { title: 'Database Integration', desc: 'Integrasi aplikasi dengan backend Supabase, alur kerja API terstruktur, serta sinkronisasi data Google Sheets.' },
  { title: 'UI & Visual Design', desc: 'Pembuatan rancangan antarmuka rapi, sistem desain berbasis komponen, dan visual mockup presisi menggunakan Figma.' },
]

export const techGroups = [
  { title: 'Frontend Development', items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Mobile Development', items: ['React Native', 'Mobile Navigation', 'Component State'] },
  { title: 'Backend & Data', items: ['Supabase', 'Integrasi Database', 'Alur Kerja API'] },
  { title: 'Spreadsheet & Data Entry', items: ['Google Sheets', 'Formula & Data Structuring', 'Live Sync'] },
  { title: 'Tools, Design & Deployment', wide: true, items: ['Git', 'GitHub', 'Vite', 'Figma', 'Vercel', 'Netlify', 'Hostinger', 'Canva'] },
]

export const projects = [
  {
    variant: 'purple',
    previewTitle: 'Terasa Mobile App',
    previewTag: 'React Native',
    previewMain: 'Islamic Learning Modules',
    previewSub: 'Interactive Quiz & Daily Trackers',
    category: 'Aplikasi Mobile',
    year: '2026',
    status: 'Processing',
    statusTone: 'amber',
    title: 'Terasa Project',
    role: 'Peran: Pendiri & Pengembang Aplikasi Mobile',
    desc: 'Mengembangkan aplikasi pembelajaran Islam dengan pengalaman belajar dan eksplorasi fitur interaktif yang mudah diakses. Bertanggung jawab atas rancang bangun React Native serta modul kuis terstruktur.',
    tags: ['React Native', 'Mobile UI'],
    linkLabel: 'Dalam pengembangan',
    link: null,
    detail: 'Detail proyek',
  },
  {
    variant: 'blue',
    previewTitle: 'LPK Karisma Melati Portal',
    previewTag: 'Web Platform',
    previewMain: 'Penempatan Pengasuh & Pekerja',
    previewSub: 'Katalog Terverifikasi · Formulir Mitra',
    previewFootL: 'Frontend & Hosting Setup',
    previewFootR: 'Live Deploy',
    category: 'Platform Web',
    year: '2026',
    status: 'Tersedia',
    statusTone: 'green',
    title: 'Website LPK Karisma Melati',
    role: 'Peran: Full-Stack Web Developer',
    desc: 'Mendukung kebutuhan digital lembaga penyedia layanan penempatan pengasuh dan pekerja rumah tangga. Bertanggung jawab atas frontend responsif, integrasi data, dan deployment online.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    linkLabel: 'Demo portofolio',
    link: '#',
    detail: 'Detail',
  },
  {
    variant: 'red',
    previewTitle: 'Lomba Tembak piala Panglima TNI',
    previewTag: 'Realtime',
    previewMain: 'Live Leaderboard',
    previewSub: 'Panitia & Videotron',
    previewFootL: 'Supabase Realtime',
    previewFootR: 'Sheets Automation',
    category: 'Sistem & Videotron',
    year: '2026',
    status: 'Sukses Event',
    statusTone: 'green',
    title: 'Sistem Kompetisi Menembak Panglima TNI',
    role: 'Peran: Web Developer & Operator Sistem',
    desc: 'Mendukung pencatatan dan penyajian hasil kompetisi secara terpusat melalui sistem digital berkecepatan tinggi, penilaian real-time, dan sinkronisasi data videotron langsung di arena lomba.',
    tags: ['React', 'TypeScript', 'Supabase', 'Google Sheets'],
    linkLabel: 'Studi kasus',
    link: '#',
    detail: 'Detail',
  },
]

const EDU_DESC = 'Fokus pada pembelajaran intensif teknologi informasi, rekayasa perangkat lunak web dan mobile, penguasaan logika komputasi, serta pembinaan kepribadian dan karakter mandiri.'

export const timeline = [
  { badge: '2026 — Sekarang', tone: 'indigo', title: 'Founder & Mobile App Developer', org: 'Terasa Project / Freelance', desc: 'Memimpin perancangan dan implementasi aplikasi edukasi Islam menggunakan React Native, menyusun tata letak antarmuka, navigasi pengguna, dan modul pembelajaran interaktif.' },
  { badge: '2026', tone: 'grey', title: 'Full-Stack Web Developer', org: 'LPK Karisma Melati / Freelance', desc: 'Merancang dan mengimplementasikan portal penempatan kerja, membangun arsitektur antarmuka berbasis React, styling Tailwind CSS, dan menyederhanakan formulir intake mitra kerja.' },
  { badge: '2026', tone: 'grey', title: 'Web Developer & Competition System Operator', org: 'Proyek Lomba Menembak Panglima TNI', desc: 'Membangun sistem penayangan skor langsung, memprogram integrasi data real-time dengan Supabase dan Google Sheets, serta mengoperasikan sistem penyiaran videotron di lokasi.' },
  { badge: '2026', tone: 'grey', title: 'UI / Graphic Designer', org: 'LPK Karisma Melati / Freelance', desc: 'Merancang materi identitas visual, komponen desain, dan wireframe responsif untuk keselarasan branding platform digital.' },
  { badge: 'Saat ini', tone: 'green', edu: true, title: 'Full-Stack Web Developer & Manager Project', org: 'Proyek E-Course Darul Lughah X HSI Boarding School', desc: EDU_DESC },
  { badge: '2016 – 2021', tone: 'green', edu: true, title: 'Student / Pelajar', org: 'SDIT Al-Anshar Pekayon', desc: 'Sekolah dasar yang berfokus pada pelajaran Matematika dan Inggris yang saya tekuni.' },
  { badge: '2021 – 2024', tone: 'green', edu: true, title: 'Student / Pelajar', org: 'Ponpes Al-Izzanh Setu, Bekasi', desc: 'Fokus kepada pelajaran Agama dan UMUM.' },
  { badge: '2024 – 2027', tone: 'green', edu: true, title: 'Student / Pelajar', org: 'HSI Boarding School', desc: EDU_DESC },
]

export const certificates = [
  { issuer: 'Dicoding Indonesia', title: 'Belajar Membuat Front-end Web untuk Pemula', desc: 'Keterampilan DOM manipulation, event handling, dan penyimpanan web browser.' },
  { issuer: 'Dicoding Indonesia', title: 'Spec-Driven Development dengan Kiro', desc: 'Perancangan perangkat lunak terpadu spesifikasi yang terstruktur dan terukur.' },
  { issuer: 'Dicoding Indonesia', title: 'Belajar Dasar Pemrograman JavaScript', desc: 'Fundamen logika pemrograman modern, asynchronous JavaScript, dan OOP.' },
  { issuer: 'Eksplor Coding', title: 'Belajar Dasar Web Development', desc: 'Fondasi arsitektur web semantik, tata letak antarmuka, dan styling web modern.' },
  { issuer: 'Dicoding Indonesia', title: 'Belajar Dasar Pemrograman', desc: 'Prinsip fundamental logika algoritma, alur komputasi, dan struktur data umum.' },
  { issuer: 'Dicoding Indonesia', title: 'Belajar Membuat Aplikasi dengan React', desc: 'Penguasaan komponen reaktif, lifecycle hooks, state management, dan SPA.' },
]

export const steps = [
  { no: '01', title: 'Discover', desc: 'Memahami tujuan inti, kebutuhan nyata calon pengguna, dan target sasaran solusi digital.' },
  { no: '02', title: 'Define', desc: 'Menentukan ruang lingkup arsitektur, spesifikasi teknis, prioritas fitur, dan struktur data.' },
  { no: '03', title: 'Design', desc: 'Menyusun wireframe, komponen UI di Figma, interaksi pengguna, dan desain token responsif.' },
  { no: '04', title: 'Develop', desc: 'Menulis kode modular dengan React/React Native, menghubungkan API, dan integrasi backend.' },
  { no: '05', title: 'Test & Iterate', desc: 'Pengujian performa, perbaikan bug lintas perangkat, dan penyempurnaan alur secara berkala.' },
]

export const topics = [
  'Pengembangan Website Baru',
  'Aplikasi Mobile (React Native)',
  'Integrasi Database & API',
  'Desain UI / Visual',
  'Lainnya',
]
