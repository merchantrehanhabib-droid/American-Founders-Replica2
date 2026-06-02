import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import beasts from "@/assets/beasts.png";
import scifi from "@/assets/scifi.png";
import literary from "@/assets/literary.png";

export default function ManuscriptsGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    dragFree: false,
  });

  const books = [
    { img: hero1, title: "Deadly Secrets", author: "J.R. Black" },
    { img: hero2, title: "The Host", author: "Sarah Connor" },
    { img: hero3, title: "Harlan's Promise", author: "M.K. Davis" },
    { img: beasts, title: "The Sundered Dawn", author: "Ava Reid" },
    { img: scifi, title: "Rising Sun", author: "Kaizen Moore" },
    { img: literary, title: "The Final Act", author: "Elara Stone" },
  ];

  // Auto-scroll
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 3500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/bg-gallery.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light overlay so cards pop */}
      <div className="absolute inset-0 bg-white/92" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 md:px-6 mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy max-w-4xl mx-auto leading-tight">
            Discover The Many Manuscripts From Thriving Publishing Authors
          </h2>
        </div>

        <div className="relative px-4 md:px-14">
          {/* Prev button */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center shadow-xl hover:bg-gold hover:text-navy transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center shadow-xl hover:bg-gold hover:text-navy transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Gradient fades */}
          <div className="absolute left-14 top-0 bottom-0 w-16 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-14 top-0 bottom-0 w-16 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex py-8">
              {books.map((book, i) => (
                <div
                  key={i}
                  className="flex-[0_0_33.333%] min-w-0 px-4"
                >
                  <div className="transition-transform duration-300 hover:-translate-y-4 cursor-pointer">
                    <div className="shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] rounded-md overflow-hidden border-4 border-gray-100">
                      <img
                        src={book.img}
                        alt={book.title}
                        className="w-full h-[380px] object-cover"
                      />
                    </div>
                    <div className="mt-5 text-center">
                      <h3 className="font-serif font-bold text-xl text-navy">{book.title}</h3>
                      <p className="text-gray-500 font-medium mt-1">By {book.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
