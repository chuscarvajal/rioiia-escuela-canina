import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Adiestramiento y Educación Canina",
    img: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=740&q=80",
    desc: "Clases individuales y grupales para todas las razas y edades. Enseñamos a tu perro las bases de la obediencia y la convivencia, y a ti cómo mantener esos aprendizajes en el día a día.",
  },
  {
    num: "02",
    title: "Modificación de Conductas",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=740&q=80",
    desc: "¿Tu perro tiene problemas de agresividad, ansiedad o miedos? Trabajamos de forma profesional y respetuosa para corregir comportamientos no deseados y mejorar la calidad de vida de tu mascota.",
  },
  {
    num: "03",
    title: "Club Agility y Club Mushing",
    img: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=740&q=80",
    desc: "Instalaciones oficiales del Campeonato de La Rioja de Agility. Únete a nuestro club y disfruta del deporte canino en sus dos disciplinas más apasionantes: agilidad y mushing.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e0e0e0]">
          {services.map((s) => (
            <div key={s.num} className="px-0 md:px-8 lg:px-10 py-8 md:py-0 first:pl-0 last:pr-0">
              {/* Number + Title */}
              <h2 className="flex items-baseline gap-3 mb-5">
                <span className="text-[#d0d0d0] font-black text-3xl leading-none">{s.num}/</span>
                <span className="text-[#2b2b2b] font-bold text-sm uppercase tracking-[0.16em]">{s.title}</span>
              </h2>

              {/* Image */}
              <div className="relative w-full h-[200px] mb-5 overflow-hidden group">
                <Image src={s.img} alt={s.title} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Description */}
              <p className="text-[#666] text-sm leading-relaxed mb-5">{s.desc}</p>

              {/* Link */}
              <a href="#contact"
                className="flex items-center gap-2 text-[#2b2b2b] text-xs font-semibold uppercase tracking-widest border border-[#2b2b2b] px-5 py-2.5 w-fit hover:bg-[#2b2b2b] hover:text-white transition-colors">
                Saber Más <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
