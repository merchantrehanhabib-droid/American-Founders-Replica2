import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ServiceCarouselProps {
  images: string[];
  serviceTitle: string;
}

export default function ServiceCarousel({ images, serviceTitle }: ServiceCarouselProps) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [images.length, goNext]);

  if (images.length === 0) return null;

  return (
    <>
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <span className="text-gold font-bold uppercase tracking-widest text-sm">Portfolio</span>
            <h2 className="text-3xl font-serif font-bold text-navy mt-2">
              Books We&apos;ve Created
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">
              A glimpse of projects delivered through our {serviceTitle} service.
            </p>
          </div>

          {/* Main carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-navy">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${serviceTitle} project ${i + 1}`}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setLightbox(i)}
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5 text-navy" />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5 text-navy" />
                  </button>
                </>
              )}

              {/* Dots */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === active ? "bg-gold w-6" : "bg-white/60 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 mt-4 justify-center">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      i === active ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + images.length) % images.length);
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % images.length);
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <img
            src={images[lightbox]}
            alt={`${serviceTitle} project ${lightbox + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(i);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === lightbox ? "bg-gold w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
