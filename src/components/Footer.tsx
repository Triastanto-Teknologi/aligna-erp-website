import logo from '../assets/aligna-logo.png';

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-20 py-6">
        <img src={logo} alt="AlignaERP" className="h-10 w-auto" />
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} AlignaERP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
