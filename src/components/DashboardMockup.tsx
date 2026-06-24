import { ChevronLeft, ChevronRight } from 'lucide-react';
import dashboard from '../assets/dashboard.png';

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
          <p className="text-xs text-ink-muted">app.alignaerp.com</p>
        </div>
        <div className="flex flex-1 items-center justify-end gap-1.5">
          <ChevronLeft size={20} className="text-ink-muted" />
          <ChevronRight size={20} className="text-ink-muted" />
        </div>
      </div>

      {/* App screenshot */}
      <div className="flex-1 overflow-hidden bg-white">
        <img
          src={dashboard}
          alt="Tampilan dasbor ERP Aligna"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
