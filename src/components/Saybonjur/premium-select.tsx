"use client";

import {
  useState,
  useRef,
  useEffect,
  useId,
  type KeyboardEvent,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronDown, IconCheck } from "@tabler/icons-react";

export interface SelectOption {
  value: string;
  label: string;
  description?: string;
  badge?: string;
}

interface PremiumSelectProps {
  id?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: (string | SelectOption)[];
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function PremiumSelect({
  id: explicitId,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  disabled = false,
  className = "",
}: PremiumSelectProps) {
  const generatedId = useId();
  const id = explicitId || generatedId;

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [hasError, setHasError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Normalize options into uniform SelectOption format
  const normalizedOptions: SelectOption[] = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  const selectedIndex = normalizedOptions.findIndex(
    (opt) => opt.value === value
  );
  const selectedOption =
    selectedIndex >= 0 ? normalizedOptions[selectedIndex] : null;

  // Sync highlighted item with current selection when opened
  useEffect(() => {
    if (isOpen) {
      const initialIndex = selectedIndex >= 0 ? selectedIndex : 0;
      setHighlightedIndex(initialIndex);
      requestAnimationFrame(() => {
        itemRefs.current[initialIndex]?.scrollIntoView({
          block: "nearest",
        });
      });
    }
  }, [isOpen, selectedIndex]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  function handleSelect(val: string) {
    onChange(val);
    setHasError(false);
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (disabled) return;

    if (!isOpen) {
      if (
        event.key === "ArrowDown" ||
        event.key === "ArrowUp" ||
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        const nextIndex =
          highlightedIndex < normalizedOptions.length - 1
            ? highlightedIndex + 1
            : 0;
        setHighlightedIndex(nextIndex);
        itemRefs.current[nextIndex]?.scrollIntoView({ block: "nearest" });
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        const prevIndex =
          highlightedIndex > 0
            ? highlightedIndex - 1
            : normalizedOptions.length - 1;
        setHighlightedIndex(prevIndex);
        itemRefs.current[prevIndex]?.scrollIntoView({ block: "nearest" });
        break;
      }
      case "Enter":
      case " ": {
        event.preventDefault();
        if (
          highlightedIndex >= 0 &&
          highlightedIndex < normalizedOptions.length
        ) {
          handleSelect(normalizedOptions[highlightedIndex].value);
        }
        break;
      }
      case "Escape": {
        event.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
        break;
      }
      case "Tab": {
        setIsOpen(false);
        break;
      }
      case "Home": {
        event.preventDefault();
        setHighlightedIndex(0);
        itemRefs.current[0]?.scrollIntoView({ block: "nearest" });
        break;
      }
      case "End": {
        event.preventDefault();
        const last = normalizedOptions.length - 1;
        setHighlightedIndex(last);
        itemRefs.current[last]?.scrollIntoView({ block: "nearest" });
        break;
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${isOpen ? "z-30" : "z-10"} ${className}`}
    >
      {/* Hidden input to ensure HTML5 form validation works seamlessly */}
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        required={required}
        readOnly
        tabIndex={-1}
        aria-hidden="true"
        onChange={() => {}}
        onInvalid={(e) => {
          e.preventDefault();
          setHasError(true);
          triggerRef.current?.focus();
        }}
        className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-[1px] opacity-0"
      />

      {/* Trigger Button */}
      <button
        type="button"
        ref={triggerRef}
        id={`${id}-trigger`}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${id}-listbox`}
        aria-describedby={hasError ? `${id}-error` : undefined}
        onClick={() => {
          if (!disabled) {
            setIsOpen((prev) => !prev);
            setHasError(false);
          }
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        className={`group relative flex w-full cursor-pointer items-center justify-between border-b bg-transparent py-4 text-left outline-none transition-colors duration-200 ${
          hasError
            ? "border-[#B32526]"
            : isOpen || isFocused
              ? "border-[#B32526]"
              : "border-[#D9CFC2] hover:border-[#81766C]"
        } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
      >
        <span
          className={`block truncate text-sm transition-colors ${
            selectedOption
              ? "font-medium text-[#292624]"
              : "text-[#A69B90]"
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <span className="flex items-center gap-2 pl-3">
          <IconChevronDown
            size={18}
            stroke={1.75}
            className={`transition-transform duration-300 ease-out ${
              isOpen
                ? "rotate-180 text-[#B32526]"
                : "text-[#81766C] group-hover:text-[#292624]"
            }`}
          />
        </span>

        {/* Animated active underline indicator */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-[-1px] left-0 h-[2px] bg-[#B32526] transition-all duration-300 ${
            isOpen || isFocused ? "w-full" : "w-0"
          }`}
        />
      </button>

      {/* Error message */}
      {hasError && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-[#B32526]">
          Please select an option to continue.
        </p>
      )}

      {/* Dropdown Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={listboxRef}
            id={`${id}-listbox`}
            role="listbox"
            tabIndex={-1}
            aria-labelledby={`${id}-trigger`}
            aria-activedescendant={
              highlightedIndex >= 0
                ? `${id}-opt-${highlightedIndex}`
                : undefined
            }
            initial={{ opacity: 0, y: -6, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.99 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-full mt-2.5 overflow-hidden rounded-xl border border-[#D9CFC2] bg-[#FCFAF7] shadow-[0_20px_45px_-10px_rgba(41,38,36,0.14),0_6px_18px_rgba(41,38,36,0.06)]"
          >
            {/* Top gold/burgundy accent line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#B32526] via-[#A58B64] to-[#B32526] opacity-90" />

            <div className="custom-scrollbar max-h-72 overflow-y-auto p-1.5 space-y-0.5">
              {normalizedOptions.map((option, index) => {
                const isSelected = option.value === value;
                const isHighlighted = highlightedIndex === index;
                const formattedIndex = String(index + 1).padStart(2, "0");

                return (
                  <div
                    key={option.value}
                    id={`${id}-opt-${index}`}
                    role="option"
                    aria-selected={isSelected}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onClick={() => handleSelect(option.value)}
                    className={`group relative flex cursor-pointer items-center justify-between rounded-lg px-3.5 py-3 transition-colors duration-150 ${
                      isSelected
                        ? "bg-[#EBE4D8] text-[#781E24]"
                        : isHighlighted
                          ? "bg-[#F3EEE5] text-[#292624]"
                          : "bg-transparent text-[#292624] hover:bg-[#F3EEE5]"
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0 pr-3">
                      <span
                        className={`font-mono text-[11px] font-medium tracking-wider pt-0.5 shrink-0 transition-colors ${
                          isSelected
                            ? "text-[#B32526]"
                            : isHighlighted
                              ? "text-[#A58B64]"
                              : "text-[#A69B90]"
                        }`}
                      >
                        {formattedIndex}
                      </span>

                      <div className="flex flex-col min-w-0">
                        <span
                          className={`truncate text-sm leading-tight transition-colors ${
                            isSelected
                              ? "font-semibold text-[#781E24]"
                              : "font-medium text-[#292624] group-hover:text-[#781E24]"
                          }`}
                        >
                          {option.label}
                        </span>

                        {option.description && (
                          <span className="mt-1 text-xs leading-relaxed text-[#81766C] line-clamp-2">
                            {option.description}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 pl-2">
                      {isSelected ? (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B32526] text-white shadow-xs">
                          <IconCheck size={12} stroke={3} />
                        </div>
                      ) : (
                        <div
                          className={`h-1.5 w-1.5 rounded-full transition-colors ${
                            isHighlighted ? "bg-[#A58B64]" : "bg-transparent"
                          }`}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
