import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-navy rounded flex items-center justify-center overflow-hidden">
            <div className="w-5 h-5 bg-gold rotate-45 transform group-hover:rotate-90 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl leading-tight text-navy">American Book</span>
            <span className="font-sans text-xs font-semibold tracking-widest text-gray-500 uppercase leading-none">Founders</span>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {['About Us', 'Services', 'Portfolio', 'Contact', 'Blog'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-gray-700 hover:text-gold transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Button className="bg-gold hover:bg-gold-hover text-navy font-bold px-6 py-6 rounded-md shadow-[0_4px_14px_0_rgba(245,197,24,0.39)] hover:shadow-[0_6px_20px_rgba(245,197,24,0.23)] hover:-translate-y-0.5 transition-all">
            Contact With Our Expert
          </Button>
        </div>
      </div>
    </nav>
  );
}
