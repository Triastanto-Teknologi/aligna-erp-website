import { ArrowRight } from 'lucide-react';
import DashboardMockup from './DashboardMockup';

export default function CTABanner() {
  return (
    <section id="cta" className="relative overflow-hidden bg-navy pt-16 pb-0 md:pt-20 lg:pt-24">
      {/* Decorative squiggle on the left */}
      <svg
        className="pointer-events-none absolute left-0 top-12 hidden w-[260px] md:block"
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
        className="pointer-events-none absolute right-0 top-16 hidden w-[260px] -scale-x-100 md:block"
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

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-12">
          <div className="max-w-[900px]">
            <p className="text-xs font-bold uppercase tracking-[3px] text-amber-cta sm:text-sm">
              Ready to optimize your business?
            </p>
            <h2 className="mt-4 font-sans text-[24px] font-extrabold leading-[1.2] text-white sm:text-[28px] md:text-[32px] xl:text-[40px] xl:leading-[1.15]">
              Mulai transformasi digital Anda dengan
              <br className="hidden lg:block" />
              {' '}
              sistem ERP yang terintegrasi dan scalable.
            </h2>
          </div>
          <a
            href="mailto:hello@alignaerp.io"
            className="mt-2 inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-amber-cta px-8 py-4 text-base font-bold leading-6 tracking-[0.5px] text-amber-cta-text hover:brightness-105 transition sm:w-auto sm:text-lg"
          >
            Request Demo
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="relative mx-auto mt-12 aspect-[1000/420] w-full max-w-[1000px] translate-y-8 md:mt-16 md:translate-y-12">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
