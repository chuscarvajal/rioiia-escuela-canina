import Image from "next/image";

const photos = [
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGqr2kdh2zPK6e2wM1DFHgvTF6KVrrQucWDWMvP7HSHUl3AqQIP02_pEIZZyK1nyu7WKP3JTLuzCLwbDfyua2Nz6tI08foo0DfDrirOsf5LiDGDCfr4YjWursggMAO3TiTnS7-q=w800-h533-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAG2jfnDSVWdoRIKirDjYZVvw11Wq5k0xNiUgMlqDqEw__iPcElNqzaxuUmjtu3uPzbUfuX1PJch2fJsH_m2ougX7mulrAE5o9a0mTthPg0N90p_MSAmkG2Q3mInve-9k3d5Ab01zI92NdA8=w800-h533-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHH05NMgVc58AX7NMFvjcCqSRxKoVEC2Hy-PyQRCwFInwbyURTvGlALhQrLvfQ6NN15JhHe_cxARRuPPZCOV_zLSkdkxEtffIZspCubShvsVyUKsCG1jecefsE6bpHNcOTXjmUUPA=w800-h533-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHQ3lcrJclWDksDe6yy-zNp_3ZMPShOi_V6NGoDcfm3YfP1uwpeUVeaQ4FTcn949mRT6hNNCpsyZKNwcitaEjZ5-PRM_zeOt_Qeg1aSASuc8MArAUH9S7BUqzBm3N-PkGcXSzhbyw=w800-h533-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGFC_SFwUdSSqC8jmayfUFurmkvJs80P6Cjv4TBwtWKFXTPHD1TZ38NLVznMkuhb4sTC6e7Say9UEIUcQcD6ea8qjZMWH_fMl2nLvuiMFQvglGLaXggNDDmU3VbOCBIupmWTidyqA=w800-h533-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEU-jSJ627zzOCX8iWefjRGT-FyffJfPJXNQjDKHGq93lYwO6RmLKzc9fQ-bJEXcv4R-ylCrk3S24WNBV7nm-TzVIrY1oKO1jQFnXdZ13YQMTHMqw3xOp9GZT1k8rKEREIJYHhECw=w800-h533-k-no",
];

export default function Gallery() {
  return (
    <section id="galería" className="py-16 lg:py-24 bg-[#2b2b2b] border-t border-[#e0e0e0]">
      <div className="container">
        <h2 className="text-white font-bold uppercase tracking-[0.12em] text-2xl lg:text-3xl text-center mb-3">
          Galería
        </h2>
        <p className="text-white/60 text-sm text-center mb-10 tracking-wide">Fotos del negocio</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {photos.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={src}
                alt={`Galería Rioiia Escuela Canina ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
