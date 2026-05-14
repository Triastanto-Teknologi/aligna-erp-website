import DashboardMockup from './DashboardMockup';

export default function CTABanner() {
  return (
    <section id="cta" className="relative overflow-hidden bg-navy pt-24 pb-0">
      <div className="mx-auto max-w-[1280px] px-20 text-center">
        <p className="text-base font-bold uppercase tracking-[3px] text-amber-cta">
          Ready to optimize your business?
        </p>
        <h2 className="mt-4 font-sans text-[56px] font-extrabold leading-[1.1] text-white">
          Mulai transformasi digital Anda dengan
          <br />
          sistem ERP yang terintegrasi dan scalable.
        </h2>
        <p className="mx-auto mt-5 max-w-[800px] text-xl leading-[1.6] text-white/80">
          Jadwalkan demo gratis dan temukan bagaimana AlignaERP mendukung
          pertumbuhan bisnis Anda.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="mailto:hello@alignaerp.io"
            className="inline-flex items-center justify-center rounded-lg border-2 border-amber-cta bg-amber-cta px-12 py-5 text-2xl font-bold leading-6 tracking-[0.5px] text-amber-cta-text hover:brightness-105 transition"
          >
            Request Demo
          </a>
        </div>

        <div className="relative mx-auto mt-16 h-[420px] w-[1000px] max-w-full translate-y-12">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
