"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿A qué edad se puede empezar a adiestrar a un perro?",
    a: "Se puede empezar desde los 2 meses de edad. Cuanto antes se empiece, mejor. Los cachorros aprenden más rápido y es más fácil prevenir problemas de conducta que corregirlos más tarde.",
  },
  {
    q: "¿Cuántas sesiones necesitaré?",
    a: "Depende del perro y los objetivos. Para obediencia básica, suelen bastar entre 6 y 10 sesiones. Para problemas de conducta más complejos el proceso puede ser más largo. En la primera consulta te damos una estimación personalizada.",
  },
  {
    q: "¿Funciona el adiestramiento en perros adultos?",
    a: "Sí, los perros adultos también aprenden perfectamente. El proceso puede ser un poco más largo que en cachorros, pero con constancia y el método adecuado los resultados son igual de buenos.",
  },
  {
    q: "¿En qué consiste el refuerzo positivo?",
    a: "El refuerzo positivo consiste en premiar al perro cuando realiza el comportamiento deseado, en lugar de castigar el comportamiento no deseado. Esto crea asociaciones positivas, acelera el aprendizaje y fortalece el vínculo entre el perro y su dueño.",
  },
  {
    q: "¿Tengo que participar en las sesiones con mi perro?",
    a: "Sí, es muy recomendable que participes. El objetivo no es solo que tu perro aprenda, sino que tú también aprendas a comunicarte con él y a mantener los aprendizajes en casa entre sesiones.",
  },
  {
    q: "¿Cuánto tiempo tardaré en ver resultados?",
    a: "Los primeros resultados se notan desde las primeras sesiones. La mejora es progresiva: los cambios más visibles suelen aparecer entre la 3ª y 5ª sesión, aunque la consolidación completa requiere práctica constante en casa.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white border-t border-[#e0e0e0]">
      <div className="container max-w-3xl">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <div className="divide-y divide-[#e0e0e0] border-t border-b border-[#e0e0e0]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b2b2b]"
              >
                <span className="text-[#2b2b2b] font-semibold text-sm uppercase tracking-[0.08em] leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className={`shrink-0 text-[#666] transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="pb-5">
                  <p className="text-[#666] text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
