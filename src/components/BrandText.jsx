export default function BrandText({ compact = false, variant = 'header', showLogo = true }) {
  const sizeClass = compact
    ? 'text-[clamp(0.95rem,3.6vw,1.5rem)] leading-tight sm:text-2xl'
    : variant === 'hero'
      ? 'text-2xl md:text-3xl'
      : 'text-[clamp(1.75rem,4.5vw,3rem)] xl:text-5xl';

  const tierraClass =
    variant === 'hero' ? 'text-white' : variant === 'footer' ? 'text-white' : 'text-black';

  const azulClass =
    variant === 'hero' ? 'text-limeSoft' : variant === 'footer' ? 'text-limeSoft' : 'text-[#1554d1]';

  const suffixClass =
    variant === 'hero' ? 'text-white/90' : variant === 'footer' ? 'text-white/90' : 'text-black';

  return (
    <div
      className={`flex min-w-0 max-w-full items-center gap-1.5 leading-none sm:gap-3 ${
        variant === 'hero' ? 'justify-start' : ''
      }`}
    >
      {showLogo && (
        <img
          src="/logo-tierra-azul-transparent.png"
          alt="Tierra Azul 1981"
          className={`${
            compact ? 'h-9 w-9 sm:h-12 sm:w-12' : 'h-14 w-14 sm:h-16 sm:w-16 xl:h-20 xl:w-20'
          } shrink-0 object-contain`}
        />
      )}
      <div
        className={`brand-mistral brand-title-motion min-w-0 font-black uppercase ${sizeClass} ${
          compact ? 'max-w-[calc(100vw-7rem)] sm:max-w-none' : ''
        }`}
      >
        <span className={tierraClass}>TIERRA </span>
        <span className={azulClass}>AZUL</span>
        <span className={`${suffixClass} ${compact ? 'hidden min-[400px]:inline' : ''}`}> 1981 S.A</span>
      </div>
    </div>
  );
}
