import React, { useState } from 'react';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import type { ChangeEvent } from 'react';

export type ValidationType = 'alphanumeric' | 'numeric' | 'phone' | 'card' | 'zipcode' | 'none';

export interface TextboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'onChange'> {
  label?: string;
  validationType?: ValidationType;
  error?: string;
  onChange?: (value: string) => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  radius?: 'flat' | 'rounded' | 'circle' | 'default';
  floatingLabel?: boolean;
  multiline?: boolean;
  rows?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  maxLength?: number;
}

export const Textbox = ({
  label,
  validationType = 'none',
  error,
  disabled = false,
  className = '',
  onChange,
  value,
  icon,
  iconPosition = 'left',
  radius = 'default',
  type,
  floatingLabel = false,
  onFocus,
  onBlur,
  multiline = false,
  rows = 4,

  resize = 'vertical',
  placeholder,
  maxLength,
  ...props
}: TextboxProps) => {
  const [internalValue, setInternalValue] = useState(value || '');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const formatValue = (val: string, type: ValidationType) => {
    let clean = val;
    switch (type) {
      case 'numeric': return val.replace(/[^0-9]/g, '');
      case 'alphanumeric': return val.replace(/[^a-zA-Z0-9]/g, '');
      case 'phone':
        clean = val.replace(/\D/g, '').slice(0, 10);
        if (clean.length >= 7) return `(${clean.slice(0, 3)}) ${clean.slice(3, 6)}-${clean.slice(6)}`;
        if (clean.length >= 4) return `(${clean.slice(0, 3)}) ${clean.slice(3)}`;
        if (clean.length > 0) return `(${clean}`;
        return clean;
      case 'card':
        clean = val.replace(/\D/g, '').slice(0, 16);
        const matches = clean.match(/.{1,4}/g);
        return matches ? matches.join(' ') : clean;
      case 'zipcode':
        clean = val.replace(/\D/g, '').slice(0, 9);
        if (clean.length > 5) return `${clean.slice(0, 5)}-${clean.slice(5)}`;
        return clean;
      default: return val;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let formatted = formatValue(e.target.value, validationType);
    if (maxLength !== undefined && formatted.length > maxLength) {
      formatted = formatted.slice(0, maxLength);
    }
    setInternalValue(formatted);
    if (onChange) onChange(formatted);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(true);
    if (onFocus) (onFocus as React.FocusEventHandler<typeof e.target>)(e as any);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false);
    if (onBlur) (onBlur as React.FocusEventHandler<typeof e.target>)(e as any);
  };

  const displayValue = value !== undefined ? value : internalValue;
  const hasValue = String(displayValue).length > 0;
  const isFloated = floatingLabel && (isFocused || hasValue);

  const sharedClassName = [
    'storybook-textbox-input',
    `storybook-textbox-input--radius-${radius}`,
    !multiline && iconPosition === 'left' && icon ? 'storybook-textbox-input--pl-icon' : 'storybook-textbox-input--pl-normal',
    !multiline && ((iconPosition === 'right' && icon) || type === 'password') ? 'storybook-textbox-input--pr-icon' : 'storybook-textbox-input--pr-normal',
    disabled ? 'is-disabled' : 'storybook-textbox-input--enabled',
    error ? 'has-error' : '',
    floatingLabel ? 'storybook-textbox-input--floating' : '',
    multiline ? 'storybook-textbox-input--multiline' : '',
  ].filter(Boolean).join(' ');

  const floatingLabelNode = label && floatingLabel && (
    <label
      className={[
        'storybook-textbox-floating-label',
        !multiline && iconPosition === 'left' && icon ? 'storybook-textbox-floating-label--icon-offset' : '',
        isFloated ? 'is-floated' : '',
        isFocused ? 'is-focused' : '',
        error ? 'has-error' : '',
        disabled ? 'is-disabled' : '',
        multiline ? 'storybook-textbox-floating-label--multiline' : '',
      ].filter(Boolean).join(' ')}
    >
      {label}
    </label>
  );

  return (
    <div className={`storybook-textbox-wrapper ${className}`}>
      {/* Static label (non-floating mode) */}
      {label && !floatingLabel && (
        <label className="storybook-textbox-label">{label}</label>
      )}

      <div className={[
        'storybook-textbox-input-container',
        floatingLabel ? 'storybook-textbox-input-container--floating' : '',
        multiline ? 'storybook-textbox-input-container--multiline' : '',
      ].filter(Boolean).join(' ')}>

        {/* Left icon (single-line only) */}
        {!multiline && iconPosition === 'left' && icon && (
          <span className="storybook-textbox-icon storybook-textbox-icon--left">
            {icon}
          </span>
        )}

        {/* ── MULTILINE ── */}
        {multiline ? (
          <textarea
            className={sharedClassName}
            style={{ resize }}
            disabled={disabled}
            value={displayValue}
            rows={rows}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={floatingLabel ? '' : placeholder}
            maxLength={maxLength}
          />
        ) : (
          /* ── SINGLE LINE ── */
          <input
            type={type === 'password' && isPasswordVisible ? 'text' : type || 'text'}
            className={sharedClassName}
            disabled={disabled}
            value={displayValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={floatingLabel ? '' : placeholder}
            maxLength={maxLength}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {/* Floating label */}
        {floatingLabelNode}

        {/* Password toggle / right icon (single-line only) */}
        {!multiline && (
          type === 'password' ? (
            <button
              type="button"
              className="storybook-textbox-password-toggle"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              disabled={disabled}
            >
              {isPasswordVisible ? <EyeSlash size={18} weight="bold" /> : <Eye size={18} weight="bold" />}
            </button>
          ) : (
            iconPosition === 'right' && icon && (
              <span className="storybook-textbox-icon storybook-textbox-icon--right">
                {icon}
              </span>
            )
          )
        )}
      </div>

      <div className="storybook-textbox-bottom-row">
        {error ? (
          <span className="storybook-textbox-error-msg">{error}</span>
        ) : (
          <span /> // spacer
        )}

        {maxLength !== undefined && (
          <span className="storybook-textbox-char-count">
            {String(displayValue).length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};
