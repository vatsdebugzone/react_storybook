import React, { useState } from 'react';
import { Radio } from './Radio';

export interface RadioGroupOption {
  label: string;
  value: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface RadioGroupProps {
  /**
   * Optional group label/header
   */
  label?: string;
  /**
   * Array of radio options
   */
  options: RadioGroupOption[];
  /**
   * Controlled value
   */
  value?: string;
  /**
   * Initial value (uncontrolled)
   */
  defaultValue?: string;
  /**
   * Callback when selection changes
   */
  onChange?: (value: string) => void;
  /**
   * Layout orientation
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Spacing between radios
   */
  gap?: 'sm' | 'md' | 'lg';
  /**
   * Size variant for all radios in the group
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Semantic color theme for all radios in the group
   */
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'white';
  /**
   * Position of icons relative to labels for all items
   */
  iconPlacement?: 'start' | 'end';
  /**
   * Visual style variant for all radios in the group
   */
  variant?: 'default' | 'glass' | 'bordered';
  /**
   * Individual radio name for accessibility
   */
  name?: string;
  /**
   * Additional wrapper class names
   */
  className?: string;
}

export const RadioGroup = ({
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
  name,
  className = '',
}: RadioGroupProps) => {
  const [internalValue, setInternalValue] = useState<string>(defaultValue || '');
  const groupName = name || `radio-group-${Math.random().toString(36).substr(2, 9)}`;

  const currentValue = value !== undefined ? value : internalValue;

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value;
    if (value === undefined) {
      setInternalValue(nextValue);
    }
    if (onChange) {
      onChange(nextValue);
    }
  };

  const groupClasses = [
    'storybook-radio-group',
    `storybook-radio-group--${orientation}`,
    `storybook-radio-group--gap-${gap}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={groupClasses} role="radiogroup" aria-label={label}>
      {label && <h4 className="storybook-radio-group-label">{label}</h4>}
      <div className="storybook-radio-group-items">
        {options.map((option, index) => (
          <Radio
            key={option.value}
            name={groupName}
            label={option.label}
            icon={option.icon}
            value={option.value}
            checked={currentValue === option.value}
            disabled={option.disabled}
            onChange={handleRadioChange}
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
