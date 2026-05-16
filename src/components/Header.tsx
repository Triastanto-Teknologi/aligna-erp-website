import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/aligna-logo.svg';

const navItems = [
  { label: 'Solutions', href: '#solution' },
  { label: 'Platform Overview', href: '#platform-overview' },
  { label: 'Client Success', href: '#client-success' },
  { label: 'Industries', href: '#industries' },
  { label: 'Business Modules', href: '#business-modules' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-12 lg:py-6 xl:px-20">
        <a href="#" className="flex items-center gap-1.5">
          <img src={logo} alt="AlignaERP" className="h-10 w-auto lg:h-[46px]" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
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
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="inline-flex size-11 items-center justify-center rounded-md text-white hover:bg-white/10 transition lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full z-30 bg-navy shadow-lg lg:hidden">
          <nav className="flex flex-col px-4 pt-2 pb-6 sm:px-6">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-4 text-lg font-semibold tracking-[0.3px] text-white border-b border-white/10 hover:text-amber-cta transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-6 flex h-12 w-full items-center justify-center rounded-lg border border-white bg-white text-base font-semibold leading-6 tracking-[0.5px] text-ink hover:bg-mist transition-colors"
            >
              Request Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
