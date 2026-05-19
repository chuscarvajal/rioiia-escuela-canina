import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="py-16 lg:py-24 bg-white border-t border-[#e0e0e0]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGqr2kdh2zPK6e2wM1DFHgvTF6KVrrQucWDWMvP7HSHUl3AqQIP02_pEIZZyK1nyu7WKP3JTLuzCLwbDfyua2Nz6tI08foo0DfDrirOsf5LiDGDCfr4YjWursggMAO3TiTnS7-q=w800-h600-k-no"
              alt="Rioiia Escuela Canina — Adiestramiento Canino"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[#2b2b2b] font-bold uppercase tracking-[0.12em] text-2xl lg:text-3xl">
              Quiénes Somos
            </h2>
            <p className="text-[#666] text-sm leading-relaxed">
              Somos Rioiia Escuela Canina, ubicados en Albelda de Iregua, La Rioja. Una escuela especializada en adiestramiento, socialización, agility y mushing, con una valoración perfecta de 5.0★ en Google.
            </p>
            <p className="text-[#666] text-sm leading-relaxed">
              Nuestro centro cuenta con instalaciones en plena naturaleza riojana. Trabajamos con perros de todas las razas y edades mediante técnicas de refuerzo positivo, fomentando el vínculo entre el perro y su familia.
            </p>
            <div className="flex flex-wrap gap-2">
              {["5.0★ Google", "La Rioja", "Agility & Mushing"].map((badge) => (
                <span
                  key={badge}
                  className="border border-[#e0e0e0] text-[#2b2b2b] text-xs font-semibold uppercase tracking-[0.1em] px-4 py-2"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
