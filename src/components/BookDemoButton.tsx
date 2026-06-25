import type { ReactNode } from 'react';

// Public Cal.com booking link (cal.com/triastanto-teknologi/request-demo).
// The Cal API is initialised once in App.tsx; any element carrying the
// data-cal-link attribute opens the booking popup on click.
export const CAL_LINK = 'triastanto-teknologi/request-demo';

type BookDemoButtonProps = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export default function BookDemoButton({
  className,
  children,
  onClick,
}: BookDemoButtonProps) {
  return (
    <button
      type="button"
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
