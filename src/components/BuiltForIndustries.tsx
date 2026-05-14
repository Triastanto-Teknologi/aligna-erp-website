import {
  Factory,
  Store,
  Truck,
  Briefcase,
  HardHat,
  Boxes,
} from 'lucide-react';

const industries = [
  {
    icon: Factory,
    title: 'Manufacturing',
    body: 'Optimalkan produksi, kontrol kualitas, dan rantai pasok dalam satu sistem terpadu.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Store,
    title: 'Retail & Distribution',
    body: 'Kelola inventaris multi-cabang, point-of-sale, dan analitik penjualan secara real-time.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Truck,
    title: 'Trading & General Trading',
    body: 'Otomatisasi proses pengadaan, pergudangan, dan distribusi lintas wilayah.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    body: 'Pantau proyek, utilisasi tim, dan profitabilitas klien dengan dasbor terintegrasi.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: HardHat,
    title: 'Construction & Project Based',
    body: 'Kontrol anggaran, milestone, dan vendor untuk setiap proyek dari satu platform.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Boxes,
    title: 'Wholesale & Distribution',
    body: 'Visibilitas stok dan harga di seluruh jaringan distribusi dan logistik.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
];

export default function BuiltForIndustries() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-[1280px] px-20">
        <div className="text-center">
          <h2 className="font-sans text-[56px] font-extrabold leading-[1.1] text-white">
            Built For Various Industries
          </h2>
          <p className="mx-auto mt-5 max-w-[900px] text-xl leading-[1.6] text-white/80">
            AlignaERP melayani berbagai industri dengan workflow yang dapat
            disesuaikan, memberikan kontrol dan visibilitas penuh pada setiap
            proses bisnis Anda.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, title, body, image }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <div className="relative h-[180px] overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/80" />
                <div className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-full bg-amber-cta">
                  <Icon size={24} className="text-amber-cta-text" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-white/75">
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
