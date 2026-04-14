import React, { useState, useRef, useEffect } from 'react';
import { CaretDown } from '@phosphor-icons/react';

export interface ButtonDropdownOption {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
  dropdownOptions?: ButtonDropdownOption[];
  dropdownAlign?: 'left' | 'right';
  radius?: 'flat' | 'rounded' | 'circle';
}

export const Button = ({
  primary = false,
  variant,
  size = 'medium',
  backgroundColor,
  label,
  icon,
  iconPosition = 'left',
  iconOnly = false,
  className = '',
  disabled = false,
  dropdownOptions,
  dropdownAlign = 'left',
  radius = 'circle',
  onClick,
  ...props
}: ButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Map short size names to full ones for CSS
  const sizeMap: Record<string, string> = {
    'sm': 'small',
    'md': 'medium',
    'lg': 'large',
    'small': 'small',
    'medium': 'medium',
    'large': 'large'
  };
  const finalSize = sizeMap[size] || 'medium';

  // Determine final variant (support backward compatibility with 'primary' boolean)
  const finalVariant = variant || (primary ? 'primary' : 'secondary');
  const variantClass = `storybook-button--${finalVariant}`;
  
  useEffect(() => {
    if (!dropdownOptions) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOptions]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (dropdownOptions) {
      setIsOpen(!isOpen);
    }
    if (onClick) {
      onClick(e);
    }
  };

  const buttonElement = (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${finalSize}`,
        variantClass,
        disabled ? 'is-disabled' : '',
        `storybook-button--${radius}`,
        iconOnly ? 'storybook-button--icon-only' : '',
        className
      ].filter(Boolean).join(' ')}
      style={backgroundColor ? { backgroundColor } : undefined}
      disabled={disabled}
      onClick={handleButtonClick}
      {...props}
    >
      {iconPosition === 'left' && icon && <span className={iconOnly ? '' : 'storybook-button-icon'}>{icon}</span>}
      {!iconOnly && label && <span>{label}</span>}
      {iconPosition === 'right' && icon && <span className={iconOnly ? '' : 'storybook-button-icon'}>{icon}</span>}
      {dropdownOptions && !iconOnly && (
        <CaretDown
          weight="bold"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      )}
    </button>
  );

  if (!dropdownOptions) {
    return buttonElement;
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {buttonElement}
      
      {isOpen && (
        <div className={`storybook-dropdown-menu storybook-dropdown-menu--${dropdownAlign}`}>
          <ul className="storybook-dropdown-menu-list">
            {dropdownOptions.map((option: ButtonDropdownOption, index: number) => {
              const optIconPos = option.iconPosition || 'left';
              return (
                <li key={index}>
                  <button
                    type="button"
                    onClick={(e) => {
                      if (option.disabled) {
                        e.preventDefault();
                        return;
                      }
                      option.onClick();
                      setIsOpen(false);
                    }}
                    disabled={option.disabled}
                    className={[
                       'storybook-dropdown-menu-item',
                       option.disabled 
                         ? 'storybook-dropdown-menu-item--disabled' 
                         : 'storybook-dropdown-menu-item--enabled'
                    ].join(' ')}
                  >
                    {optIconPos === 'left' && option.icon && <span>{option.icon}</span>}
                    <span className="flex-1 text-left">{option.label}</span>
                    {optIconPos === 'right' && option.icon && <span>{option.icon}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
