import DashboardMockup from './DashboardMockup';
import BookDemoButton from './BookDemoButton';

export default function EmpoweringGrowth() {
  return (
    <section id="platform-overview" className="relative bg-white py-12 md:py-14 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center">
          <h2 className="font-display text-[28px] font-extrabold leading-[1.15] text-ink sm:text-[36px] md:text-[44px] xl:text-[56px] xl:leading-[1.1]">
            Empowering Growth Through Scalable Operations
          </h2>
          <p className="mx-auto mt-5 max-w-[1100px] text-base leading-[1.7] text-ink md:text-lg xl:text-xl xl:leading-[1.8]">
            Aligna ERP menghadirkan sistem terpadu yang mampu beradaptasi dengan
            skala dan kompleksitas organisasi, memastikan efisiensi proses,
            visibilitas data yang menyeluruh, serta ketahanan operasional yang
            mendukung ekspansi berkelanjutan.
          </p>
        </div>

        {/* Floating dashboard on dark slab */}
        <div className="relative mt-10 md:mt-12 lg:mt-16">
          <div className="absolute inset-x-0 top-6 mx-auto h-[70%] w-full max-w-[1214px] rounded-[28px] bg-navy-deep sm:top-8 md:rounded-[40px] lg:top-12 lg:h-[480px] lg:rounded-[50px]" />
          <div className="relative mx-auto aspect-[920/560] w-full max-w-[920px]">
            <DashboardMockup />
          </div>
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <BookDemoButton className="inline-flex items-center justify-center rounded-lg border-2 border-amber-cta bg-amber-cta px-8 py-4 text-lg font-bold leading-6 tracking-[0.5px] text-amber-cta-text hover:brightness-105 transition sm:px-10 sm:py-5 sm:text-xl xl:px-12 xl:text-2xl">
            Request Demo
          </BookDemoButton>
        </div>
      </div>
    </section>
  );
}
