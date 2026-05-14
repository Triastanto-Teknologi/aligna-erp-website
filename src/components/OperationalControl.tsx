import { Link2, Activity, Zap, ShieldCheck } from 'lucide-react';

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
  {
    icon: ShieldCheck,
    title: 'Reliable & secure',
    body: 'Data terlindungi dengan standar keamanan enterprise.',
  },
];

export default function OperationalControl() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-20">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-sans text-[56px] font-extrabold leading-[1.1] text-ink">
            Operational Control, Simplified
          </h2>
          <p className="mt-6 text-xl leading-[1.8] text-ink">
            AlignaERP membantu perusahaan menyederhanakan proses kompleks melalui
            integrasi sistem, automasi workflow, dan visibilitas data real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex size-24 items-center justify-center rounded-full bg-sky-100">
                <Icon size={40} className="text-sky-800" strokeWidth={2.25} />
              </div>
              <h3 className="mt-4 text-2xl font-bold leading-tight text-ink">
                {title}
              </h3>
              <p className="mt-2 text-base leading-snug text-ink">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
