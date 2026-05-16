import {
  Calculator,
  ShoppingBag,
  Headphones,
  Cog,
  Users,
  FolderKanban,
  Wrench,
  BarChart3,
  FileText,
} from 'lucide-react';

const modules = [
  {
    icon: Calculator,
    title: 'Finance & Accounting',
    body: 'Buku besar, AR/AP, anggaran, dan laporan keuangan otomatis sesuai standar.',
  },
  {
    icon: ShoppingBag,
    title: 'Procurement & Supply Chain',
    body: 'Pengadaan, vendor, dan logistik dengan kontrol persetujuan multi-level.',
  },
  {
    icon: Headphones,
    title: 'Sales & Customer Management',
    body: 'Pipeline penjualan, quotation, faktur, dan layanan pelanggan terintegrasi.',
  },
  {
    icon: Cog,
    title: 'Manufacturing / Production',
    body: 'BOM, perencanaan produksi, dan kontrol kualitas dari order hingga delivery.',
  },
  {
    icon: Users,
    title: 'Human Capital Management',
    body: 'Karyawan, payroll, kehadiran, dan kinerja dalam satu platform HR modern.',
  },
  {
    icon: FolderKanban,
    title: 'Project Management',
    body: 'Perencanaan, timesheet, dan profitabilitas proyek dengan dashboard real-time.',
  },
  {
    icon: Wrench,
    title: 'Asset Management',
    body: 'Aset tetap, pemeliharaan, dan depresiasi dengan jadwal otomatis.',
  },
  {
    icon: BarChart3,
    title: 'Reporting & Business Intelligence',
    body: 'Dashboard, KPI, dan analitik untuk keputusan berbasis data.',
  },
  {
    icon: FileText,
    title: 'Document Management System (DMS) & Workflow Automation',
    body: 'Penyimpanan, versi, dan workflow dokumen dengan kontrol akses granular.',
  },
];

export default function CoreBusinessModules() {
  return (
    <section id="business-modules" className="bg-sky-50 py-16 md:py-20 lg:py-24">
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

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {modules.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl bg-sky-50 p-7 transition hover:bg-sky-100/80 hover:shadow-lg"
            >
              <div className="relative flex size-14 items-center justify-center rounded-xl bg-white transition group-hover:bg-sky-800">
                <Icon
                  size={28}
                  className="text-sky-800 transition group-hover:text-white"
                  strokeWidth={2.25}
                />
                <span
                  aria-hidden="true"
                  className="absolute -top-1 -right-1 size-3 rounded-full bg-amber-cta"
                />
              </div>
              <h3 className="mt-5 text-xl font-bold leading-tight text-ink">
                {title}
              </h3>
              <p className="mt-2 text-base leading-[1.6] text-ink-soft">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
