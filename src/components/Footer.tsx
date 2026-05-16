import logo from '../assets/aligna-logo-dark.svg';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center gap-6 px-20 py-6">
        <img src={logo} alt="AlignaERP" className="h-[41px] w-[139px]" />
        <p className="text-sm text-ink-soft">
          @ {new Date().getFullYear()} PT Triastanto Teknologi Indonesia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
