import { Link2, Activity, Zap } from 'lucide-react';

const features = [
  {
    icon: Link2,
    title: 'End-to-end integration',
    body: 'Proses bisnis terhubung dalam satu sistem terpadu.',
  },
  {
    icon: Activity,
    title: 'Real-time monitoring',
    body: 'Pantau operasional dan performa secara langsung.',
  },
  {
    icon: Zap,
    title: 'Workflow automation',
    body: 'Otomatisasi proses untuk efisiensi dan akurasi.',
  },
];

export default function OperationalControl() {
  return (
    <section id="solution" className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-4 sm:px-6 md:gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12 xl:grid-cols-[600px_600px] xl:px-0">
        {/* Left: image with decorative tag overlay */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute -right-6 -bottom-6 size-24 rounded-bl-[40px] bg-amber-cta/90"
          />
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
            alt="Tim AlignaERP berkolaborasi"
            className="relative aspect-[600/420] w-full rounded-[24px] object-cover shadow-xl lg:aspect-auto lg:h-[420px]"
          />
          <div className="absolute -top-6 left-4 max-w-[220px] rounded-xl bg-white p-4 shadow-lg ring-1 ring-slate-200 sm:left-6 sm:max-w-[260px]">
            <p className="text-xs font-bold uppercase tracking-[2px] text-sky-800">
              Key Capability
            </p>
            <p className="mt-1 text-sm font-bold leading-tight text-ink">
              Operational Control, Simplified
            </p>
            <p className="mt-1 text-xs leading-snug text-ink-soft">
              AlignaERP menyederhanakan proses kompleks melalui sistem, otomasi,
              dan visibilitas data real-time.
            </p>
          </div>
        </div>

        {/* Right: heading + features */}
        <div>
          <h2 className="font-sans text-[28px] font-extrabold leading-[1.15] text-ink sm:text-[36px] md:text-[44px] xl:text-[56px] xl:leading-[1.1]">
            Operational Control,
            <br className="hidden sm:block" />
            {' '}
            Simplified
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-ink-soft sm:mt-6 sm:text-lg">
            AlignaERP membantu perusahaan menyederhanakan proses kompleks melalui
            integrasi sistem, automasi workflow, dan visibilitas data real-time.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:mt-10">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-sky-100">
                  <Icon size={28} className="text-sky-800" strokeWidth={2.25} />
                </div>
                <h3 className="mt-3 text-base font-bold leading-tight text-ink">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-snug text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
