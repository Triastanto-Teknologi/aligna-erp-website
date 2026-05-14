import DashboardMockup from './DashboardMockup';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-[200px] pb-32">
      {/* Decorative background curves */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full"
        viewBox="0 0 1440 454"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 280 C 240 120, 720 460, 1440 220 L1440 454 L0 454 Z"
          fill="white"
        />
      </svg>
      <svg
        className="pointer-events-none absolute -left-8 bottom-12 w-[1520px] opacity-30"
        viewBox="0 0 1520 422"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 200 C 320 60, 760 360, 1520 160"
          stroke="#1e40af"
          strokeWidth="2"
        />
      </svg>

      <div className="relative mx-auto max-w-[1280px] px-20">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="font-sans text-[64px] font-extrabold leading-[1.1] text-white">
            Integrated Business System
            <br />
            for Operational Excellence
          </h1>
          <p className="max-w-[1100px] text-[32px] font-light leading-[1.6] text-white">
            Solusi ERP terintegrasi untuk mengelola, mengontrol, dan
            mengoptimalkan seluruh proses bisnis dalam satu platform berbasis
            data.
          </p>
          <a
            href="#cta"
            className="mt-2 inline-flex items-center justify-center rounded-lg border-2 border-amber-cta bg-amber-cta px-12 py-5 text-2xl font-bold leading-6 tracking-[0.5px] text-amber-cta-text hover:brightness-105 transition"
          >
            Request Demo
          </a>
        </div>

        {/* Dashboard preview */}
        <div className="relative mx-auto mt-20 h-[727px] w-[1100px]">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
