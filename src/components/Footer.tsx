import logo from '../assets/aligna-logo-dark.svg';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-3 px-4 py-6 sm:flex-row sm:items-center sm:gap-6 sm:px-6 lg:px-12 xl:px-20">
        <img src={logo} alt="AlignaERP" className="h-[41px] w-[139px]" />
        <p className="text-sm text-ink-soft">
          @ {new Date().getFullYear()} PT Triastanto Teknologi Indonesia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
