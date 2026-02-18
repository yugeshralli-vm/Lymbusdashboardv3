import React, { useMemo, useCallback, useRef, useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { cn } from './ui/utils';

interface TimePickerProps {
  value: string; // "HH:mm" 24-hour format
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function TimePicker({ value, onChange, placeholder = 'Pick a time', className }: TimePickerProps) {
  const [open, setOpen] = useState(false);

  const { hour12, minute, period } = useMemo(() => {
    const [hStr, mStr] = (value || '09:00').split(':');
    const h24 = parseInt(hStr, 10);
    const m = parseInt(mStr, 10);
    const p = h24 >= 12 ? 'PM' : 'AM';
    let h12 = h24 % 12;
    if (h12 === 0) h12 = 12;
    return { hour12: h12, minute: m, period: p };
  }, [value]);

  const displayText = useMemo(() => {
    if (!value) return placeholder;
    return `${hour12}:${String(minute).padStart(2, '0')} ${period}`;
  }, [value, hour12, minute, period, placeholder]);

  const buildTimeString = useCallback((h12: number, m: number, p: string) => {
    let h24 = h12 % 12;
    if (p === 'PM') h24 += 12;
    const hh = String(h24).padStart(2, '0');
    const mm = String(m).padStart(2, '0');
    return `${hh}:${mm}`;
  }, []);

  const handleHourSelect = (h: number) => {
    onChange(buildTimeString(h, minute, period));
  };

  const handleMinuteSelect = (m: number) => {
    onChange(buildTimeString(hour12, m, period));
  };

  const handlePeriodSelect = (p: string) => {
    onChange(buildTimeString(hour12, minute, p));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            'w-full h-11 bg-white border border-brand-border rounded-xl px-4 text-xs font-bold focus:ring-1 focus:ring-brand-blue/30 outline-none flex items-center justify-between text-foreground transition-colors hover:border-brand-blue/40',
            !value && 'text-brand-gray/60',
            className,
          )}
          aria-label={displayText}
        >
          <span>{displayText}</span>
          <Clock className="w-4 h-4 text-brand-gray/60 shrink-0" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 z-[1100]" align="start" sideOffset={6}>
        <div className="p-3">
          <div className="text-xs font-bold text-brand-gray mb-2 px-1">Select Time</div>
          <div className="flex gap-1">
            {/* Hour Column */}
            <ScrollColumn
              items={Array.from({ length: 12 }, (_, i) => ({
                value: i + 1,
                label: String(i + 1),
              }))}
              selectedValue={hour12}
              onSelect={(v) => handleHourSelect(v as number)}
              label="Hour"
            />

            {/* Divider */}
            <div className="flex items-center px-0.5">
              <span className="text-brand-gray font-bold text-sm select-none" aria-hidden="true">:</span>
            </div>

            {/* Minute Column */}
            <ScrollColumn
              items={Array.from({ length: 60 }, (_, i) => ({
                value: i,
                label: String(i).padStart(2, '0'),
              }))}
              selectedValue={minute}
              onSelect={(v) => handleMinuteSelect(v as number)}
              label="Minute"
            />

            {/* Spacer */}
            <div className="w-1" />

            {/* AM/PM Column */}
            <ScrollColumn
              items={[
                { value: 'AM', label: 'AM' },
                { value: 'PM', label: 'PM' },
              ]}
              selectedValue={period}
              onSelect={(v) => handlePeriodSelect(v as string)}
              label="AM or PM"
              wide
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

/* ── Scrollable column inside the popover ── */

interface ScrollColumnProps {
  items: { value: number | string; label: string }[];
  selectedValue: number | string;
  onSelect: (value: number | string) => void;
  label: string;
  wide?: boolean;
}

function ScrollColumn({ items, selectedValue, onSelect, label, wide }: ScrollColumnProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string | number, HTMLButtonElement>>(new Map());

  // Scroll selected item into view on mount
  useEffect(() => {
    const el = itemRefs.current.get(selectedValue);
    if (el && listRef.current) {
      const container = listRef.current;
      const scrollTop = el.offsetTop - container.clientHeight / 2 + el.clientHeight / 2;
      container.scrollTop = Math.max(0, scrollTop);
    }
  }, [selectedValue]);

  return (
    <div
      ref={listRef}
      role="listbox"
      aria-label={label}
      className={cn(
        'h-[200px] overflow-y-auto custom-scrollbar rounded-lg bg-brand-bg/40 border border-brand-border/50',
        wide ? 'w-[54px]' : 'w-[48px]',
      )}
    >
      {items.map((item) => {
        const isSelected = item.value === selectedValue;
        return (
          <button
            key={item.value}
            ref={(el) => {
              if (el) itemRefs.current.set(item.value, el);
            }}
            type="button"
            role="option"
            aria-selected={isSelected}
            onClick={() => onSelect(item.value)}
            className={cn(
              'w-full h-8 flex items-center justify-center text-xs font-bold transition-colors rounded-md',
              isSelected
                ? 'bg-brand-blue text-white'
                : 'text-foreground hover:bg-brand-blue/10',
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
