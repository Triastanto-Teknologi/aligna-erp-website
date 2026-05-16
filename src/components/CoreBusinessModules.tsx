import { useEffect, useRef, useState } from 'react';
import {
  Coins,
  Warehouse,
  Users,
  Factory,
  PersonStanding,
  Network,
  Server,
  BarChart3,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

const modules = [
  {
    icon: Coins,
    cardTitle: 'Finance & Accounting',
    title: 'Finance & Accounting',
    body: 'Mengelola transaksi keuangan terintegrasi dengan laporan real-time yang akurat serta mendukung kontrol dan kepatuhan audit.',
  },
  {
    icon: Warehouse,
    cardTitle: 'Procurement & Supply Chain',
    title: 'Procurement & Supply Chain',
    body: 'Mengelola pengadaan, vendor, dan distribusi barang secara terintegrasi untuk meningkatkan efisiensi dan transparansi operasional.',
  },
  {
    icon: Users,
    cardTitle: 'Sales & Customer Management',
    title: 'Sales & Customer Management',
    body: 'Mengelola penjualan dan hubungan pelanggan secara terintegrasi untuk meningkatkan konversi serta mendorong pertumbuhan revenue.',
  },
  {
    icon: Factory,
    cardTitle: 'Manufacturing / Production',
    title: 'Manufacturing / Production',
    body: 'Mengelola proses produksi dari perencanaan hingga eksekusi untuk memastikan efisiensi, kualitas, dan ketepatan output.',
  },
  {
    icon: PersonStanding,
    cardTitle: 'Human Capital Management',
    title: 'Human Capital Management',
    body: 'Mengelola siklus SDM dari rekrutmen hingga payroll secara terintegrasi untuk meningkatkan produktivitas dan efisiensi organisasi.',
  },
  {
    icon: Network,
    cardTitle: 'Project Management',
    title: 'Project Management',
    body: 'Mengelola perencanaan, biaya, dan progres proyek secara terintegrasi untuk memastikan eksekusi yang tepat dan terkontrol.',
  },
  {
    icon: Server,
    cardTitle: 'Asset Management',
    title: 'Asset Management',
    body: 'Mengelola aset perusahaan dari pencatatan hingga pemeliharaan secara terstruktur untuk memastikan utilisasi yang optimal.',
  },
  {
    icon: BarChart3,
    cardTitle: 'Reporting & Business Intelligence',
    title: 'Reporting & Business Intelligence',
    body: 'Menyediakan dashboard dan analitik berbasis data untuk mendukung pengambilan keputusan yang cepat dan akurat.',
  },
  {
    icon: Workflow,
    cardTitle: 'Document Management System & Workflow Automation',
    title: 'Document Management System (DMS) & Workflow Automation',
    body: 'Mengelola dokumen digital dan alur kerja otomatis untuk meningkatkan efisiensi, kontrol, serta kepatuhan proses.',
  },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView] as const;
}

type ModuleCardProps = {
  icon: LucideIcon;
  cardTitle: string;
  title: string;
  body: string;
  index: number;
};

function ModuleCard({ icon: Icon, cardTitle, title, body, index }: ModuleCardProps) {
  const [ref, inView] = useInView<HTMLElement>();
  const columnDelay = (index % 3) * 100;

  return (
    <article
      ref={ref}
      className={`group flex flex-col transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${columnDelay}ms` }}
    >
      <div className="relative aspect-[5/3] overflow-hidden rounded-2xl bg-sky-50 p-6 shadow-sm transition-all duration-300 ease-out will-change-transform group-hover:-translate-y-1 group-hover:shadow-xl group-hover:bg-sky-100/70 motion-reduce:transition-none motion-reduce:transform-none motion-reduce:hover:translate-y-0">
        <h3 className="relative z-10 max-w-[70%] font-sans text-[20px] font-extrabold leading-[1.15] text-navy sm:text-[22px] lg:text-[24px]">
          {cardTitle}
        </h3>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 size-16 origin-bottom-left rounded-tr-full bg-amber-cta transition-transform duration-500 ease-out group-hover:scale-125 motion-reduce:transition-none motion-reduce:transform-none"
        />
        <Icon
          aria-hidden="true"
          className="pointer-events-none absolute bottom-5 right-5 size-20 text-brand-blue transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 lg:size-24 motion-reduce:transition-none motion-reduce:transform-none"
          strokeWidth={1.75}
        />
      </div>
      <h4 className="mt-5 text-lg font-bold leading-tight text-ink">
        {title}
      </h4>
      <p className="mt-2 text-base leading-[1.6] text-ink-soft">{body}</p>
    </article>
  );
}

export default function CoreBusinessModules() {
  return (
    <section id="business-modules" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center">
          <h2 className="font-sans text-[28px] font-extrabold leading-[1.15] text-ink sm:text-[36px] md:text-[44px] xl:text-[56px] xl:leading-[1.1]">
            Core Business Modules
          </h2>
          <p className="mx-auto mt-5 max-w-[900px] text-base leading-[1.6] text-ink-soft md:text-lg xl:text-xl">
            Satu platform, sembilan modul inti yang saling terhubung untuk
            mengelola seluruh siklus operasional perusahaan.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <ModuleCard key={m.title} {...m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
