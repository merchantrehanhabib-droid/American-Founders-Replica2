import { Star } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#121212] text-white py-2 px-4 w-full flex items-center justify-center space-x-2 text-sm font-medium">
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
        ))}
      </div>
      <span>Featuring Trust On Top Review Platforms</span>
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
        ))}
      </div>
    </div>
  );
}
