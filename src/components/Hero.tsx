import DashboardMockup from './DashboardMockup';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-brand pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 lg:pt-[200px] lg:pb-32">
      {/* Soft radial glows — mirrors the login split brand panel */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(800px 460px at 85% 5%, rgba(84,184,240,0.22), transparent 65%), radial-gradient(620px 420px at 0% 35%, rgba(27,111,216,0.28), transparent 60%)',
        }}
      />

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

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
          <h1 className="font-sans text-[32px] font-extrabold leading-[1.15] text-white sm:text-[40px] md:text-[48px] xl:text-[64px] xl:leading-[1.1]">
            Integrated Business System
            <br className="hidden lg:block" />
            {' '}
            for Operational Excellence
          </h1>
          <p className="max-w-[1100px] text-base font-light leading-relaxed text-white sm:text-lg md:text-xl xl:text-[32px] xl:leading-[1.6]">
            Solusi ERP terintegrasi untuk mengelola, mengontrol, dan
            mengoptimalkan seluruh proses bisnis dalam satu platform berbasis
            data.
          </p>
          <a
            href="#cta"
            className="mt-2 inline-flex items-center justify-center rounded-lg border-2 border-amber-cta bg-amber-cta px-8 py-4 text-lg font-bold leading-6 tracking-[0.5px] text-amber-cta-text hover:brightness-105 transition sm:px-10 sm:py-5 sm:text-xl xl:px-12 xl:text-2xl"
          >
            Request Demo
          </a>
        </div>

        {/* Dashboard preview */}
        <div className="relative mx-auto mt-12 aspect-[1100/680] w-full max-w-[1100px] md:mt-16 lg:mt-20">
          <svg
            className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 translate-y-[110%] w-screen max-w-none"
            viewBox="0 0 1440 425"
            fill="none"
            overflow="visible"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M122.412 240.398C24.9415 266.962 -0.894173 346.818 69.4281 386.974C139.75 427.13 151.05 357.564 19.6304 199.58C-66.0316 114.45 -63.3987 -66.5793 151.05 28.2893C419.11 146.875 963.934 215.266 1086.65 121.778C1184.82 46.987 1295.82 90.6148 1339.04 121.778C1390.03 158.535 1436 274.245 1280.73 377.145C1086.65 505.769 1083.17 328.832 1255.49 301.225C1393.35 279.139 1467.27 325.904 1487 352.047"
              stroke="#2088ED"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="relative z-10 h-full w-full">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
