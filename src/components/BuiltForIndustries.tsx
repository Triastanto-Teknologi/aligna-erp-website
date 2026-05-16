const industries = [
  {
    title: 'Manufacturing',
    body: 'Optimalkan kontrol produksi, perencanaan material, dan efisiensi proses untuk meningkatkan output dan menekan biaya operasional.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Retail & Distribution',
    body: 'Mengintegrasikan penjualan, manajemen stok, dan distribusi untuk memastikan ketersediaan barang serta kelancaran supply chain.',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Trading/General Trading',
    body: 'Menyederhanakan proses pembelian, penjualan, dan pengelolaan stok dalam satu sistem terpusat untuk meningkatkan kontrol margin dan arus kas.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Professional Services',
    body: 'Mendukung pengelolaan proyek, alokasi resource, dan billing secara terstruktur untuk meningkatkan produktivitas dan profitabilitas layanan.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Construction & Project Based',
    body: 'Mengelola proyek, anggaran, timeline, dan resource secara terintegrasi untuk memastikan eksekusi yang tepat waktu dan terkendali.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Education & Foundation',
    body: 'Mengintegrasikan operasional, keuangan, dan tata kelola institusi dalam satu sistem untuk meningkatkan transparansi dan efisiensi.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
];

export default function BuiltForIndustries() {
  return (
    <section id="industries" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center">
          <h2 className="font-sans text-[28px] font-extrabold leading-[1.15] text-ink sm:text-[36px] md:text-[44px] xl:text-[56px] xl:leading-[1.1]">
            Built for Various Industries
          </h2>
          <p className="mx-auto mt-5 max-w-[900px] text-base leading-[1.6] text-ink-soft md:text-lg xl:text-xl">
            Dirancang untuk berbagai industri dengan kebutuhan operasional yang
            kompleks, menghadirkan integrasi sistem yang fleksibel, efisien, dan
            terukur guna mendukung kontrol proses, peningkatan produktivitas,
            serta pertumbuhan bisnis yang berkelanjutan.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ title, body, image }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-[180px] overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-sky-800">{title}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-ink-soft">
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
