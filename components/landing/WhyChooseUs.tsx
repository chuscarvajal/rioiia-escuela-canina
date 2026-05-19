import { Award, Settings, Zap, Clock, Star, Heart } from "lucide-react";

const features = [
  { icon: Award,    title: "4.8★ en Google",              desc: "Más de 41 reseñas de clientes satisfechos avalan nuestra escuela. Somos uno de los centros caninos mejor valorados de La Rioja, con resultados que hablan por sí solos." },
  { icon: Settings, title: "Adiestramiento Personalizado", desc: "Cada perro y cada familia son únicos. Adaptamos el programa a vuestras necesidades concretas, ya sea para cachorros, adultos, o perros con problemas específicos de conducta." },
  { icon: Zap,      title: "Club Agility Oficial",        desc: "Sede del Campeonato de La Rioja de Agility. Nuestro club compite a nivel regional y nacional, con instalaciones de obstáculos homologadas y entrenamientos semanales para todos los niveles." },
  { icon: Clock,    title: "Club Mushing",                desc: "Una de las pocas escuelas de La Rioja con programa de mushing activo. Disfruta de una disciplina apasionante que refuerza el vínculo entre el perro y su dueño de forma única." },
  { icon: Star,     title: "Métodos Respetuosos",         desc: "Trabajamos exclusivamente con técnicas positivas y respetuosas con el animal. Sin castigos, sin fuerza. Solo comunicación, confianza y refuerzo para conseguir resultados duraderos." },
  { icon: Heart,    title: "Comunidad Activa",            desc: "Síguenos en Instagram y Facebook para ver fotos de nuestros perros, consejos de adiestramiento, resultados de competiciones y toda la actividad de la escuela en tiempo real." },
];

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-[#f9f9f9] border-t border-[#e0e0e0]">
      <div className="container">
        <h2 className="section-title">Por Qué Elegirnos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="shrink-0 w-12 h-12 border border-[#e0e0e0] bg-white flex items-center justify-center mt-0.5">
                <Icon size={20} className="text-[#2b2b2b]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[#2b2b2b] font-bold text-sm uppercase tracking-[0.12em] mb-2">{title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
