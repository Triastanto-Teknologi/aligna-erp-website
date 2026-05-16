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
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-20 lg:grid-cols-2">
        {/* Left: image with decorative tag overlay */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-6 -top-6 size-24 rounded-tr-[40px] bg-amber-cta/90"
          />
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            alt="Tim AlignaERP berkolaborasi"
            className="relative h-[420px] w-full rounded-[24px] object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 left-6 max-w-[260px] rounded-xl bg-white p-4 shadow-lg ring-1 ring-slate-200">
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
          <h2 className="font-sans text-[56px] font-extrabold leading-[1.1] text-ink">
            Operational Control,
            <br />
            Simplified
          </h2>
          <p className="mt-6 text-lg leading-[1.7] text-ink-soft">
            AlignaERP membantu perusahaan menyederhanakan proses kompleks melalui
            integrasi sistem, automasi workflow, dan visibilitas data real-time.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-8">
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
