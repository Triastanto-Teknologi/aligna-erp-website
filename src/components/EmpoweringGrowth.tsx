import DashboardMockup from './DashboardMockup';

export default function EmpoweringGrowth() {
  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-[1280px] px-20">
        <div className="text-center">
          <h2 className="font-display text-[56px] font-extrabold leading-[1.1] text-ink">
            Empowering Growth Through Scalable Operations
          </h2>
          <p className="mx-auto mt-5 max-w-[1100px] text-xl leading-[1.8] text-ink">
            Aligna ERP menghadirkan sistem terpadu yang mampu beradaptasi dengan
            skala dan kompleksitas organisasi, memastikan efisiensi proses,
            visibilitas data yang menyeluruh, serta ketahanan operasional yang
            mendukung ekspansi berkelanjutan.
          </p>
        </div>

        {/* Floating dashboard on dark slab */}
        <div className="relative mt-16">
          <div className="absolute inset-x-0 top-12 mx-auto h-[480px] w-[1214px] max-w-full rounded-[50px] bg-navy-deep" />
          <div className="relative mx-auto h-[520px] w-[920px] max-w-full">
            <DashboardMockup />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-lg border-2 border-amber-cta bg-amber-cta px-12 py-5 text-2xl font-bold leading-6 tracking-[0.5px] text-amber-cta-text hover:brightness-105 transition"
          >
            Request Demo
          </a>
        </div>
      </div>
    </section>
  );
}
