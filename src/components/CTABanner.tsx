import { ArrowRight } from 'lucide-react';
import DashboardMockup from './DashboardMockup';

export default function CTABanner() {
  return (
    <section id="cta" className="relative overflow-hidden bg-navy pt-24 pb-0">
      <div className="mx-auto max-w-[1280px] px-20">
        <div className="flex items-start justify-between gap-12">
          <div className="max-w-[760px]">
            <p className="text-sm font-bold uppercase tracking-[3px] text-amber-cta">
              Ready to optimize your business?
            </p>
            <h2 className="mt-4 font-sans text-[48px] font-extrabold leading-[1.15] text-white">
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
