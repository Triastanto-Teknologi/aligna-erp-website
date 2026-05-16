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
        <div className="relative mx-auto mt-20 h-[900px] w-[1100px]">
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
