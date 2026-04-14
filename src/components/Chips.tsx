import React, { useState } from 'react';
import { X, Check } from '@phosphor-icons/react';

export interface ChipProps {
  /**
   * Main text of the chip
   */
  label: string;
  /**
   * Visual style variant
   */
  variant?: 'filled' | 'outlined' | 'flat' | 'ghost';
  /**
   * Semantic color theme
   */
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
  /**
   * Size variant
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Border radius style
   */
  rounded?: 'full' | 'lg' | 'none';
  /**
   * Icon displayed at the start of the chip
   */
  icon?: React.ReactNode;
  /**
   * If true, the chip can be removed with a close button
   */
  closable?: boolean;
  /**
   * Callback when the close button is clicked
   */
  onClose?: () => void;
  /**
   * If true, the chip can be toggled by clicking
   */
  selectable?: boolean;
  /**
   * Controlled selected state
   */
  selected?: boolean;
  /**
   * Callback when selection state changes
   */
  onSelectChange?: (selected: boolean) => void;
  /**
   * Additional wrapper class names
   */
  className?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
}

export const Chip = ({
  label,
  variant = 'filled',
  color = 'primary',
  size = 'md',
  rounded = 'full',
  icon,
  closable = false,
  onClose,
  selectable = false,
  selected,
  onSelectChange,
  className = '',
  disabled = false,
}: ChipProps) => {
  const [internalSelected, setInternalSelected] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Use controlled or internal state for selection
  const isSelected = selected !== undefined ? selected : internalSelected;

  const handleToggle = () => {
    if (disabled || !selectable) return;
    const nextState = !isSelected;
    if (onSelectChange) {
      onSelectChange(nextState);
    } else {
      setInternalSelected(nextState);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;
    setIsVisible(false);
    if (onClose) {
      setTimeout(onClose, 200); // Allow animation to finish
    }
  };

  if (!isVisible) return null;

  const chipClasses = [
    'storybook-chip',
    `storybook-chip--${variant}`,
    `storybook-chip--${color}`,
    `storybook-chip--${size}`,
    `storybook-chip--rounded-${rounded}`,
    isSelected ? 'is-selected' : '',
    selectable ? 'is-selectable' : '',
    disabled ? 'is-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={chipClasses}
      onClick={handleToggle}
      role={selectable ? 'checkbox' : undefined}
      aria-checked={selectable ? isSelected : undefined}
    >
      {/* Start Icon / Selection Checkmark */}
      {selectable && isSelected ? (
        <span className="storybook-chip-icon-check">
          <Check weight="bold" />
        </span>
      ) : (
        icon && <span className="storybook-chip-icon-start">{icon}</span>
      )}

      {/* Label */}
      <span className="storybook-chip-label">{label}</span>

      {/* Close Button */}
      {closable && !disabled && (
        <button
          type="button"
          className="storybook-chip-close-btn"
          onClick={handleClose}
          aria-label={`Remove ${label}`}
        >
          <X weight="bold" />
        </button>
      )}
    </div>
  );
};
