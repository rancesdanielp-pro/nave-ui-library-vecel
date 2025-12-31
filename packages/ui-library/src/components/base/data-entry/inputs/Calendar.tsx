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
import { Button, buttonBaseClasses } from '../../buttons';
import {
  resolveTokens,
  resolveWebStyles,
  resolveNativeStyles,
  useTheme,
} from '../../../../theme';

/* -------------------------------------------------------------------------- */
/* Tokens
/* -------------------------------------------------------------------------- */
/*
const calendarTokens = {
  backgroundColor: "colors.surface",
  textColor: "colors.text",
  mutedTextColor: "colors.textMuted",
  accentColor: "colors.primary",
  accentForeground: "colors.onPrimary",
  hoverBackground: "colors.surfaceHover",
  borderRadius: "radii.md",
}
*/
/* -------------------------------------------------------------------------- */
/* Calendar
/* -------------------------------------------------------------------------- */

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'neutral',
  tokens,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant'];
  tokens?: any;
}) {
  const theme = useTheme();
  const defaultClassNames = getDefaultClassNames();

  const mergedTokens = resolveTokens(
    { componentName: 'calendar', tokens },
    theme
  );

  const styles =
    theme.platform === 'web'
      ? resolveWebStyles(mergedTokens)
      : resolveNativeStyles(mergedTokens);

  return (
    <div
      data-slot="calendar"
      style={
        {
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          '--calendar-accent': mergedTokens.accentColor,
          '--calendar-accent-foreground': mergedTokens.accentForeground,
          '--calendar-hover': mergedTokens.hoverBackground,
        } as React.CSSProperties
      }
    >
      <DayPicker
        showOutsideDays={showOutsideDays}
        captionLayout={captionLayout}
        formatters={{
          formatMonthDropdown: (date) =>
            date.toLocaleString('default', { month: 'short' }),
          ...formatters,
        }}
        className={cn(
          'group/calendar p-3',
          String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
          String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
          className
        )}
        classNames={{
          root: cn('w-fit', defaultClassNames.root),
          months: cn('flex gap-4 flex-col md:flex-row relative'),
          month: cn('flex flex-col w-full gap-4'),
          nav: cn(
            'flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between'
          ),
          button_previous: cn(
            buttonBaseClasses({ variant: buttonVariant }),
            'size-8 p-0 aria-disabled:opacity-50'
          ),
          button_next: cn(
            buttonBaseClasses({ variant: buttonVariant }),
            'size-8 p-0 aria-disabled:opacity-50'
          ),
          month_caption: 'flex items-center justify-center h-8 w-full',
          caption_label: cn(
            'select-none font-medium',
            captionLayout === 'label' ? 'text-sm' : 'text-sm flex gap-1'
          ),
          table: 'w-full border-collapse',
          weekdays: 'flex',
          weekday:
            'flex-1 text-center text-xs text-[color:var(--calendar-muted)]',
          week: 'flex w-full mt-2',
          day: 'aspect-square w-full p-0',
          today: 'rounded-md bg-[color:var(--calendar-hover)] text-current',
          outside: 'opacity-50',
          disabled: 'opacity-40',
          ...classNames,
        }}
        components={{
          Chevron: ({ orientation, className, ...props }) => {
            if (orientation === 'left')
              return (
                <ChevronLeftIcon
                  className={cn('size-4', className)}
                  {...props}
                />
              );
            if (orientation === 'right')
              return (
                <ChevronRightIcon
                  className={cn('size-4', className)}
                  {...props}
                />
              );
            return (
              <ChevronDownIcon className={cn('size-4', className)} {...props} />
            );
          },
          DayButton: CalendarDayButton,
          ...components,
        }}
        {...props}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Day Button
/* -------------------------------------------------------------------------- */

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="neutral"
      size="icon"
      data-selected={modifiers.selected}
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'w-full aspect-square rounded-md',
        'data-[selected=true]:bg-[color:var(--calendar-accent)]',
        'data-[selected=true]:text-[color:var(--calendar-accent-foreground)]',
        'data-[range-middle=true]:bg-[color:var(--calendar-hover)]',
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
