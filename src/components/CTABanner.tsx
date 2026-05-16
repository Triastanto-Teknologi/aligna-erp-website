import { ArrowRight } from 'lucide-react';
import DashboardMockup from './DashboardMockup';

export default function CTABanner() {
  return (
    <section id="cta" className="relative overflow-hidden bg-navy pt-24 pb-0">
      {/* Decorative squiggle on the left */}
      <svg
        className="pointer-events-none absolute left-0 top-12 w-[260px]"
        viewBox="0 0 260 220"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-20 60 C 30 20, 80 140, 150 80 S 240 40, 270 120 S 200 220, 110 180"
          stroke="#2088ED"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      {/* Decorative squiggle on the right (mirrored) */}
      <svg
        className="pointer-events-none absolute right-0 top-16 w-[260px] -scale-x-100"
        viewBox="0 0 260 220"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-20 60 C 30 20, 80 140, 150 80 S 240 40, 270 120 S 200 220, 110 180"
          stroke="#2088ED"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto max-w-[1280px] px-20">
        <div className="flex items-start justify-between gap-12">
          <div className="max-w-[900px]">
            <p className="text-sm font-bold uppercase tracking-[3px] text-amber-cta">
              Ready to optimize your business?
            </p>
            <h2 className="mt-4 font-sans text-[40px] font-extrabold leading-[1.15] text-white">
              Mulai transformasi digital Anda dengan
              <br />
              sistem ERP yang terintegrasi dan scalable.
            </h2>
          </div>
          <a
            href="mailto:hello@alignaerp.io"
            className="mt-2 inline-flex shrink-0 items-center gap-3 rounded-lg bg-amber-cta px-8 py-4 text-lg font-bold leading-6 tracking-[0.5px] text-amber-cta-text hover:brightness-105 transition"
          >
            Request Demo
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="relative mx-auto mt-16 h-[420px] w-[1000px] max-w-full translate-y-12">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
