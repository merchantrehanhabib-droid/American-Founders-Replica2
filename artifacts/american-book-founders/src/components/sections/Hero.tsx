import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";

export default function Hero() {
  return (
    <section className="relative bg-navy text-white pt-24 pb-32 overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-20 left-10 text-gold/20 animate-pulse">
        <Star className="w-12 h-12 fill-current" />
      </div>
      <div className="absolute bottom-20 left-1/4 text-gold/20 animate-pulse delay-700">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute top-40 right-20 text-gold/20 animate-pulse delay-1000">
        <Star className="w-16 h-16 fill-current" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Control Your Work, Share Your Voice, And Keep <span className="text-gold">100% Of Your Royalties</span> Of Your Story
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 font-medium">
              Fostering Trust On Top Review Platforms
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              {/* Trust Badges */}
              <div className="flex bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                <div className="flex flex-col border-r border-white/20 pr-4">
                  <span className="text-xs text-gray-300 font-semibold mb-1">Goodreads</span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-lg">4.9</span>
                    <Star className="w-4 h-4 fill-gold text-gold" />
                  </div>
                  <span className="text-[10px] text-gray-400">700+ reviews</span>
                </div>
                <div className="flex flex-col pl-4">
                  <span className="text-xs text-gray-300 font-semibold mb-1">Google</span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-lg">4.8</span>
                    <Star className="w-4 h-4 fill-gold text-gold" />
                  </div>
                  <span className="text-[10px] text-gray-400">Verified</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gold hover:bg-gold-hover text-navy font-bold text-lg px-8 h-14 rounded-md">
                Get A Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white font-bold text-lg px-8 h-14 rounded-md">
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right Content - Book Covers */}
          <div className="relative h-[600px] hidden lg:block perspective-1000">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
              
              {/* Left Book */}
              <div className="absolute left-0 z-10 w-64 h-96 shadow-2xl transition-transform hover:-translate-y-4 hover:rotate-2 duration-500 rounded-md overflow-hidden transform -rotate-12 -translate-x-12 mt-12 border-4 border-white/10">
                <img src={hero1} alt="Thriller Book" className="w-full h-full object-cover" />
              </div>
              
              {/* Right Book */}
              <div className="absolute right-0 z-10 w-64 h-96 shadow-2xl transition-transform hover:-translate-y-4 hover:-rotate-2 duration-500 rounded-md overflow-hidden transform rotate-12 translate-x-12 mt-12 border-4 border-white/10">
                <img src={hero2} alt="Fantasy Book" className="w-full h-full object-cover" />
              </div>

              {/* Center Book (Top) */}
              <div className="absolute z-20 w-72 h-[420px] shadow-3xl transition-transform hover:-translate-y-6 duration-500 rounded-md overflow-hidden border-4 border-gold/30 -mt-12">
                <img src={hero3} alt="Romance Book" className="w-full h-full object-cover" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
