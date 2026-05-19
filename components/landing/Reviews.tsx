import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sofía A.",
    initials: "SA",
    text: "La mejor decisión que tomamos para nuestro perro. En pocos meses ha cambiado totalmente su comportamiento. El equipo es muy profesional, amable y siempre pendiente del progreso.",
    rating: 5,
  },
  {
    name: "David L.",
    initials: "DL",
    text: "Llevamos a nuestra perra por problemas de ansiedad y los resultados han sido increíbles. Las técnicas son muy respetuosas y te enseñan a trabajar en casa también. Muy recomendable.",
    rating: 5,
  },
  {
    name: "Ana M.",
    initials: "AM",
    text: "Excelente trabajo. Nuestro perro ha mejorado mucho en obediencia y socialización. El ambiente en las sesiones es fantástico y se nota que trabajan con mucho cariño.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#f5a623] text-[#f5a623]" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-16 lg:py-24 bg-[#2b2b2b]">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-white font-black text-2xl sm:text-3xl uppercase tracking-[0.1em]">
            Testimonios
          </h2>
          <p className="text-white/50 text-sm mt-2">Lo que dicen nuestros clientes</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white/5 border border-white/10 p-6 flex flex-col gap-4">
              <Stars count={r.rating} />
              <p className="text-white/70 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {r.initials}
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">{r.name}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">Cliente</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
