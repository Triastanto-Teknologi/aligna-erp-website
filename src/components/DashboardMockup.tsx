import {
  LayoutDashboard,
  TrendingUp,
  ShoppingCart,
  Wallet,
  Users,
  Box,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function DashboardMockup({ className = '' }: { className?: string }) {
  return (
    <div
      className={
        'flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_0_10px_0_rgba(0,0,0,0.07)] ' +
        className
      }
    >
      {/* Browser top bar */}
      <div className="relative flex h-[41px] shrink-0 items-center gap-7 px-4 py-2">
        <div className="flex flex-1 gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="absolute left-1/2 top-2 flex -translate-x-1/2 items-center justify-center rounded-md bg-mist px-2 py-1">
          <p className="text-xs text-ink-muted">app.alignaerp.io</p>
        </div>
        <div className="flex flex-1 items-center justify-end gap-1.5">
          <ChevronLeft size={20} className="text-ink-muted" />
          <ChevronRight size={20} className="text-ink-muted" />
        </div>
      </div>

      {/* App body */}
      <div className="flex flex-1 bg-sky-50">
        {/* Sidebar */}
        <aside className="flex w-[140px] shrink-0 flex-col gap-2 bg-white p-4 border-r border-slate-100">
          <div className="mb-2 text-xs font-bold text-ink">AlignaERP</div>
          {[
            { i: LayoutDashboard, label: 'Dashboard', active: true },
            { i: TrendingUp, label: 'Sales' },
            { i: ShoppingCart, label: 'Purchase' },
            { i: Wallet, label: 'Finance' },
            { i: Users, label: 'HR' },
            { i: Box, label: 'Inventory' },
          ].map(({ i: Icon, label, active }) => (
            <div
              key={label}
              className={
                'flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ' +
                (active
                  ? 'bg-sky-100 text-sky-800 font-semibold'
                  : 'text-ink-soft')
              }
            >
              <Icon size={14} />
              {label}
            </div>
          ))}
        </aside>

        {/* Main content */}
        <main className="flex flex-1 flex-col gap-3 p-5">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Revenue', value: 'Rp 2.4B', delta: '+12.5%', accent: 'text-emerald-500' },
              { label: 'Orders', value: '1,284', delta: '+8.2%', accent: 'text-emerald-500' },
              { label: 'Active SKUs', value: '5,720', delta: '+3.1%', accent: 'text-sky-500' },
            ].map((k) => (
              <div key={k.label} className="rounded-lg bg-white p-3 shadow-sm">
                <p className="text-[10px] text-ink-muted">{k.label}</p>
                <p className="mt-0.5 text-sm font-bold text-ink">{k.value}</p>
                <p className={'mt-1 flex items-center gap-1 text-[10px] font-semibold ' + k.accent}>
                  <ArrowUpRight size={10} /> {k.delta}
                </p>
              </div>
            ))}
          </div>

          {/* Chart placeholder */}
          <div className="flex flex-1 gap-3">
            <div className="flex flex-1 flex-col rounded-lg bg-white p-3 shadow-sm">
              <p className="text-[11px] font-semibold text-ink">Monthly Performance</p>
              <div className="mt-2 flex flex-1 items-end gap-2">
                {[40, 65, 55, 80, 70, 90, 60, 95, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-sky-200 to-sky-500"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-[120px] flex-col gap-2 rounded-lg bg-white p-3 shadow-sm">
              <p className="text-[11px] font-semibold text-ink">Modules</p>
              <div className="flex flex-1 items-center justify-center">
                <div className="relative size-16 rounded-full bg-conic from-sky-500 from-0% via-yellow-400 via-40% to-rose-500 to-80%">
                  <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                    <span className="text-[10px] font-bold text-ink">12</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1 text-[9px] text-ink-muted">
                <div className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-sky-500" /> Finance</div>
                <div className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-yellow-400" /> Sales</div>
                <div className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-rose-500" /> HR</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
