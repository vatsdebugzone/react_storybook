import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

export interface CheckboxGroupOption {
  label: string;
  value: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface CheckboxGroupProps {
  /**
   * Optional group label/header
   */
  label?: string;
  /**
   * Array of checkbox options
   */
  options: CheckboxGroupOption[];
  /**
   * Controlled value (array of selected values)
   */
  value?: string[];
  /**
   * Initial value (uncontrolled)
   */
  defaultValue?: string[];
  /**
   * Callback when selection changes
   */
  onChange?: (value: string[]) => void;
  /**
   * Layout orientation
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Spacing between checkboxes
   */
  gap?: 'sm' | 'md' | 'lg';
  /**
   * Size variant for all checkboxes in the group
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Semantic color theme for all checkboxes in the group
   */
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
  /**
   * Visual style variant for all checkboxes in the group
   */
  variant?: 'default' | 'glass' | 'bordered';
  /**
   * Position of icons relative to labels for all items
   */
  iconPlacement?: 'start' | 'end';
  /**
   * Additional wrapper class names
   */
  className?: string;
}

export const CheckboxGroup = ({
  label,
  options,
  value,
  defaultValue,
  onChange,
  orientation = 'vertical',
  gap = 'md',
  size = 'md',
  color = 'primary',
  variant = 'default',
  iconPlacement = 'start',
  className = '',
}: CheckboxGroupProps) => {
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue || []);

  const currentValue = value !== undefined ? value : internalValue;

  const handleCheckboxChange = (optionValue: string, isChecked: boolean) => {
    let nextValue: string[];
    if (isChecked) {
      nextValue = [...currentValue, optionValue];
    } else {
      nextValue = currentValue.filter((v) => v !== optionValue);
    }

    if (value === undefined) {
      setInternalValue(nextValue);
    }

    if (onChange) {
      onChange(nextValue);
    }
  };

  const groupClasses = [
    'storybook-checkbox-group',
    `storybook-checkbox-group--${orientation}`,
    `storybook-checkbox-group--gap-${gap}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={groupClasses}>
      {label && <h4 className="storybook-checkbox-group-label">{label}</h4>}
      <div className="storybook-checkbox-group-items">
        {options.map((option, index) => (
          <Checkbox
            key={option.value}
            label={option.label}
            icon={option.icon}
            checked={currentValue.includes(option.value)}
            disabled={option.disabled}
            onChange={(checked) => handleCheckboxChange(option.value, checked)}
            size={size}
            color={color}
            variant={variant}
            iconPlacement={iconPlacement}
            style={{ '--stagger': index } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};
