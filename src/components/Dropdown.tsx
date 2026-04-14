import React, { useState, useRef, useEffect, useMemo } from 'react';
import { CaretDown, MagnifyingGlass, X, CheckCircle } from '@phosphor-icons/react';
export interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  image?: string;
}

export interface DropdownProps {
  /**
   * Optional label displayed above the dropdown
   */
  label?: string;
  /**
   * Array of options to render in the dropdown
   */
  options: DropdownOption[];
  /**
   * Current selected value (array if multiple)
   */
  value?: string | number | (string | number)[];
  /**
   * Callback when selection changes
   */
  onChange?: (value: any) => void;
  /**
   * Enable multiple selection
   */
  multiple?: boolean;
  /**
   * Enable search filtering
   */
  searchable?: boolean;
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
  /**
   * Error message to display below the dropdown
   */
  error?: string;
  /**
   * Disable the entire dropdown
   */
  disabled?: boolean;
  /**
   * Additional wrapper class names
   */
  className?: string;
  /**
   * Border radius of the dropdown trigger ('flat' | 'rounded' | 'circle' | 'default')
   */
  radius?: 'flat' | 'rounded' | 'circle' | 'default';
  /**
   * Custom toggle icon to replace the default CaretDown
   */
  toggleIcon?: React.ReactNode;
  /**
   * Maximum number of items that can be selected in multiple mode
   */
  maxSelection?: number;
}

export const Dropdown = ({
  label,
  options = [],
  value,
  onChange,
  multiple = false,
  searchable = false,
  placeholder = 'Select an option...',
  error,
  disabled = false,
  className = '',
  radius = 'default',
  toggleIcon,
  maxSelection,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [internalValue, setInternalValue] = useState<string | number | (string | number)[]>(
    value !== undefined ? value : (multiple ? [] : '')
  );

  const isControlled = value !== undefined;

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = useMemo(() => {
    if (!searchTerm) return options;
    return options.filter(opt => opt.label.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, options]);

  const currentValues = useMemo((): (string | number)[] => {
    const activeValue = value !== undefined ? value : internalValue;
    if (multiple) {
      return Array.isArray(activeValue) ? (activeValue as (string | number)[]) : [];
    }
    return activeValue !== undefined && activeValue !== '' ? [activeValue as string | number] : [];
  }, [value, internalValue, multiple]);

  const handleSelect = (option: DropdownOption) => {
    if (option.disabled || disabled) return;

    if (multiple) {
      const isSelected = currentValues.includes(option.value);
      if (!isSelected && maxSelection && currentValues.length >= maxSelection) return;

      const newValues = isSelected
        ? currentValues.filter(v => v !== option.value)
        : [...currentValues, option.value];
      if (!isControlled) setInternalValue(newValues);
      if (onChange) onChange(newValues);
    } else {
      if (!isControlled) setInternalValue(option.value);
      if (onChange) onChange(option.value);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  const handleSelectAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    let allValidValues = options.filter(o => !o.disabled).map(o => o.value);
    if (maxSelection) {
      allValidValues = allValidValues.slice(0, maxSelection);
    }
    if (!isControlled) setInternalValue(allValidValues);
    if (onChange) onChange(allValidValues);
  };

  const handleClearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    const clearValue = multiple ? [] : '';
    if (!isControlled) setInternalValue(clearValue);
    if (onChange) onChange(clearValue);
  };

  const handleRemoveValue = (e: React.MouseEvent, val: string | number) => {
    e.stopPropagation();
    if (disabled) return;
    const newValues = (currentValues as (string | number)[]).filter(v => v !== val);
    if (!isControlled) setInternalValue(newValues);
    if (onChange) onChange(newValues);
  };

  const getDisplayLabel = () => {
    if (currentValues.length === 0) {
      return <span className="storybook-complex-dropdown-trigger-content--placeholder">{placeholder}</span>;
    }
    
    if (multiple) {
      const displayValues = currentValues.slice(0, 2);
      const remainingCount = currentValues.length - 2;

      return (
        <>
          {displayValues.map(val => {
            const opt = options.find(o => o.value === val);
            if (!opt) return null;
            return (
              <span key={String(val)} className="storybook-complex-dropdown-chip anim-in">
                {opt.image && (
                  <img src={opt.image} alt="" className="storybook-complex-dropdown-img--chip" />
                )}
                {opt.icon && !opt.image && (
                  <span className="opacity-70 flex items-center">{opt.icon}</span>
                )}
                <span className="truncate max-w-[120px]">{opt.label}</span>
                <button 
                  type="button" 
                  className="storybook-complex-dropdown-chip-btn"
                  onClick={(e) => handleRemoveValue(e, val as string | number)}
                  disabled={opt.disabled || disabled}
                >
                  <X weight="bold" size={12} />
                </button>
              </span>
            );
          })}
          {remainingCount > 0 && (
            <span className="storybook-complex-dropdown-chip storybook-complex-dropdown-chip--counter anim-in">
              +{remainingCount}
            </span>
          )}
        </>
      );
    }

    if (currentValues.length === 1) {
      const opt = options.find(o => o.value === currentValues[0]);
      if (opt) {
        return (
          <>
            {opt.image && (
              <img src={opt.image} alt="" className="storybook-complex-dropdown-img--trigger" />
            )}
            {opt.icon && !opt.image && (
              <span className="storybook-complex-dropdown-trigger-icon">{opt.icon}</span>
            )}
            <span className="truncate py-1">{opt.label}</span>
          </>
        );
      }
    }
    return <span className="truncate py-1">{currentValues.length} items selected</span>;
  };

  return (
    <div className={`storybook-complex-dropdown-wrapper ${className}`} ref={wrapperRef}>
      {label && <label className="storybook-complex-dropdown-label">{label}</label>}

      {/* Trigger */}
      <div
        className={[
          'storybook-complex-dropdown-trigger',
          `storybook-complex-dropdown-trigger--radius-${radius}`,
          disabled ? 'storybook-complex-dropdown-trigger--disabled' : '',
          error ? 'storybook-complex-dropdown-trigger--error' : '',
          isOpen ? 'storybook-complex-dropdown-trigger--open' : ''
        ].filter(Boolean).join(' ')}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="storybook-complex-dropdown-trigger-content">
          {getDisplayLabel()}
        </div>
        <div className="flex items-center gap-2">
          {currentValues.length > 0 && (
            <X
              weight="bold"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              onClick={handleClearAll}
            />
          )}
          <div className={`storybook-complex-dropdown-trigger-icon-wrapper transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            {toggleIcon ? (
              toggleIcon
            ) : (
              <CaretDown weight="bold" className="text-gray-500" />
            )}
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && !isOpen && <span className="storybook-complex-dropdown-error-msg">{error}</span>}

      {/* Popover */}
      {isOpen && !disabled && (
        <div className={`storybook-complex-dropdown-popover radius-${radius} anim-popover`}>
          {/* Search */}
          {searchable && (
            <div className="storybook-complex-dropdown-popover-search-wrapper">
              <MagnifyingGlass className="storybook-complex-dropdown-popover-search-icon" />
              <input
                type="text"
                className="storybook-complex-dropdown-popover-search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                autoFocus
              />
              {searchTerm && (
                <button
                  type="button"
                  className="storybook-complex-dropdown-popover-search-clear"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchTerm('');
                  }}
                >
                  <X weight="bold" size={14} />
                </button>
              )}
            </div>
          )}

          {/* Multiple Actions */}
          {multiple && (
            <div className="storybook-complex-dropdown-popover-actions">
              <button type="button" className="storybook-complex-dropdown-popover-actions-btn" onClick={handleSelectAll}>
                Select All
              </button>
              <button type="button" className="storybook-complex-dropdown-popover-actions-btn" onClick={handleClearAll}>
                Clear All
              </button>
            </div>
          )}

          {/* Options List */}
          <ul className="storybook-complex-dropdown-popover-list">
            {filteredOptions.length === 0 ? (
              <li className="storybook-complex-dropdown-popover-empty">No options found.</li>
            ) : (
              filteredOptions.map((option: DropdownOption) => {
                const isSelected = currentValues.includes(option.value);
                const isLimitReached = !!(multiple && maxSelection && currentValues.length >= maxSelection && !isSelected);
                const isItemDisabled = !!(option.disabled || isLimitReached);

                return (
                  <li
                    key={option.value}
                    className={[
                      'storybook-complex-dropdown-popover-item group',
                      isSelected ? 'storybook-complex-dropdown-popover-item--selected' : '',
                      isItemDisabled ? 'storybook-complex-dropdown-popover-item--disabled' : ''
                    ].filter(Boolean).join(' ')}
                    onClick={() => !isItemDisabled && handleSelect(option)}
                  >
                    {multiple && (
                      <input
                        type="checkbox"
                        checked={isSelected}
                        disabled={isItemDisabled}
                        readOnly
                        className="storybook-complex-dropdown-popover-item-checkbox"
                      />
                    )}
                    {option.image && (
                      <img src={option.image} alt="" className="storybook-complex-dropdown-img--list" />
                    )}
                    {option.icon && !option.image && (
                      <span className="storybook-complex-dropdown-popover-item-icon">{option.icon}</span>
                    )}
                    <span className="flex-1 truncate">{option.label}</span>
                    
                    {/* Animated CheckCircle for single select */}
                    {!multiple && isSelected && (
                      <CheckCircle 
                        weight="fill" 
                        size={18}
                        className="text-green-500 ml-auto anim-selection" 
                      />
                    )}
                    {!multiple && !isSelected && !option.disabled && (
                      <CheckCircle 
                        weight="regular"
                        size={18}
                        className="text-gray-300 ml-auto transition-all duration-300 transform scale-75 opacity-0 group-hover:opacity-50" 
                      />
                    )}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
