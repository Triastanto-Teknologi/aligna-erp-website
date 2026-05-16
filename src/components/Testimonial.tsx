import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonial() {
  return (
    <section id="client-success" className="bg-navy-deep py-20">
      <div className="relative mx-auto flex max-w-[1280px] items-center justify-center px-20">
        <button
          aria-label="Previous testimonial"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition"
        >
          <ChevronLeft size={48} />
        </button>

        <div className="flex items-center justify-center gap-20">
          <div className="flex w-[600px] shrink-0 flex-col gap-12">
            <div className="space-y-4">
              <p className="text-2xl leading-[1.6] text-white">
                “AlignaERP membantu kami meningkatkan efisiensi operasional dan
                kontrol bisnis secara signifikan.”
              </p>
              <p className="text-2xl font-bold leading-[1.6] text-white">
                PT Kesejahteraan Bersama
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="h-2 w-8 rounded-full bg-brand-blue" />
              <span className="size-2 rounded-full bg-white" />
              <span className="size-2 rounded-full bg-white" />
              <span className="size-2 rounded-full bg-white" />
              <span className="size-2 rounded-full bg-white" />
            </div>
          </div>

          <div className="relative w-[600px] shrink-0">
            <div className="absolute -inset-2 -rotate-[6deg] rounded-[30px] bg-brand-blue/90" />
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
              alt="Tim AlignaERP"
              className="relative h-[415px] w-full rounded-[20px] object-cover shadow-2xl"
            />
          </div>
        </div>

        <button
          aria-label="Next testimonial"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition"
        >
          <ChevronRight size={48} />
        </button>
      </div>
    </section>
  );
}
