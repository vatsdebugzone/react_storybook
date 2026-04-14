import React, { createContext, useContext, useState, forwardRef, useImperativeHandle, Children, isValidElement } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';

// --- Types ---
export type AccordionVariant = 'default' | 'bordered' | 'elevated' | 'flat';
export type AccordionRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';
export type AccordionSize = 'sm' | 'md' | 'lg';
export type AccordionColor = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface AccordionProps {
  children: React.ReactNode;
  allowMultiple?: boolean;
  variant?: AccordionVariant;
  radius?: AccordionRadius;
  className?: string;
  size?: AccordionSize;
  color?: AccordionColor;
  defaultExpandedKeys?: string[];
  onChange?: (expandedKeys: string[]) => void;
}

export interface AccordionItemProps {
  id: string; // Unique key for the item
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  startContent?: React.ReactNode; // e.g., an icon or avatar before the title
  disabled?: boolean;
  className?: string;
}

export interface AccordionRef {
  expandAll: () => void;
  collapseAll: () => void;
}

// --- Context ---
interface AccordionContextType {
  expandedKeys: Set<string>;
  toggleItem: (id: string, isOpen: boolean) => void;
  variant: AccordionVariant;
  radius: AccordionRadius;
  size: AccordionSize;
  color: AccordionColor;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion');
  }
  return context;
};

// --- Components ---

/**
 * Accordion Container
 */
export const Accordion = forwardRef<AccordionRef, AccordionProps>(({
  children,
  allowMultiple = false,
  variant = 'default',
  radius = 'md',
  className = '',
  size = 'md',
  color = 'default',
  defaultExpandedKeys = [],
  onChange,
}, ref) => {
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set(defaultExpandedKeys));

  const toggleItem = (id: string, isOpen: boolean) => {
    setExpandedKeys((prev) => {
      const newKeys = new Set(prev);
      if (isOpen) {
        if (!allowMultiple) {
          newKeys.clear(); // Close all others if multiple not allowed
        }
        newKeys.add(id);
      } else {
        newKeys.delete(id);
      }
      
      if (onChange) {
        onChange(Array.from(newKeys));
      }
      return newKeys;
    });
  };

  // Expose methods to the parent via ref
  useImperativeHandle(ref, () => ({
    expandAll: () => {
      if (!allowMultiple) {
        console.warn('Accordion: expandAll ignored because allowMultiple is false.');
        return;
      }
      // Gather all valid AccordionItem IDs
      const allIds = new Set<string>();
      Children.forEach(children, (child) => {
        if (isValidElement<AccordionItemProps>(child)) {
          const props = child.props as AccordionItemProps;
          if (props.id && !props.disabled) {
            allIds.add(props.id);
          }
        }
      });
      setExpandedKeys(allIds);
      if (onChange) onChange(Array.from(allIds));
    },
    collapseAll: () => {
      setExpandedKeys(new Set());
      if (onChange) onChange([]);
    }
  }));

  // Provide state to children
  return (
    <AccordionContext.Provider value={{ expandedKeys, toggleItem, variant, radius, size, color }}>
      <div className={`storybook-accordion storybook-accordion--${variant} storybook-accordion--radius-${radius} storybook-accordion--size-${size} storybook-accordion--color-${color} ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
});

Accordion.displayName = 'Accordion';

/**
 * Accordion Item
 */
export const AccordionItem = ({
  id,
  title,
  subtitle,
  children,
  startContent,
  disabled = false,
  className = '',
}: AccordionItemProps) => {
  const { expandedKeys, toggleItem } = useAccordionContext();
  const isOpen = expandedKeys.has(id);

  const handleToggle = () => {
    if (!disabled) {
      toggleItem(id, !isOpen);
    }
  };

  return (
    <div 
      className={[
        'storybook-accordion-item',
        isOpen ? 'is-open' : '',
        disabled ? 'is-disabled' : '',
        className
      ].filter(Boolean).join(' ')}
    >
      <button
        type="button"
        className="storybook-accordion-item__trigger"
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isOpen}
      >
        {startContent && (
          <div className="storybook-accordion-item__start-content">
            {startContent}
          </div>
        )}
        
        <div className="storybook-accordion-item__header-text">
          <span className="storybook-accordion-item__title">{title}</span>
          {subtitle && <span className="storybook-accordion-item__subtitle">{subtitle}</span>}
        </div>

        <div className={`storybook-accordion-item__indicator ${isOpen ? 'is-open' : ''}`}>
           {/* Crossfade/rotate animation between + and - handled via CSS */}
          <div className="indicator-icon icon-plus"><Plus size={20} weight="bold" /></div>
          <div className="indicator-icon icon-minus"><Minus size={20} weight="bold" /></div>
        </div>
      </button>

      {/* Grid-based animated drop-down */}
      <div className={`storybook-accordion-item__content-wrapper ${isOpen ? 'is-open' : ''}`}>
        <div className="storybook-accordion-item__content-inner">
          <div className="storybook-accordion-item__content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
