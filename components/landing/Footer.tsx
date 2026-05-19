import { Phone, MapPin, Instagram } from "lucide-react";

const services = ["Adiestramiento Individual","Clases en Grupo","Modificación de Conductas","Club Agility","Club Mushing","Educación Canina"];
const quickLinks = ["Inicio","Servicios","Por Qué Elegirnos","Galería","Contacto","Reseñas Google"];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#2b2b2b] text-white">
      <div className="container py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + descripción */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
              <circle cx="19" cy="19" r="19" fill="white" fillOpacity="0.15"/>
              <text x="19" y="25" textAnchor="middle" fontSize="20" fill="white">🐕</text>
            </svg>
            <div className="text-white leading-tight">
              <span className="block font-black text-sm tracking-widest uppercase">Rioiia</span>
              <span className="block text-[8px] tracking-[0.2em] uppercase font-light opacity-70">Escuela Canina</span>
            </div>
          </div>
          <p className="text-white/50 text-xs leading-relaxed">
            Escuela canina en Albelda de Iregua, La Rioja. Adiestramiento, educación, agility y mushing con métodos respetuosos y resultados reales.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white">Servicios</h4>
          <ul className="space-y-2">
            {services.map(l => (
              <li key={l}><a href="#servicios" className="text-white/50 text-xs hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Accesos Rápidos */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white">Accesos Rápidos</h4>
          <ul className="space-y-2">
            {quickLinks.map(l => (
              <li key={l}><a href="#" className="text-white/50 text-xs hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white">Contacto</h4>
          <ul className="space-y-3 text-white/50 text-xs">
            <li className="flex items-start gap-2">
              <Phone size={12} className="mt-0.5 shrink-0 text-white/30" />
              <a href="tel:+34606786988" className="hover:text-white">+34 606 78 69 88</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={12} className="mt-0.5 shrink-0 text-white/30" />
              <span>Cam. la Plana, 26120 Albelda de Iregua, La Rioja</span>
            </li>
            <li className="flex items-start gap-2">
              <Instagram size={12} className="mt-0.5 shrink-0 text-white/30" />
              <a href="https://www.instagram.com/rioiia.escuelacanina/" target="_blank" rel="noopener noreferrer" className="hover:text-white">@rioiia.escuelacanina</a>
            </li>
          </ul>

          {/* Facebook block */}
          <div className="bg-[#3b5998]/80 rounded p-4 text-xs text-white/70 mt-5">
            <p className="font-semibold text-white mb-1">Rioiia Escuela Canina</p>
            <p className="text-[11px] leading-relaxed">Síguenos en Facebook para fotos de nuestros perros, resultados de competiciones y novedades de la escuela.</p>
            <a href="https://www.facebook.com/profile.php?id=100042208346693" target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-block text-[11px] border border-white/30 px-3 py-1 hover:bg-white hover:text-[#3b5998] transition-colors">
              Visitar página
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/30">
          <p>© {new Date().getFullYear()} Rioiia Escuela Canina. Todos los derechos reservados.</p>
          <a href="#" className="hover:text-white/60 transition-colors">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
