export default function BrandText({ compact = false, variant = 'header', showLogo = true }) {
  const sizeClass =
    variant === 'hero'
      ? 'text-2xl md:text-3xl'
      : compact
        ? 'text-2xl'
        : 'text-4xl xl:text-5xl';

  const tierraClass =
    variant === 'hero' ? 'text-white' : variant === 'footer' ? 'text-white' : 'text-black';

  const azulClass =
    variant === 'hero' ? 'text-limeSoft' : variant === 'footer' ? 'text-limeSoft' : 'text-[#1554d1]';

  const suffixClass =
    variant === 'hero' ? 'text-white/90' : variant === 'footer' ? 'text-white/90' : 'text-black';

  return (
    <div className={`flex items-center gap-3 leading-none ${variant === 'hero' ? 'justify-start' : ''}`}>
      {showLogo && (
        <img
          src="/logo-tierra-azul-transparent.png"
          alt="Tierra Azul 1981"
          className={`${compact ? 'h-12 w-12' : 'h-16 w-16 xl:h-20 xl:w-20'} shrink-0 object-contain`}
        />
      )}
      <div className={`brand-mistral brand-title-motion whitespace-nowrap font-black uppercase ${sizeClass}`}>
        <span className={tierraClass}>TIERRA </span>
        <span className={azulClass}>AZUL</span>
        <span className={suffixClass}> 1981 S.A</span>
      </div>
    </div>
  );
}
