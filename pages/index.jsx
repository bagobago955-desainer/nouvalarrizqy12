import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";

export default function App() {
  const [page, setPage] = useState("home");
@@ -105,17 +105,9 @@
          ))}
        </nav>
      </header>
      
      

      <AnimatePresence mode="wait">
        <motion.main
          key={page}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="p-8 pt-28"
          >
        <motion.main key={page} variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-28 p-8">
          {page === 'home' && (
            <section className="text-center">
              <motion.img src="https://lh3.googleusercontent.com/d/14ZF3H8DsBOR-C_xlYD4GvGcL8D5qSrLa=s600" alt="Profil" className="w-40 h-40 rounded-full mx-auto border-4 border-blue-300 shadow-md" />
@@ -244,79 +236,119 @@
            </section>

          )}
          
          {page === 'prestasi' && (
            <section className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-blue-700">Prestasi Lengkap</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {prestasiList.map((p, i) => (

          <AnimatePresence mode="wait">
  <>
    <motion.main
      key={page}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-8 pt-28"
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
                onClick={() => setSelectedImageIndex(karyaList.length + i)}
                >
                onClick={() => setSelectedImage(p.img)}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-contain rounded-t-lg"
                  />
                />
                <CardContent className="p-4">
                  <p className="font-semibold text-gray-700">{p.title}</p>
                </CardContent>
              </Card>
            ))}
              </div>
            </section>
  
          )}
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
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedImageIndex(null)}
        >
        <motion.img
          src={galleryImages[selectedImageIndex]}
          alt="Preview"
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
          onClick={(e) => e.stopPropagation()}
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
        
        <button onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }} className="absolute top-4 right-4 text-white hover:text-gray-300">
          <X className="w-8 h-8" />
        </button>
      </motion.div>
    )}
      </motion.main>
    </AnimatePresence>
    
    
    <section className="py-16 text-center">
    <h2 className="text-3xl font-semibold mb-4">Hubungi Saya</h2>
    <p className="text-gray-600 mb-6">Tertarik bekerja sama atau ingin berdiskusi?</p>
      <div className="flex justify-center gap-6">
        <a href="mailto:bagobago955.com" aria-label="email"><Mail className="w-6 h-6" /></a>
        <a href="https://github.com/bagobago955-desainer" target="_blank" rel="noopener noreferrer" aria-label="github"><Github className="w-6 h-6" /></a>
        <a href="https://www.linkedin.com/in/muhammad-nouval-ar-rizqy-9ba777378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="linkedin"><Linkedin className="w-6 h-6" /></a>
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
    </section>
    </div>
    );
  );
}
