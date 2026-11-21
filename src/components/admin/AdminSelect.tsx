"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useId,
  type KeyboardEvent,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronDown, IconCheck } from "@tabler/icons-react";

export interface AdminSelectOption<T extends string = string> {
  value: T;
  label: string;
  description?: string;
  badge?: string;
  badgeColor?: string;
  dotColor?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface AdminSelectProps<T extends string = string> {
  id?: string;
  name?: string;
  value: T;
  onChange: (value: T) => void;
  options: (AdminSelectOption<T> | string)[];
  placeholder?: string;
  label?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  align?: "left" | "right";
  renderOption?: (option: AdminSelectOption<T>, isSelected: boolean) => React.ReactNode;
}

export function AdminSelect<T extends string = string>({
  id: explicitId,
  name,
  value,
  onChange,
  options,
  placeholder = "Select an option...",
  label,
  helperText,
  error,
  disabled = false,
  required = false,
  icon,
  size = "md",
  className = "",
  buttonClassName = "",
  menuClassName = "",
  align = "left",
  renderOption,
}: AdminSelectProps<T>) {
  const generatedId = useId();
  const id = explicitId || generatedId;

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [isFocused, setIsFocused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Normalize options into uniform AdminSelectOption format
  const normalizedOptions: AdminSelectOption<T>[] = options.map((opt) =>
    typeof opt === "string" ? { value: opt as T, label: opt } : opt
  );

  const selectedIndex = normalizedOptions.findIndex(
    (opt) => opt.value === value
  );
  const selectedOption =
    selectedIndex >= 0 ? normalizedOptions[selectedIndex] : null;

  const openMenu = () => {
    if (disabled) return;
    const initialIndex = selectedIndex >= 0 ? selectedIndex : 0;
    setHighlightedIndex(initialIndex);
    setIsOpen(true);
    requestAnimationFrame(() => {
      itemRefs.current[initialIndex]?.scrollIntoView({
        block: "nearest",
      });
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

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

  function handleSelect(val: T, optDisabled?: boolean) {
    if (optDisabled) return;
    onChange(val);
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
        openMenu();
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
          const opt = normalizedOptions[highlightedIndex];
          handleSelect(opt.value, opt.disabled);
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

  const isSmall = size === "sm";

  return (
    <div
      ref={containerRef}
      className={`relative ${isOpen ? "z-50" : "z-10"} ${className}`}
    >
      {label && (
        <label
          htmlFor={`${id}-trigger`}
          className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]"
        >
          {label}
        </label>
      )}

      {/* Hidden input for form submission & HTML5 validity */}
      {name && (
        <input
          type="hidden"
          name={name}
          id={id}
          value={value}
          required={required}
        />
      )}

      {/* Trigger Button */}
      <button
        type="button"
        ref={triggerRef}
        id={`${id}-trigger`}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${id}-listbox`}
        aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        onClick={toggleMenu}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        className={`group relative flex w-full items-center justify-between text-left transition-all duration-200 outline-none select-none rounded-sm border ${
          isSmall
            ? "min-h-[36px] py-1.5 px-3 text-xs"
            : "min-h-[40px] py-2 px-3 text-xs sm:text-sm"
        } ${
          error
            ? "border-[#B32526] bg-[#B32526]/5 ring-1 ring-[#B32526]/20"
            : isOpen || isFocused
            ? "border-[#B32526] bg-white ring-1 ring-[#B32526]/20 shadow-xs"
            : "border-[#D9CFC2] bg-white hover:border-[#A58B64]"
        } ${
          disabled
            ? "cursor-not-allowed opacity-55 bg-[#F8F5EF]"
            : "cursor-pointer"
        } ${buttonClassName}`}
      >
        <div className="flex items-center gap-2.5 min-w-0 pr-2">
          {/* Prefix Icon */}
          {icon && (
            <span
              className={`shrink-0 transition-colors ${
                isOpen || isFocused ? "text-[#B32526]" : "text-[#81766C]"
              }`}
            >
              {icon}
            </span>
          )}

          {/* Color Dot if present on selected option and no explicit icon */}
          {!icon && selectedOption?.dotColor && (
            <span
              className="h-2.5 w-2.5 rounded-full shrink-0 border border-black/10"
              style={{ backgroundColor: selectedOption.dotColor }}
            />
          )}

          {/* Option Icon if present */}
          {!icon && selectedOption?.icon && (
            <span className="shrink-0 text-[#81766C]">
              {selectedOption.icon}
            </span>
          )}

          {/* Selected Label or Placeholder */}
          <span
            className={`truncate ${
              selectedOption
                ? "font-medium text-[#292624]"
                : "text-[#81766C]"
            }`}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>

          {/* Badge if present on selected option */}
          {selectedOption?.badge && (
            <span
              className={`hidden sm:inline-block rounded-xs px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
                selectedOption.badgeColor || "bg-[#EFE9DF] text-[#514A45]"
              }`}
            >
              {selectedOption.badge}
            </span>
          )}
        </div>

        {/* Chevron Icon with smooth rotation */}
        <span className="shrink-0 pl-1 text-[#81766C] group-hover:text-[#292624]">
          <IconChevronDown
            size={isSmall ? 15 : 17}
            stroke={1.8}
            className={`transition-transform duration-200 ease-out ${
              isOpen ? "rotate-180 text-[#B32526]" : ""
            }`}
          />
        </span>
      </button>

      {/* Helper text or error */}
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-[11px] text-[#B32526]">
          {error}
        </p>
      ) : helperText ? (
        <p id={`${id}-helper`} className="mt-1 text-[11px] text-[#81766C]">
          {helperText}
        </p>
      ) : null}

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
            initial={{ opacity: 0, y: -4, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.99 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute top-full mt-1.5 z-50 min-w-full overflow-hidden rounded-md border border-[#D9CFC2] bg-[#FCFAF7] shadow-[0_14px_34px_-6px_rgba(41,38,36,0.14),0_4px_12px_rgba(41,38,36,0.06)] ${
              align === "right" ? "right-0" : "left-0"
            } ${menuClassName}`}
          >
            {/* Top gold/burgundy accent line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#B32526] via-[#A58B64] to-[#B32526]" />

            <div className="max-h-64 overflow-y-auto p-1.5 space-y-0.5 custom-scrollbar">
              {normalizedOptions.length === 0 ? (
                <div className="px-3 py-3 text-center text-xs text-[#81766C]">
                  No options available
                </div>
              ) : (
                normalizedOptions.map((option, index) => {
                  const isSelected = option.value === value;
                  const isHighlighted = highlightedIndex === index;

                  if (renderOption) {
                    return (
                      <div
                        key={option.value}
                        id={`${id}-opt-${index}`}
                        role="option"
                        aria-selected={isSelected}
                        aria-disabled={option.disabled}
                        ref={(el) => {
                          itemRefs.current[index] = el;
                        }}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        onClick={() => handleSelect(option.value, option.disabled)}
                        className={`cursor-pointer ${
                          option.disabled ? "cursor-not-allowed opacity-50" : ""
                        }`}
                      >
                        {renderOption(option, isSelected)}
                      </div>
                    );
                  }

                  return (
                    <div
                      key={option.value}
                      id={`${id}-opt-${index}`}
                      role="option"
                      aria-selected={isSelected}
                      aria-disabled={option.disabled}
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      onClick={() => handleSelect(option.value, option.disabled)}
                      className={`group relative flex items-center justify-between rounded-sm px-3 py-2 text-xs transition-colors duration-150 select-none ${
                        option.disabled
                          ? "cursor-not-allowed opacity-40 text-[#81766C]"
                          : isSelected
                          ? "bg-[#EBE4D8] text-[#781E24] font-medium cursor-pointer"
                          : isHighlighted
                          ? "bg-[#F3EEE5] text-[#292624] cursor-pointer"
                          : "bg-transparent text-[#292624] hover:bg-[#F3EEE5] cursor-pointer"
                      }`}
                    >
                      <div className="flex items-start gap-2.5 min-w-0 pr-3">
                        {/* Dot or icon indicator */}
                        {option.dotColor ? (
                          <span
                            className="mt-1 h-2 w-2 rounded-full shrink-0 border border-black/10"
                            style={{ backgroundColor: option.dotColor }}
                          />
                        ) : option.icon ? (
                          <span className="mt-0.5 shrink-0 text-[#81766C]">
                            {option.icon}
                          </span>
                        ) : null}

                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className={`truncate leading-snug ${
                                isSelected
                                  ? "font-semibold text-[#781E24]"
                                  : "text-[#292624]"
                              }`}
                            >
                              {option.label}
                            </span>

                            {option.badge && (
                              <span
                                className={`rounded-xs px-1.5 py-0.2 text-[9px] font-semibold uppercase tracking-wider ${
                                  option.badgeColor || "bg-[#EFE9DF] text-[#514A45]"
                                }`}
                              >
                                {option.badge}
                              </span>
                            )}
                          </div>

                          {option.description && (
                            <span className="mt-0.5 text-[11px] leading-tight text-[#81766C]">
                              {option.description}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right Checkmark */}
                      <div className="shrink-0 pl-2">
                        {isSelected ? (
                          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#B32526] text-white">
                            <IconCheck size={11} stroke={3} />
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
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AdminSelect;
