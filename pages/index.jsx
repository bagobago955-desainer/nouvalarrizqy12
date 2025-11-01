import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight, X } from "lucide-react";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [bg, setBg] = useState("linear-gradient(to bottom right, #ebf8ff, #ffffff)");

  const karyaList = [
    { title: "Desain Poster", desc: "Poster kegiatan sekolah", img: "https://via.placeholder.com/400x250" },
    { title: "Logo Brand", desc: "Logo modern minimalis", img: "https://via.placeholder.com/400x250" },
    { title: "Mockup Produk", desc: "Desain kemasan produk", img: "https://via.placeholder.com/400x250" },
  ];

  const prestasiList = [
    { title: "Juara 1 Lomba Desain Poster", img: "https://via.placeholder.com/400x250" },
    { title: "Juara 2 Lomba Logo Kreatif", img: "https://via.placeholder.com/400x250" },
    { title: "Finalis Kompetisi Desain Nasional", img: "https://via.placeholder.com/400x250" },
  ];

  const skills = [
    { name: "Adobe Photoshop", level: 90 },
    { name: "Adobe Illustrator", level: 85 },
    { name: "Canva", level: 95 },
    { name: "UI/UX Design", level: 80 },
  ];

  const galleryImages = [...karyaList.map(k => k.img), ...prestasiList.map(p => p.img)];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const navigate = (p) => {
    setPage(p);
    const bgMap = {
      home: "linear-gradient(to bottom right, #ebf8ff, #ffffff)",
      tentang: "linear-gradient(to bottom right, #f0f4ff, #ffffff)",
      karya: "linear-gradient(to bottom right, #fff8f0, #ffffff)",
      project: "linear-gradient(to bottom right, #f0fff4, #ffffff)",
      prestasi: "linear-gradient(to bottom right, #fff0f8, #ffffff)",
    };
    setBg(bgMap[p] || "#fff");
  };

  const nextImage = () => {
    if (selectedImageIndex !== null)
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (selectedImageIndex !== null)
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen transition-colors duration-500" style={{ background: bg }}>
      {/* HEADER */}
      <header className="flex justify-between items-center p-6 fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow z-50">
        <h1 className="text-2xl font-bold text-blue-700">MUHAMMAD NOUVAL AR-RIZQY</h1>
        <nav className="space-x-4">
          {["home", "tentang", "karya", "project", "prestasi"].map((p) => (
            <Button key={p} variant={page === p ? "default" : "outline"} onClick={() => navigate(p)}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </Button>
          ))}
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <AnimatePresence mode="wait">
        <motion.main
          key={page}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pt-28 p-8"
        >
          {/* ==== HOME ==== */}
          {page === "home" && (
            <section className="text-center">
              <motion.img
                src="https://lh3.googleusercontent.com/d/14ZF3H8DsBOR-C_xlYD4GvGcL8D5qSrLa=s600"
                alt="Profil"
                className="w-40 h-40 rounded-full mx-auto border-4 border-blue-300 shadow-md"
              />
              <h1 className="text-3xl font-bold mt-4">Halo, Saya Muhammad Nouval Ar-Rizqy</h1>
              <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                Seorang Desainer grafis asal Indramayu yang berfokus pada penciptaan identitas visual dan karya desain yang berkarakter.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
                {[
                  { title: "Tentang Saya", desc: "Pelajari lebih lanjut tentang latar belakang dan pengalaman saya.", to: "tentang" },
                  { title: "Portofolio", desc: "Lihat karya desain grafis yang telah saya buat.", to: "karya" },
                  { title: "Project", desc: "Beberapa proyek kreatif yang telah saya kerjakan.", to: "project" },
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

          {/* ==== TENTANG ==== */}
          {page === "tentang" && (
            <section className="max-w-4xl mx-auto text-center space-y-8">
              <motion.img src="https://lh3.googleusercontent.com/d/14ZF3H8DsBOR-C_xlYD4GvGcL8D5qSrLa=s600" alt="Foto Profil" className="mx-auto rounded-full w-40 h-40 object-cover shadow-lg" />
              <div>
                <h2 className="text-3xl font-bold mb-2">Muhammad Nouval Ar-Rizqy</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Seorang Desainer Grafis asal Indramayu yang berfokus pada penciptaan identitas visual dan karya desain yang kuat serta berkarakter.</p>
              </div>

              {/* Pendidikan */}
              <Card className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Pendidikan</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>SDN 2 Tegalsembadra (2013 - 2019)</li>
                  <li>SMP Islam Al Ishlah Boarding School (2019 - 2022)</li>
                  <li>SMAS Al Ishlah Boarding School (2022 - 2025)</li>
                  <li>Universitas Negeri Semarang - S1 Teknik Informatika (2025 - Sekarang)</li>
                </ul>
              </Card>

              {/* Pengalaman */}
              <Card className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Pengalaman Organisasi</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Sekretaris OSMI (2024)</li>
                  <li>Divisi Dokumentasi OSMI (2024)</li>
                  <li>Koordinator Dekorasi Panggung Gembira 625 (2024)</li>
                </ul>
              </Card>

              {/* Keahlian */}
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
            </section>
          )}

          {/* ==== KARYA ==== */}
          {page === "karya" && (
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

          {/* ==== PROJECT ==== */}
          {page === "project" && (
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
                {[
                  {
                    img: "https://via.placeholder.com/400x250",
                    title: "Sistem Portofolio Pribadi",
                    desc: "Website portofolio modern dengan animasi halus dan navigasi dinamis.",
                    href: "https://github.com/username/project1",
                  },
                  {
                    img: "https://via.placeholder.com/400x250",
                    title: "Aplikasi Catatan Online",
                    desc: "Aplikasi catatan dengan penyimpanan lokal dan UI responsif.",
                    href: "https://project2-demo.vercel.app",
                  },
                  {
                    img: "https://via.placeholder.com/400x250",
                    title: "Galeri Desain Digital",
                    desc: "Showcase karya desain dengan galeri fullscreen dan transisi lembut.",
                    href: "https://my-designs.netlify.app",
                  },
                ].map((proj, i) => (
                  <a key={i} href={proj.href} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <img src={proj.img} alt={proj.title} className="rounded-lg mb-4 w-full h-48 object-cover" />
                        <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                        <p className="text-gray-600">{proj.desc}</p>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </motion.section>
          )}

          {/* ==== PRESTASI ==== */}
          {page === "prestasi" && (
            <section className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-blue-700">Prestasi Lengkap</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {prestasiList.map((p, i) => (
                  <Card key={i} className="hover:shadow-lg transition cursor-pointer" onClick={() => setSelectedImage(p.img)}>
                    <img src={p.img} alt={p.title} className="w-full h-48 object-contain rounded-t-lg" />
                    <CardContent className="p-4">
                      <p className="font-semibold text-gray-700">{p.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </motion.main>
      </AnimatePresence>

      {/* ==== CONTACT ==== */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Hubungi Saya</h2>
        <p className="text-gray-600 mb-6">Tertarik bekerja sama atau ingin berdiskusi?</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:bagobago955.com"><Mail className="w-6 h-6" /></a>
          <a href="https://github.com/bagobago955-desainer" target="_blank"><Github className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/muhammad-nouval-ar-rizqy-9ba777378" target="_blank"><Linkedin className="w-6 h-6" /></a>
        </div>
      </section>

      {/* ==== IMAGE MODAL ==== */}
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

            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 text-white hover:text-gray-300">
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 text-white hover:text-gray-300">
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
