import React from 'react';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Main label for the radio button
   */
  label?: React.ReactNode;
  /**
   * Current value of the radio button
   */
  value: string;
  /**
   * If true, the radio button is selected
   */
  checked?: boolean;
  /**
   * Size variant
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Semantic color theme
   */
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'white';
  /**
   * Visual style variant
   */
  variant?: 'default' | 'glass' | 'bordered';
  /**
   * Label position relative to radio
   */
  labelPlacement?: 'start' | 'end';
  /**
   * Optional icon to display next to the label
   */
  icon?: React.ReactNode;
  /**
   * Position of the icon relative to the label (if provided)
   */
  iconPlacement?: 'start' | 'end';
  /**
   * Custom style object for animations/overrides
   */
  style?: React.CSSProperties;
}

export const Radio = ({
  label,
  value,
  checked,
  size = 'md',
  color = 'primary',
  variant = 'default',
  labelPlacement = 'end',
  disabled = false,
  icon,
  iconPlacement = 'start',
  style,
  className = '',
  id,
  ...props
}: RadioProps) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  const wrapperClasses = [
    'storybook-radio-wrapper',
    `storybook-radio-wrapper--${size}`,
    `storybook-radio-wrapper--${labelPlacement}`,
    disabled ? 'is-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  const boxClasses = [
    'storybook-radio',
    `storybook-radio--${color}`,
    `storybook-radio--${variant}`,
    checked ? 'is-checked' : '',
  ].filter(Boolean).join(' ');

  return (
    <label className={wrapperClasses} htmlFor={radioId} style={style}>
      <div className="storybook-radio-container">
        <input
          type="radio"
          id={radioId}
          className="storybook-radio-input"
          checked={checked}
          disabled={disabled}
          value={value}
          {...props}
        />
        <div className={boxClasses}>
          {/* Animated Center Dot */}
          <div className="storybook-radio-dot" />
        </div>
        <div className="storybook-radio-ripple" />
      </div>
      
      {(label || icon) && (
        <span className={`storybook-radio-label-container storybook-radio-label-container--${iconPlacement}`}>
          {icon && <span className="storybook-radio-icon-custom">{icon}</span>}
          {label && <span className="storybook-radio-label">{label}</span>}
        </span>
      )}
    </label>
  );
};
