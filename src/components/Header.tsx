import logo from '../assets/aligna-logo.svg';

const navItems = [
  { label: 'Solutions', href: '#solution' },
  { label: 'Platform Overview', href: '#platform-overview' },
  { label: 'Client Success', href: '#client-success' },
  { label: 'Industries', href: '#industries' },
  { label: 'Business Modules', href: '#business-modules' },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-20 py-6">
      <a href="#" className="flex items-center gap-1.5">
        <img src={logo} alt="AlignaERP" className="h-[46px] w-auto" />
      </a>
      <nav className="flex items-center gap-8">
        {navItems.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="text-base font-semibold leading-6 tracking-[0.3px] text-white hover:text-amber-cta transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>
      <a
        href="#cta"
        className="flex h-[48px] w-[175px] items-center justify-center rounded-lg border border-white bg-white text-base font-semibold leading-6 tracking-[0.5px] text-ink hover:bg-mist transition-colors"
      >
        Request Demo
      </a>
    </header>
  );
}
