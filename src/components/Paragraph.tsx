import React from 'react';

export interface ParagraphProps {
  /**
   * The text or content to display
   */
  children: React.ReactNode;
  /**
   * Font size variant
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /**
   * Font weight variant
   */
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black';
  /**
   * Font family variant
   */
  fontFamily?: 'sans' | 'serif' | 'mono';
  /**
   * Text color variant
   */
  color?: 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'error' | 'white';
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  /**
   * Italicize text
   */
  italic?: boolean;
  /**
   * Apply premium text gradient
   */
  gradient?: boolean;
  /**
   * Line height control
   */
  lineHeight?: 'tight' | 'normal' | 'relaxed' | 'loose';
  /**
   * Additional wrapper class names
   */
  className?: string;
  /**
   * Custom style object
   */
  style?: React.CSSProperties;
}

export const Paragraph = ({
  children,
  size = 'md',
  weight = 'normal',
  fontFamily = 'sans',
  color = 'default',
  align = 'left',
  italic = false,
  gradient = false,
  lineHeight = 'normal',
  className = '',
  style,
}: ParagraphProps) => {
  const paragraphClasses = [
    'storybook-paragraph',
    `storybook-paragraph--size-${size}`,
    `storybook-paragraph--weight-${weight}`,
    `storybook-paragraph--family-${fontFamily}`,
    `storybook-paragraph--color-${color}`,
    `storybook-paragraph--align-${align}`,
    `storybook-paragraph--lh-${lineHeight}`,
    italic ? 'storybook-paragraph--italic' : '',
    gradient ? 'storybook-paragraph--gradient' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <p className={paragraphClasses} style={style}>
      {children}
    </p>
  );
};
