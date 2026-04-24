export default function BrandLogo({ size = 'md' }) {
  const sizes = {
    sm: { shield: 40, text: 'text-sm' },
    md: { shield: 56, text: 'text-lg' },
    lg: { shield: 80, text: 'text-2xl' },
    xl: { shield: 120, text: 'text-4xl' },
  };
  const s = sizes[size] || sizes.md;

  return (
    <div className="flex flex-col items-center gap-1">
      <div style={{ width: s.shield, height: s.shield }} className="relative">
        <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
          {/* Shield */}
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D5A27" />
              <stop offset="100%" stopColor="#3a7232" />
            </linearGradient>
            <linearGradient id="shieldGrad2" x1="0%" y1="60%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E4620" />
              <stop offset="100%" stopColor="#2D5A27" />
            </linearGradient>
          </defs>
          <path d="M50 2 L92 18 L92 55 Q92 85 50 108 Q8 85 8 55 L8 18 Z" fill="url(#shieldGrad)" />
          <path d="M50 65 Q20 75 12 58 L12 55 Q12 82 50 103 Q88 82 88 55 L88 58 Q80 75 50 65Z" fill="url(#shieldGrad2)" opacity="0.7"/>
          {/* Lungs */}
          <g transform="translate(22, 22)">
            {/* Trachea */}
            <rect x="26" y="0" width="4" height="14" rx="2" fill="white" opacity="0.9"/>
            {/* Left lung */}
            <path d="M28 14 Q14 16 10 28 Q6 40 12 52 Q18 60 28 58 L28 14Z" fill="white" opacity="0.85"/>
            {/* Right lung */}
            <path d="M28 14 Q42 16 46 28 Q50 40 44 52 Q38 60 28 58 L28 14Z" fill="white" opacity="0.85"/>
            {/* Left leaf */}
            <path d="M14 28 Q8 18 16 14 Q22 20 14 28Z" fill="#D4E6D5"/>
            {/* Right leaf */}
            <path d="M42 28 Q48 18 40 14 Q34 20 42 28Z" fill="#D4E6D5"/>
            {/* Sparkles */}
            <circle cx="8" cy="20" r="1.5" fill="white" opacity="0.7"/>
            <circle cx="48" cy="22" r="1.5" fill="white" opacity="0.7"/>
            <circle cx="6" cy="34" r="1" fill="white" opacity="0.5"/>
            <circle cx="50" cy="36" r="1" fill="white" opacity="0.5"/>
          </g>
        </svg>
      </div>
      <div className={`font-bold ${s.text} tracking-tight`}>
        <span className="text-brand-forest">Breathe</span>
        <span style={{ color: '#3a7232' }}>Safe</span>
      </div>
    </div>
  );
}