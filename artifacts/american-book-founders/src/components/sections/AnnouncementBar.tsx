import { Star } from "lucide-react";

function AnimatedFlag() {
  return (
    <span className="inline-flex items-center relative overflow-hidden" style={{ width: 28, height: 18 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 18"
        width="28"
        height="18"
        style={{
          animation: "flagWave 1.8s ease-in-out infinite",
          transformOrigin: "left center",
          display: "block",
        }}
      >
        {/* Red stripes */}
        {[0, 2, 4, 6, 8, 10, 12].map((y) => (
          <rect key={y} x="0" y={y * (18 / 13)} width="28" height={18 / 13} fill="#B22234" />
        ))}
        {/* White stripes */}
        {[1, 3, 5, 7, 9, 11].map((y) => (
          <rect key={y} x="0" y={y * (18 / 13)} width="28" height={18 / 13} fill="#FFFFFF" />
        ))}
        {/* Blue canton */}
        <rect x="0" y="0" width="11" height="9" fill="#3C3B6E" />
        {/* Stars (simplified — 3×3 grid of dots) */}
        {[1.8, 3.6, 5.4, 7.2, 9].map((cx) =>
          [1.5, 3, 4.5, 6, 7.5].map((cy) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.55" fill="#FFFFFF" />
          ))
        )}
      </svg>
      <style>{`
        @keyframes flagWave {
          0%   { transform: skewY(0deg) scaleX(1); }
          25%  { transform: skewY(-2deg) scaleX(0.97); }
          50%  { transform: skewY(0deg) scaleX(1); }
          75%  { transform: skewY(2deg) scaleX(0.97); }
          100% { transform: skewY(0deg) scaleX(1); }
        }
      `}</style>
    </span>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="bg-[#121212] text-white py-2 px-4 w-full flex items-center justify-center gap-3 text-sm font-medium">
      <AnimatedFlag />
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
        ))}
      </div>
      <span>Featuring Trust On Top Review Platforms</span>
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
        ))}
      </div>
      <AnimatedFlag />
    </div>
  );
}
