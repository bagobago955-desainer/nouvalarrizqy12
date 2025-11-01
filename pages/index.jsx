import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";

export default function App() {
  const [page, setPage] = useState("home");
  const [transitioning, setTransitioning] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const gradients = {
    home: "radial-gradient(circle at center, #e0f2ff, #ffffff 70%)",
    tentang: "linear-gradient(135deg,#ffffff,#e6f5ff)",
    karya: "linear-gradient(135deg,#e6f5ff,#fff7e6)",
    project: "linear-gradient(135deg,#fff7e6,#f3f4f6)",
    prestasi: "linear-gradient(135deg,#e6f0ff,#ffffff)",
  };

  const [bg, setBg] = useState(gradients.home);
  useEffect(() => setBg(gradients[page] || gradients.home), [page]);

  const navigate = (to) => {
    if (to === page || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setPage(to);
      setTimeout(() => setTransitioning(false), 600);
    }, 400);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const karyaList = [
    { title: "Desain 3D Background Panggung Gembira 625", desc: "Desain Background 3D untuk pagelaran seni akbar - Panggung Gembira 625 -.", img: "https://lh3.googleusercontent.com/d/1Q0YWmEJMs2dAOf_QdwSY0vuqGfFxXzCj=s600" },
    { title: "Logo dan Maskot Panggung Gembira 625", desc: "Logo dan maskot iconic untuk pagelaran seni akbar - Panggung Gembira 625 -.", img: "https://lh3.googleusercontent.com/d/1-IjJRj9S0A4LXrxBQv94ZHQ6X_duY8xX=s600" },
    { title: "Desain Feed Instagram @dignifiedgeneration", desc: "Konsep konten visual untuk media sosial Instagram Dignified Generation.", img: "https://lh3.googleusercontent.com/d/1bD3pIjGgq_OGI1x31_BaRkSJp2cwg-MQ=s600" },
  ];

  const projectList = [
    { title: "Website Portfolio", desc: "Situs pribadi untuk menampilkan karya.", img: "https://lh3.googleusercontent.com/d/1XPnjlzl-7YXCH0vTLN35hJ2JjPqsr1gZ=s600" },
    { title: "Dashboard Analitik", desc: "UI dashboard berbasis data visual.", img: "https://via.placeholder.com/400x250?text=Project+2" },
    { title: "Aplikasi Galeri Desain", desc: "Beberapa proyek kreatif yang telah saya kerjakan.", img: "https://via.placeholder.com/400x250?text=Project+3" },
  ];

  const prestasiList = [
    { title: "Peraih medali perak National Olympiad of Academic (NOA) 2024 bidang Biologi", img: "https://lh3.googleusercontent.com/d/1gUWVC-yJPlH3TkSWRI8dGINUoPDmF9s8=s600" },
    { title: "Peraih medali perunggu Pekan Kompetisi Akademik Nasional (PKAN) 2024 bidang Informatika", img: "https://lh3.googleusercontent.com/d/1tSMsajVxkGjsCCs0Nv8_LBGqre5CDXzF=s600" },
    { title: "Peraih medali emas Olimpiade Siswa Tingkat Nasional (OSTN) 2024 bidang Kimia", img: "https://lh3.googleusercontent.com/d/1Nc_uc_jGXn7tWOMRwavzqz8vnsCb6Dgo=s600" },
    { title: "Peraih medali perak Olimpiade Siswa Tingkat Nasional (OSTN) 2024 bidang Fisika", img: "https://lh3.googleusercontent.com/d/1QZzmJ4ZOWZ62mn9hsFv0Rkm3gj_7pMi1=s600" },
    { title: "Peraih medali perak Olimpiade Nasional Sains dan Bahasa (ONSB) 2025 bidang Matematika", img: "https://lh3.googleusercontent.com/d/15VK-kYNfmHvPamg57dKAxqRYXcKlcjWo=s600" },
    { title: "Peraih medali Emas Pekan Olimpiade Sains, Bahasa dan Agama Nasional (POSBASNAS) 2025 bidang Fisika", img: "https://lh3.googleusercontent.com/d/1xypJOs0N2_4P3Gm5herpW5PjI73H0FYh=s600" },
    { title: "Peraih medali Perunggu Pekan Olimpiade Sains, Bahasa dan Agama Nasional (POSBASNAS) 2025 bidang Matematika", img: "https://lh3.googleusercontent.com/d/1WSMzp26r0CoExmftsPv5aLCw9QmiDRNI=s600" },
    { title: "Peraih medali emas Indonesian Science Academic Competition (ISAC) 2025 bidang Biologi", img: "https://lh3.googleusercontent.com/d/1vbuuVCYXttExdauAqzrJHaV0-x508fu8=s600" },
    { title: "Peraih medali emas Olimpiade Pelajar (OPN) 2025 bidang Kimia", img: "https://lh3.googleusercontent.com/d/1jcUo6IfuWe649ZoCj59wvspdCvideNcw=s600" },
    { title: "Peraih medali emas Olimpiade Pelajar (OPN) 2025 bidang Bahasa Inggris", img: "https://lh3.googleusercontent.com/d/1F0IVt2FB7jjqnFkXiaZ-pq115PXbITf_=s600" },
  ];

  const skills = [
    { name: "Adobe Photoshop", level: 78 },
    { name: "Adobe After Effects", level: 85 },
    { name: "Capcut", level: 90 },
    { name: "CorelDraw", level: 95 },
    { name: "Figma", level: 70 },
    { name: "Canva", level: 95 },
    { name: "C++", level: 70 },
  ];

  const galleryImages = [...karyaList.map(k => k.img), ...prestasiList.map(p => p.img)];

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImageIndex]);

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen transition-colors duration-500" style={{ background: bg }}>
      <header className="flex justify-between items-center p-6 fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow z-50">
        <h1 className="text-2xl font-bold text-blue-700">MUHAMMAD NOUVAL AR-RIZQY</h1>
        <nav className="space-x-4">
          {['home', 'tentang', 'karya', 'project', 'prestasi'].map((p) => (
            <Button key={p} variant={page === p ? 'default' : 'outline'} onClick={() => navigate(p)}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </Button>
          ))}
        </nav>
      </header>

      <AnimatePresence mode="wait">
        <motion.main key={page} variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-28 p-8">
          {page === 'home' && (
            <section className="text-center">
              <motion.img src="https://lh3.googleusercontent.com/d/14ZF3H8DsBOR-C_xlYD4GvGcL8D5qSrLa=s600" alt="Profil" className="w-40 h-40 rounded-full mx-auto border-4 border-blue-300 shadow-md" />
              <h1 className="text-3xl font-bold mt-4">Halo, Saya Muhammad Nouval Ar-Rizqy</h1>
              <p className="text-gray-600 max-w-2xl mx-auto mt-2">Seorang Desainer grafis asal Indramayu yang berfokus pada penciptaan identitas visual dan karya desain yang berkarakter.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
                {[
                  { title: 'Tentang Saya', desc: 'Pelajari lebih lanjut tentang latar belakang dan pengalaman saya.', to: 'tentang' },
                  { title: 'Portofolio', desc: 'Lihat karya desain grafis yang telah saya buat.', to: 'karya' },
                  { title: 'Project', desc: 'Beberapa proyek kreatif yang telah saya kerjakan.', to: 'project' },
                ].map((card) => (
                  <Card key={card.title} className="hover:shadow-lg transition">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                      <p className="text-gray-600 mb-4">{card.desc}</p>
                      <Button onClick={() => navigate(card.to)} className="bg-blue-600 text-white hover:bg-blue-700">Lihat</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {page === 'tentang' && (
            <section className="max-w-4xl mx-auto text-center space-y-8">
              <motion.img src="https://lh3.googleusercontent.com/d/14ZF3H8DsBOR-C_xlYD4GvGcL8D5qSrLa=s600" alt="Foto Profil" className="mx-auto rounded-full w-40 h-40 object-cover shadow-lg" />
              <div>
                <h2 className="text-3xl font-bold mb-2">Muhammad Nouval Ar-Rizqy</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Seorang Desainer Grafis asal Indramayu yang berfokus pada penciptaan identitas visual dan karya desain yang kuat serta berkarakter.</p>
              </div>

              <Card className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Pendidikan</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>SDN 2 Tegalsembadra (2013 - 2019)</li>
                  <li>SMP Islam Al Ishlah Boarding School (2019 - 2022)</li>
                  <li>SMAS Al Ishlah Boarding School (2022 - 2025)</li>
                  <li>Universitas Negeri Semarang - S1 Teknik Informatika (2025 - Sekarang)</li>
                </ul>
              </Card>

              <Card className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Pengalaman Kerja/Organisasi</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Sekretaris Organisasi Santri Ma'had Al-Ishlah (OSMI) (Januari - Desember 2024)</li>
                  <li>Divisi Dokumentasi OSMI (Januari - Desember 2024)</li>
                  <li>Andalan Koordinator Urusan Perlengkapan (Ankuperkap) (Januari - Desember 2024)</li>
                  <li>Sekretaris Musabaqoh Tarik Suara Al-Ishlah XI (Januari 2024)</li>
                  <li>Sekretaris Hiking in The Village III (Januari - Februari 2024)</li>
                  <li>Sekretaris Drama Contest VI (Februari 2024)</li>
                  <li>Sekretaris Musabaqoh lil-Khitobah Al-Mimbariyah Al-Kubra VI (April - Mei 2024)</li>
                  <li>Koordinator Divisi Dekorasi Panggung Gembira 625 (Juni - Oktober 2024)</li>
                  <li>Sekretaris The Voice Contest of Al-Ishlah V (Juli - Agustus 2024)</li>
                  <li>Sekretaris Language Olympiad (Oktober - November 2024)</li>
                  <li>Sekretaris Pergantian OSMI dan Koordinator Gerakan Pramuka tahun 2024/2025 (Desember 2024)</li>
                </ul>
              </Card>

              <Card className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Keahlian</h3>
                <div className="space-y-4">
                  {skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-800 font-medium">{skill.name}</span>
                        <span className="text-gray-600 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Prestasi</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {prestasiList.slice(0, 3).map((p, i) => (
                    <div key={i} className="border rounded-lg overflow-hidden cursor-pointer" onClick={() => setSelectedImageIndex(karyaList.length + i)}>
                      <motion.img whileHover={{ scale: 1.03 }} src={p.img} alt={p.title} className="w-full h-40 object-cover" />
                      <p className="p-2 text-sm font-medium text-gray-700">{p.title}</p>
                    </div>
                  ))}
                </div>
                <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700" onClick={() => navigate('prestasi')}>
                  Lihat Semua Prestasi
                </Button>
              </Card>
            </section>
          )}

          {page === 'karya' && (
            <section className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-blue-700">Karya Desain</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {karyaList.map((k, i) => (
                  <Card key={i} className="hover:shadow-lg transition cursor-pointer" onClick={() => setSelectedImageIndex(i)}>
                    <motion.img whileHover={{ scale: 1.03 }} src={k.img} alt={k.title} className="w-full h-40 object-cover rounded-t-lg" />
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{k.title}</h4>
                      <p className="text-gray-600 text-sm">{k.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

          )}

          {/* === PROJECT SECTION === */}
<motion.section
  key="project"
  className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-gray-100 text-gray-800"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5 }}
>
  <h2 className="text-4xl font-bold mb-10 text-center">Project Kreatif</h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
    {/* === Project 1 === */}
    <a
      href="https://github.com/username/project1"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <CardContent className="p-6 text-center">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Project 1"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Sistem Portofolio Pribadi</h3>
          <p className="text-gray-600">
            Website portofolio modern dengan animasi halus dan navigasi dinamis menggunakan React & Tailwind CSS.
          </p>
        </CardContent>
      </Card>
    </a>

    {/* === Project 2 === */}
    <a
      href="https://project2-demo.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <CardContent className="p-6 text-center">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Project 2"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Aplikasi Catatan Online</h3>
          <p className="text-gray-600">
            Aplikasi catatan berbasis web dengan penyimpanan lokal dan antarmuka responsif.
          </p>
        </CardContent>
      </Card>
    </a>

    <a
      href="https://my-designs.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <CardContent className="p-6 text-center">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Project 3"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Galeri Desain Digital</h3>
          <p className="text-gray-600">
            Showcase karya desain dengan fitur galeri fullscreen dan efek transisi lembut.
          </p>
        </CardContent>
      </Card>
    </a>
  </div>
</motion.section>
          <AnimatePresence mode="wait">
    >
      {page === 'prestasi' && (
        <section className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-700">
            Prestasi Lengkap
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {prestasiList.map((p, i) => (
              <Card
                key={i}
                className="hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedImage(p.img)}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-contain rounded-t-lg"
                />
                <CardContent className="p-4">
                  <p className="font-semibold text-gray-700">{p.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </motion.main>

    {selectedImage && (
      <div
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]"
        onClick={() => setSelectedImage(null)}
      >
        <div className="relative max-w-4xl w-full p-4">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Full Sertifikat"
            className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    )}
  </>
</AnimatePresence>
        </motion.main>
      </AnimatePresence>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Hubungi Saya</h2>
        <p className="text-gray-600 mb-6">Tertarik bekerja sama atau ingin berdiskusi?</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:bagobago955.com" aria-label="email"><Mail className="w-6 h-6" /></a>
          <a href="https://github.com/bagobago955-desainer" target="_blank" rel="noopener noreferrer" aria-label="github"><Github className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/muhammad-nouval-ar-rizqy-9ba777378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="linkedin"><Linkedin className="w-6 h-6" /></a>
        </div>
      </section>

      <AnimatePresence>
  {selectedImageIndex !== null && (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-zoom-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImageIndex(null)}
    >
      <motion.img
        src={galleryImages[selectedImageIndex]}
        alt="Preview"
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg cursor-zoom-in"
        onClick={(e) => e.stopPropagation()}
        whileTap={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      />

      <button
        onClick={(e) => { e.stopPropagation(); prevImage(); }}
        className="absolute left-4 text-white hover:text-gray-300"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); nextImage(); }}
        className="absolute right-4 text-white hover:text-gray-300"
      >
        <ChevronRight className="w-10 h-10" />
      </button>
    </motion.div>
  )}
</AnimatePresence>
      </div>
  );
}
