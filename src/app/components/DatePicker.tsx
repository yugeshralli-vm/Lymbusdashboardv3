import React, { useMemo } from 'react';
import { format, parse } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { cn } from './ui/utils';

interface DatePickerProps {
  value: string; // "YYYY-MM-DD" format
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  minDate?: Date;
}

export function DatePicker({
  value,
  onChange,
  placeholder = 'Pick a date',
  className,
  minDate,
}: DatePickerProps) {
  const selectedDate = useMemo(() => {
    if (!value) return undefined;
    try {
      return parse(value, 'yyyy-MM-dd', new Date());
    } catch {
      return undefined;
    }
  }, [value]);

  const displayText = useMemo(() => {
    if (!selectedDate) return placeholder;
    return format(selectedDate, 'MMM d, yyyy');
  }, [selectedDate, placeholder]);

  const handleSelect = (day: Date | undefined) => {
    if (day) {
      onChange(format(day, 'yyyy-MM-dd'));
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            'w-full h-11 bg-white border border-brand-border rounded-xl px-4 text-xs font-bold focus:ring-1 focus:ring-brand-blue/30 outline-none flex items-center justify-between text-foreground transition-colors hover:border-brand-blue/40',
            !selectedDate && 'text-brand-gray/60',
            className,
          )}
          aria-label={displayText}
        >
          <span>{displayText}</span>
          <CalendarIcon className="w-4 h-4 text-brand-gray/60 shrink-0" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 z-[1100]" align="start" sideOffset={6}>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleSelect}
          defaultMonth={selectedDate}
          disabled={minDate ? { before: minDate } : undefined}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}