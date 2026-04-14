import React, { useRef, useState, useEffect } from 'react';
import './OTPInput.scss';

export interface OTPInputProps {
  /**
   * Number of digits (default: 6)
   */
  length?: number;
  /**
   * Callback when the full code is entered
   */
  onComplete?: (otp: string) => void;
  /**
   * Callback when any digit changes
   */
  onChange?: (otp: string) => void;
  /**
   * Mask the input characters (e.g., for PINs)
   */
  mask?: boolean;
  /**
   * Visual variant
   */
  variant?: 'default' | 'bordered' | 'glass';
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Error state
   */
  error?: boolean;
  /**
   * Additional wrapper class names
   */
  className?: string;
  /**
   * Accessibility label
   */
  label?: string;
}

export const OTPInput = ({
  length = 6,
  onComplete,
  onChange,
  mask = false,
  variant = 'default',
  loading = false,
  error = false,
  className = '',
  label = 'OTP Verification Code',
}: OTPInputProps) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize/Sync otp and refs array
  useEffect(() => {
    setOtp(prev => {
      const newOtp = new Array(length).fill('');
      // Preserve existing digits if length increases
      prev.slice(0, length).forEach((digit, i) => {
        newOtp[i] = digit;
      });
      return newOtp;
    });
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleChange = (value: string, index: number) => {
    // Only allow numbers
    const cleanValue = value.replace(/[^0-9]/g, '');
    if (!cleanValue) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      onChange?.(newOtp.join(''));
      return;
    }

    // Take only the last character if multiple are entered (handled by paste separately)
    const digit = cleanValue.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    onChange?.(newOtp.join(''));

    // Move focus to next input
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if complete
    const fullOtp = newOtp.join('');
    if (fullOtp.length === length) {
      onComplete?.(fullOtp);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        // Fall back to previous input if current is empty
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, length).replace(/[^0-9]/g, '');
    
    if (pastedData) {
      const newOtp = [...otp];
      pastedData.split('').forEach((char, i) => {
        if (i < length) newOtp[i] = char;
      });
      setOtp(newOtp);
      onChange?.(newOtp.join(''));
      
      // Focus last filled or next empty
      const focusIndex = Math.min(pastedData.length, length - 1);
      inputRefs.current[focusIndex]?.focus();

      if (newOtp.join('').length === length) {
        onComplete?.(newOtp.join(''));
      }
    }
  };

  const containerClasses = [
    'storybook-otp-container',
    `storybook-otp-container--${variant}`,
    loading ? 'storybook-otp-container--loading' : '',
    error ? 'storybook-otp-container--error' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} aria-label={label}>
      {otp.map((digit, index) => (
        <div key={index} className="storybook-otp-cell-wrapper">
          <input
            ref={(el) => { inputRefs.current[index] = el; }}
            type={mask ? 'password' : 'text'}
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className={`storybook-otp-cell ${digit ? 'filled' : ''}`}
            autoComplete="one-time-code"
            disabled={loading}
          />
          {index === Math.floor(length / 2) - 1 && length > 4 && (
            <div className="storybook-otp-separator" />
          )}
        </div>
      ))}
    </div>
  );
};
