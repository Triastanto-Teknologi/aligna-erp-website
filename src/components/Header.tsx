import logo from '../assets/aligna-logo.png';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-20 py-6">
      <a href="#" className="flex items-center gap-1.5">
        <img src={logo} alt="AlignaERP" className="h-[46px] w-auto" />
      </a>
      <a
        href="#cta"
        className="text-base font-semibold leading-6 tracking-[0.5px] text-white hover:text-amber-cta transition-colors"
      >
        Request Demo
      </a>
    </header>
  );
}
