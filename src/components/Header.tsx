import logo from '../assets/aligna-logo.png';

const navItems = [
  'Solutions',
  'Platform Overview',
  'Client Success',
  'Industries',
  'Business Modules',
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-20 py-6">
      <a href="#" className="flex items-center gap-1.5">
        <img src={logo} alt="AlignaERP" className="h-[46px] w-auto" />
      </a>
      <nav className="flex items-start gap-4">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="px-2 py-3 text-base font-semibold leading-6 tracking-[0.5px] text-white whitespace-nowrap hover:text-amber-cta transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
      <a
        href="#cta"
        className="flex items-center justify-center rounded-lg border border-white bg-white px-7 py-3 text-base font-semibold leading-6 tracking-[0.5px] text-navy hover:bg-amber-cta hover:border-amber-cta transition-colors"
      >
        Request Demo
      </a>
    </header>
  );
}
