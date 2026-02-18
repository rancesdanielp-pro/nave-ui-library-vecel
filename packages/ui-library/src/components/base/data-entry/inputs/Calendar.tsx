'use client';

import * as React from 'react';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react';
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
} from 'react-day-picker';

import { cn } from '../../../../utils/cn';
import { buttonBaseClasses } from '../../buttons';
import { resolveTokens, useTheme } from '../../../../theme';
import type { ThemeTokensBase } from '../../../../theme/theme';

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  tokens,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  tokens?: Partial<ThemeTokensBase>;
}) {
  const theme = useTheme();
  const defaultClassNames = getDefaultClassNames();

  const mergedTokens = resolveTokens(
    { componentName: 'calendar', tokens },
    theme
  ) as any;

  // Mapeo exhaustivo de tokens a variables CSS
  const styles = {
    '--calendar-bg': mergedTokens?.background ?? '#FFFFFF',
    '--calendar-text': mergedTokens?.text ?? '#020303',
    '--calendar-muted': mergedTokens?.muted ?? '#6E7991',
    '--calendar-radius': mergedTokens?.radius ?? '12px',
    '--calendar-border': mergedTokens?.border ?? '#E2E5E9',
    
    // Day Item tokens
    '--calendar-item-size': mergedTokens?.item?.size ?? '32px',
    '--calendar-item-radius': mergedTokens?.item?.radius ?? '8px',
    
    // Estados
    '--calendar-item-hover-bg': mergedTokens?.item?.hover?.background ?? '#E2E5E9',
    '--calendar-item-current-bg': mergedTokens?.item?.current?.background ?? '#E2E5E9',
    '--calendar-item-active-bg': mergedTokens?.item?.active?.background ?? '#652BDF',
    '--calendar-item-active-text': mergedTokens?.item?.active?.color ?? '#FFFFFF',
  } as React.CSSProperties;

  return (
    <div data-slot="calendar" style={styles} className="w-fit">
      <DayPicker
        showOutsideDays={showOutsideDays}
        captionLayout={captionLayout}
        formatters={{
          formatMonthDropdown: (date) =>
            date.toLocaleString('default', { month: 'short' }),
          ...formatters,
        }}
        className={cn(
          'p-3 rounded-[var(--calendar-radius)] border border-[var(--calendar-border)]',
          'bg-[var(--calendar-bg)] text-[var(--calendar-text)]',
          className
        )}
        classNames={{
          months: 'flex gap-4 flex-col relative',
          month: 'flex flex-col gap-4',
          nav: 'flex items-center justify-between absolute top-0 inset-x-0 w-full',
          button_previous: cn(
            buttonBaseClasses({ variant: 'neutral' }),
            'size-8 p-0 hover:bg-[var(--calendar-item-hover-bg)]'
          ),
          button_next: cn(
            buttonBaseClasses({ variant: 'neutral' }),
            'size-8 p-0 hover:bg-[var(--calendar-item-hover-bg)]'
          ),
          month_caption: 'flex items-center justify-center h-8 w-full',
          caption_label: 'text-sm font-semibold select-none',
          table: 'w-full border-collapse',
          weekdays: 'flex mb-2',
          weekday: 'flex-1 text-center text-[10px] font-bold uppercase text-[var(--calendar-muted)]',
          week: 'flex w-full mt-1',
          day: 'p-0 flex justify-center items-center',
          today: '[&:not([data-selected])]:bg-[var(--calendar-item-current-bg)]',
          outside: 'opacity-30',
          disabled: 'opacity-10',
          ...classNames,
        }}
        components={{
          Chevron: ({ orientation, className, ...props }) => {
            const Icon = orientation === 'left' ? ChevronLeftIcon : orientation === 'right' ? ChevronRightIcon : ChevronDownIcon;
            return <Icon className={cn('size-4', className)} {...props} />;
          },
          DayButton: CalendarDayButton,
          ...components,
        }}
        {...props}
      />
    </div>
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <button
      ref={ref}
      type="button"
      data-selected={modifiers.selected}
      data-today={modifiers.today}
      className={cn(
        // Base
        'flex items-center justify-center transition-all outline-none cursor-pointer',
        'w-[var(--calendar-item-size)] h-[var(--calendar-item-size)] rounded-[var(--calendar-item-radius)]',
        'text-sm font-medium',
        
        // Hover
        'hover:bg-[var(--calendar-item-hover-bg)]',
        
        // Today (Current state in Figma)
        'data-[today=true]:bg-[var(--calendar-item-current-bg)]',
        
        // Selected (Active state in Figma)
        'data-[selected=true]:bg-[var(--calendar-item-active-bg)]',
        'data-[selected=true]:text-[var(--calendar-item-active-text)]',
        'data-[selected=true]:hover:bg-[var(--calendar-item-active-bg)]',
        
        // Focus
        'focus-visible:ring-2 focus-visible:ring-[var(--calendar-item-active-bg)] focus-visible:ring-offset-2',
        className
      )}
      {...props}
    />
  );
}

export { Calendar };