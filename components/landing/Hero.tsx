"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80",
    headline1: "RIOIIA ESCUELA CANINA",
    headline2: "ALBELDA DE IREGUA · LA RIOJA",
    body: "Adiestramiento y educación canina profesional en La Rioja. Trabajamos con todas las razas, desde cachorros hasta adultos, con métodos respetuosos y eficaces adaptados a cada perro y familia.",
  },
  {
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80",
    headline1: "CLUB AGILITY",
    headline2: "Y CLUB MUSHING",
    body: "Sede oficial del Campeonato de La Rioja de Agility. Únete a nuestros clubs y descubre la emoción del deporte canino en un entorno profesional con instalaciones de primer nivel.",
  },
  {
    img: "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?w=1920&q=80",
    headline1: "4.8 ESTRELLAS",
    headline2: "EN GOOGLE · 41 RESEÑAS",
    body: "La confianza de nuestros clientes nos avala. Modificación de conductas, educación canina y adiestramiento personalizado para que tú y tu perro disfrutéis de una convivencia perfecta.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);
  const s = slides[current];

  return (
    <section id="inicio" className="relative h-[100vh] min-h-[580px] max-h-[820px] overflow-hidden">
      {slides.map((sl, i) => (
        <div key={i} className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${sl.img})`, opacity: i === current ? 1 : 0 }} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />

      <div className="relative z-10 container h-full flex flex-col justify-center pt-20">
        <div className="max-w-2xl">
          <h1 className="font-black text-white leading-tight mb-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
            <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] tracking-tight">{s.headline1}</span>
            <span className="block text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-widest font-light mt-1">{s.headline2}</span>
          </h1>
          <p className="text-white/75 text-sm leading-relaxed mt-5 mb-8 max-w-lg">{s.body}</p>
          <a href="#servicios" className="btn-outline-white">Leer más</a>
        </div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors">
        <ChevronLeft size={36} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors">
        <ChevronRight size={36} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-0 text-white/50 animate-bounce">
        <ChevronDown size={20} />
        <ChevronDown size={20} className="-mt-3" />
      </div>
    </section>
  );
}
