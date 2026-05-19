import { MessageCircle, Search, ClipboardList, CheckCircle2 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Primera Consulta",
    desc: "Nos cuentas la situación de tu perro: edad, raza, carácter y qué comportamientos quieres mejorar. Analizamos juntos si es el momento ideal para empezar.",
  },
  {
    num: "02",
    icon: Search,
    title: "Evaluación",
    desc: "Observamos a tu perro en su entorno natural para entender su conducta. Identificamos la causa raíz de los comportamientos y definimos los objetivos reales.",
  },
  {
    num: "03",
    icon: ClipboardList,
    title: "Plan Personalizado",
    desc: "Diseñamos un programa de adiestramiento adaptado a las necesidades de tu perro y a tu disponibilidad. Sin métodos genéricos: cada caso es único.",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "Seguimiento",
    desc: "Acompañamiento continuo tras cada sesión. Te damos pautas para trabajar en casa y nos aseguramos de que los resultados se mantienen a largo plazo.",
  },
];

export default function HowWeWork() {
  return (
    <section id="como-trabajamos" className="py-16 lg:py-24 bg-[#f9f9f9] border-t border-[#e0e0e0]">
      <div className="container">
        <h2 className="section-title">Cómo Trabajamos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map(({ num, icon: Icon, title, desc }) => (
            <div key={num} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="shrink-0 w-12 h-12 border border-[#e0e0e0] bg-white flex items-center justify-center">
                  <Icon size={20} className="text-[#2b2b2b]" strokeWidth={1.5} />
                </div>
                <span className="text-[#d0d0d0] font-black text-3xl leading-none">{num}</span>
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
