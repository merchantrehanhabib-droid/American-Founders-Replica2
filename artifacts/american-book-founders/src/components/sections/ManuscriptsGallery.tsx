import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import beasts from "@/assets/beasts.png";
import scifi from "@/assets/scifi.png";
import literary from "@/assets/literary.png";

export default function ManuscriptsGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    dragFree: true
  });

  const books = [
    { img: hero1, title: "Deadly Secrets", author: "J.R. Black" },
    { img: hero2, title: "The Host", author: "Sarah Connor" },
    { img: hero3, title: "Harlan's Promise", author: "M.K. Davis" },
    { img: beasts, title: "Attack of the Beasts", author: "David Thorne" },
    { img: scifi, title: "Rising Sun", author: "Alan Turing" },
    { img: literary, title: "The Final Act", author: "Emma Stone" },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy max-w-4xl mx-auto leading-tight">
          Discover The Many Manuscripts From Thriving Publishing Authors
        </h2>
      </div>

      <div className="relative">
        {/* Gradient fades for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8 py-8 px-4">
            {books.map((book, i) => (
              <div 
                key={i} 
                className="flex-[0_0_280px] min-w-0 transition-transform duration-300 hover:-translate-y-4"
              >
                <div className="shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] rounded-md overflow-hidden border-4 border-gray-100">
                  <img src={book.img} alt={book.title} className="w-full h-[400px] object-cover" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-serif font-bold text-xl text-navy">{book.title}</h3>
                  <p className="text-gray-500 font-medium">By {book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
