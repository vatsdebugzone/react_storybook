import React, { useState, useEffect, useRef } from 'react';

export interface CheckboxProps {
  /**
   * Main label for the checkbox
   */
  label?: React.ReactNode;
  /**
   * Controlled checked state
   */
  checked?: boolean;
  /**
   * Initial checked state (uncontrolled)
   */
  defaultChecked?: boolean;
  /**
   * Indeterminate state (mixed)
   */
  indeterminate?: boolean;
  /**
   * Callback on value change
   */
  onChange?: (checked: boolean) => void;
  /**
   * Size variant
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Semantic color theme
   */
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
  /**
   * Visual style variant
   */
  variant?: 'default' | 'glass' | 'bordered';
  /**
   * Label position relative to checkbox
   */
  labelPlacement?: 'start' | 'end';
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Optional icon to display next to the label
   */
  icon?: React.ReactNode;
  /**
   * Position of the icon relative to the label (if provided)
   */
  iconPlacement?: 'start' | 'end';
  /**
   * Additional wrapper class names
   */
  className?: string;
  /**
   * Custom style object for animations/overrides
   */
  style?: React.CSSProperties;
  /**
   * ID for the input element
   */
  id?: string;
}

export const Checkbox = ({
  label,
  checked,
  defaultChecked,
  indeterminate = false,
  onChange,
  size = 'md',
  color = 'primary',
  variant = 'default',
  labelPlacement = 'end',
  disabled = false,
  icon,
  iconPlacement = 'start',
  className = '',
  style,
  id,
}: CheckboxProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked || false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync internal state with prop if controlled
  const isChecked = checked !== undefined ? checked : internalChecked;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const nextChecked = e.target.checked;
    
    if (checked === undefined) {
      setInternalChecked(nextChecked);
    }
    
    if (onChange) {
      onChange(nextChecked);
    }
  };

  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  const wrapperClasses = [
    'storybook-checkbox-wrapper',
    `storybook-checkbox-wrapper--${size}`,
    `storybook-checkbox-wrapper--${labelPlacement}`,
    disabled ? 'is-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  const boxClasses = [
    'storybook-checkbox',
    `storybook-checkbox--${color}`,
    `storybook-checkbox--${variant}`,
    isChecked ? 'is-checked' : '',
    indeterminate ? 'is-indeterminate' : '',
  ].filter(Boolean).join(' ');

  return (
    <label className={wrapperClasses} htmlFor={checkboxId} style={style}>
      <div className="storybook-checkbox-container">
        <input
          type="checkbox"
          id={checkboxId}
          className="storybook-checkbox-input"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          ref={inputRef}
        />
        <div className={boxClasses}>
          {/* Animated Checkmark SVG */}
          <svg 
            className="storybook-checkbox-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {indeterminate ? (
              <line x1="5" y1="12" x2="19" y2="12" className="anim-indeterminate" />
            ) : (
              <polyline points="20 6 9 17 4 12" className="anim-check" />
            )}
          </svg>
        </div>
        <div className="storybook-checkbox-ripple" />
      </div>
      
      {(label || icon) && (
        <span className={`storybook-checkbox-label-container storybook-checkbox-label-container--${iconPlacement}`}>
          {icon && <span className="storybook-checkbox-icon-custom">{icon}</span>}
          {label && <span className="storybook-checkbox-label">{label}</span>}
        </span>
      )}
    </label>
  );
};
