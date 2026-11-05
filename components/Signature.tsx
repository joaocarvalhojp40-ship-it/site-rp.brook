export default function Signature({ label }: { label: string }) {
  return (
    <svg
      viewBox="-24 -44 690 220"
      role="img"
      aria-label={label}
      className="h-auto w-full overflow-visible"
    >
      <defs>
        <filter id="brush-rough" x="-5%" y="-10%" width="110%" height="125%">
          <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <g filter="url(#brush-rough)">
        <g transform="skewX(-6)">
          <path d="M4 42 L56 30 L68 46 L66 62 L26 66 L28 78 L60 76 L66 88 L10 98 L2 60 Z M22 48 L48 44 L50 56 L24 58 Z" className="fill-red-600 transition-colors duration-300 group-hover:fill-[#FF002B]" fillRule="evenodd" transform="rotate(-2 36 60)" />
          <path d="M102 -12 L124 -16 L132 98 L108 102 Z" className="fill-red-600 transition-colors duration-300 group-hover:fill-[#FF002B]" fillRule="evenodd" transform="rotate(1.5 109 60)" />
          <path d="M180 28 L204 24 L202 106 L160 130 L154 114 L182 98 Z M184 0 L204 -4 L206 12 L186 16 Z" className="fill-red-600 transition-colors duration-300 group-hover:fill-[#FF002B]" fillRule="evenodd" transform="rotate(-1 178 60)" />
          <path d="M228 38 L280 28 L290 50 L284 94 L230 100 L222 62 Z M244 52 L268 48 L270 80 L244 84 Z" className="fill-red-600 transition-colors duration-300 group-hover:fill-[#FF002B]" fillRule="evenodd" transform="rotate(2 258 60)" />
          <path d="M312 38 L352 30 L356 10 L378 6 L374 100 L314 100 L306 62 Z M328 52 L352 48 L354 82 L328 84 Z" className="fill-red-600 transition-colors duration-300 group-hover:fill-[#FF002B]" fillRule="evenodd" transform="rotate(-1.5 344 60)" />
          <path d="M400 38 L452 28 L462 50 L456 94 L402 100 L394 62 Z M416 52 L440 48 L442 80 L416 84 Z" className="fill-red-600 transition-colors duration-300 group-hover:fill-[#FF002B]" fillRule="evenodd" transform="rotate(1 430 60)" />
          <path d="M484 38 L536 28 L550 30 L546 108 L494 134 L486 118 L524 104 L486 100 L478 62 Z M500 52 L524 48 L526 84 L500 86 Z" className="fill-red-600 transition-colors duration-300 group-hover:fill-[#FF002B]" fillRule="evenodd" transform="rotate(-2 516 60)" />
          <path d="M572 38 L624 28 L638 30 L634 108 L582 134 L574 118 L612 104 L574 100 L566 62 Z M588 52 L612 48 L614 84 L588 86 Z" className="fill-red-600 transition-colors duration-300 group-hover:fill-[#FF002B]" fillRule="evenodd" transform="rotate(1.5 604 60)" />

          {/* riscos brancos de pincel */}
          <g fill="#ffffff" opacity="0.92">
            <polygon points="-14,24 44,14 46,19 -10,29" />
            <polygon points="176,-30 218,-34 217,-29 178,-25" />
            <polygon points="246,118 300,110 301,114 248,123" />
            <polygon points="452,30 492,22 493,27 454,35" />
            <polygon points="548,118 604,108 605,113 550,123" />
          </g>

          {/* traço de pincel sob o nome */}
          <path
            d="M -10 156 C 140 140 330 166 656 126 C 640 134 330 168 140 160 C 70 158 20 160 -10 156 Z"
            className="fill-red-600 transition-colors duration-300 group-hover:fill-[#FF002B]"
          />
          <path d="M 120 170 C 260 160 420 168 560 146 L 560 150 C 420 174 260 168 120 174 Z" fill="#ffffff" opacity="0.9" />
        </g>
      </g>
    </svg>
  );
}
