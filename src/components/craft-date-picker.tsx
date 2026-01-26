import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftDatePickerProps = {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  tone?: ThemeName;
  min?: string;
  max?: string;
  placeholder?: string;
  className?: string;
};

const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDate(value?: string) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isOutsideRange(date: Date, min?: string, max?: string) {
  const minDate = parseDate(min);
  const maxDate = parseDate(max);
  if (minDate && date < minDate) return true;
  if (maxDate && date > maxDate) return true;
  return false;
}

export function CraftDatePicker({
  value,
  defaultValue,
  onChange,
  tone,
  min,
  max,
  placeholder = "Select date",
  className,
}: CraftDatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue ?? "");
  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value ?? "" : uncontrolledValue;
  const selectedDate = parseDate(selectedValue);

  const initialMonth = selectedDate ?? new Date();
  const [viewDate, setViewDate] = React.useState<Date>(initialMonth);

  React.useEffect(() => {
    if (selectedDate) setViewDate(selectedDate);
  }, [selectedDate]);

  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const handleClick = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const setValue = React.useCallback(
    (next: string) => {
      if (!isControlled) setUncontrolledValue(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );

  const monthStart = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const monthEnd = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0);
  const startDay = monthStart.getDay();
  const daysInMonth = monthEnd.getDate();
  const cells = Array.from({ length: startDay + daysInMonth }, (_, i) => {
    const dayNumber = i - startDay + 1;
    if (dayNumber < 1) return null;
    return new Date(viewDate.getFullYear(), viewDate.getMonth(), dayNumber);
  });

  const handleDaySelect = (date: Date) => {
    if (isOutsideRange(date, min, max)) return;
    const next = formatDate(date);
    setValue(next);
    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!open) return;
    if (!selectedDate) return;
    const next = new Date(selectedDate);
    if (event.key === "ArrowRight") next.setDate(next.getDate() + 1);
    if (event.key === "ArrowLeft") next.setDate(next.getDate() - 1);
    if (event.key === "ArrowDown") next.setDate(next.getDate() + 7);
    if (event.key === "ArrowUp") next.setDate(next.getDate() - 7);
    if (event.key === "Enter") {
      event.preventDefault();
      handleDaySelect(selectedDate);
      return;
    }
    if (next.getTime() !== selectedDate.getTime()) {
      event.preventDefault();
      if (!isOutsideRange(next, min, max)) {
        setValue(formatDate(next));
        setViewDate(next);
      }
    }
  };

  return (
    <div className="relative w-full" data-nc-theme={tone} ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex w-full items-center justify-between rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] px-5 py-3 text-left text-base text-[rgb(var(--nc-fg))] backdrop-blur-xl",
          "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
          "transition-all duration-300",
          "border-[rgb(var(--nc-border)/0.35)]",
          "focus:outline-none focus:ring-4 focus:ring-[rgb(var(--nc-accent-1)/0.3)]",
          className
        )}
      >
        <span className={selectedValue ? "text-[rgb(var(--nc-fg))]" : "text-[rgb(var(--nc-fg-soft))]"}>
          {selectedValue || placeholder}
        </span>
        <svg className="h-4 w-4 text-[rgb(var(--nc-fg-soft))]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm10 6H4v8h12V8z" />
        </svg>
      </button>

      {open && (
        <div
          className={cn(
            "absolute left-0 top-full z-20 mt-3 w-full rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/1.52)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-10xl"
          )}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-1 text-sm text-[rgb(var(--nc-fg))]"
              onClick={() =>
                setViewDate(
                  new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1)
                )
              }
            >
              Prev
            </button>
            <div className="text-sm font-semibold">
              {viewDate.toLocaleString(undefined, { month: "long", year: "numeric" })}
            </div>
            <button
              type="button"
              className="rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-1 text-sm text-[rgb(var(--nc-fg))]"
              onClick={() =>
                setViewDate(
                  new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1)
                )
              }
            >
              Next
            </button>
          </div>

          <div className="mt-4 grid grid-cols-7 gap-2 text-xs text-[rgb(var(--nc-fg-muted))]">
            {WEEK_DAYS.map((day) => (
              <div key={day} className="text-center">
                {day}
              </div>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-7 gap-2">
            {cells.map((date, index) => {
              if (!date) return <div key={`empty-${index}`} />;
              const disabled = isOutsideRange(date, min, max);
              const selected = selectedDate && isSameDay(date, selectedDate);
              return (
                <button
                  key={date.toISOString()}
                  type="button"
                  onClick={() => handleDaySelect(date)}
                  disabled={disabled}
                  className={cn(
                    "rounded-lg py-2 text-sm transition-all",
                    selected
                      ? "bg-[rgb(var(--nc-accent-1)/0.3)] text-[rgb(var(--nc-fg))]"
                      : "text-[rgb(var(--nc-fg-muted))] hover:bg-[rgb(var(--nc-surface)/0.12)]",
                    disabled && "opacity-40 hover:bg-transparent"
                  )}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
