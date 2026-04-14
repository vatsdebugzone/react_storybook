import React, { useState, useEffect } from 'react';
import { X, DotsThreeVertical, IdentificationBadge, Fingerprint, QrCode, CreditCard as CreditCardIcon, SimCard, User } from '@phosphor-icons/react';
import { Button } from './Button';
import type { ButtonDropdownOption } from './Button';

export interface CardTab {
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface CardIdentityData {
  number?: string;
  name?: string;
  expiry?: string;
  dob?: string;
  photo?: string;
  role?: string;
  issuer?: string;
  gender?: 'Male' | 'Female' | 'Other';
  address?: string;
}


export interface CardProps {
  /**
   * Main title of the card
   */
  title?: string;
  /**
   * Subtitle displayed below the title
   */
  subtitle?: string;
  /**
   * Slot for extra content in the header (e.g., buttons, icons)
   */
  headerExtra?: React.ReactNode;
  /**
   * Main content of the card (ignored if tabs are provided)
   */
  children?: React.ReactNode;
  /**
   * Slot for footer content/actions
   */
  footer?: React.ReactNode;
  /**
   * URL for a featured image
   */
  image?: string;
  /**
   * Position of the image relative to content
   */
  imagePosition?: 'top' | 'bottom' | 'background';
  /**
   * Array of tabs to render within the card
   */
  tabs?: CardTab[];
  /**
   * Size variant of the card
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /**
   * Visual style variant
   */
  variant?: 'default' | 'bordered' | 'glass' | 'flat';
  /**
   * Callback when the close button is clicked
   */
  onClose?: () => void;
  /**
   * Options for a context menu (triple dots)
   */
  menuOptions?: ButtonDropdownOption[];
  /**
   * Enable hover lift/tilt effect
   */
  hoverable?: boolean;
  /**
   * Additional wrapper class names
   */
  className?: string;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Specialized identity card type
   */
  cardType?: 'credit' | 'pan' | 'aadhar' | 'id';
  /**
   * Data for the specialized identity card
   */
  identityData?: CardIdentityData;
}

export const Card = ({
  title,
  subtitle,
  headerExtra,
  children,
  footer,
  image,
  imagePosition = 'top',
  tabs,
  size = 'md',
  variant = 'default',
  onClose,
  menuOptions,
  hoverable = false,
  className = '',
  loading = false,
  cardType,
  identityData,
}: CardProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const hasTabs = tabs && tabs.length > 0;

  useEffect(() => {
    if (hasTabs && activeTab >= (tabs?.length || 0)) {
      setActiveTab(0);
    }
  }, [tabs, activeTab, hasTabs]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      setTimeout(onClose, 300); // Wait for exit animation
    }
  };

  if (!isVisible) return null;

  const hasHeader = (title || subtitle || headerExtra || onClose || menuOptions) && !cardType;

  const cardClasses = [
    'storybook-premium-card',
    `storybook-premium-card--${size}`,
    `storybook-premium-card--${variant}`,
    cardType ? `storybook-premium-card--${cardType}` : '',
    hoverable ? 'storybook-premium-card--hoverable' : '',
    loading ? 'storybook-premium-card--loading' : '',
    imagePosition === 'background' ? 'storybook-premium-card--with-bg' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      {/* Background Image */}
      {image && imagePosition === 'background' && (
        <div 
          className="storybook-premium-card-bg-overlay"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* Header Image (Top) */}
      {image && imagePosition === 'top' && (
        <div className="storybook-premium-card-image-top">
          <img src={image} alt={title || 'Card image'} />
        </div>
      )}

      {/* Header Container */}
      {hasHeader && (
        <div className="storybook-premium-card-header">
          <div className="storybook-premium-card-header-main">
            {title && <h3 className="storybook-premium-card-title">{title}</h3>}
            {subtitle && <p className="storybook-premium-card-subtitle">{subtitle}</p>}
          </div>
          <div className="storybook-premium-card-header-actions">
            {headerExtra}
            {menuOptions && (
              <Button
                variant="ghost"
                size="small"
                iconOnly
                icon={<DotsThreeVertical size={20} weight="bold" />}
                dropdownOptions={menuOptions}
                className="storybook-premium-card-menu-btn"
              />
            )}
            {onClose && (
              <button 
                type="button" 
                className="storybook-premium-card-close-btn"
                onClick={handleClose}
                aria-label="Close card"
              >
                <X weight="bold" size={18} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Tab Bar */}
      {hasTabs && (
        <div className="storybook-premium-card-tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              className={`storybook-premium-card-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
              disabled={tab.disabled}
            >
              {tab.icon && <span className="storybook-premium-card-tab-icon">{tab.icon}</span>}
              <span className="storybook-premium-card-tab-label">{tab.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Main Body */}
      <div className="storybook-premium-card-body">
        {loading ? (
          <div className="storybook-premium-card-loader">
            <div className="storybook-premium-card-loader-line" />
            <div className="storybook-premium-card-loader-line w-3/4" />
            <div className="storybook-premium-card-loader-line w-1/2" />
          </div>
        ) : (
          <div className="storybook-premium-card-content anim-reveal">
            {cardType ? (
              <div className={`storybook-identity-layout storybook-identity-layout--${cardType}`}>
                <div className="storybook-identity-shimmer" />
                
                {cardType === 'credit' && (
                  <div className="storybook-credit-card">
                    <div className="storybook-credit-card-top identity-reveal-item" style={{ '--delay': '0.1s' } as React.CSSProperties}>
                      <div className="storybook-credit-card-chip">
                        <SimCard size={32} weight="duotone" />
                      </div>
                      <div className="storybook-credit-card-issuer">
                        {identityData?.issuer || 'PREMIUM BANK'}
                      </div>
                    </div>
                    <div className="storybook-credit-card-number identity-reveal-item" style={{ '--delay': '0.2s' } as React.CSSProperties}>
                      {identityData?.number || '•••• •••• •••• ••••'}
                    </div>
                    <div className="storybook-credit-card-bottom identity-reveal-item" style={{ '--delay': '0.3s' } as React.CSSProperties}>
                      <div className="storybook-credit-card-info">
                        <span className="label">CARD HOLDER</span>
                        <span className="value">{identityData?.name || 'NAME SURNAME'}</span>
                      </div>
                      <div className="storybook-credit-card-info">
                        <span className="label">EXPIRES</span>
                        <span className="value">{identityData?.expiry || 'MM/YY'}</span>
                      </div>
                      <div className="storybook-credit-card-type">
                        <CreditCardIcon size={32} weight="fill" />
                      </div>
                    </div>
                  </div>
                )}

                {cardType === 'pan' && (
                  <div className="storybook-pan-card">
                    <div className="storybook-pan-card-header identity-reveal-item" style={{ '--delay': '0.1s' } as React.CSSProperties}>
                      <div className="storybook-pan-card-gov">INCOME TAX DEPARTMENT</div>
                      <div className="storybook-pan-card-label">PAN CARD</div>
                    </div>
                    <div className="storybook-pan-card-body">
                      <div className="storybook-pan-card-photo identity-reveal-item" style={{ '--delay': '0.2s' } as React.CSSProperties}>
                        {identityData?.photo ? <img src={identityData.photo} alt="PAN Photo" /> : <div className="placeholder"><IdentificationBadge size={48} /></div>}
                      </div>
                      <div className="storybook-pan-card-details identity-reveal-item" style={{ '--delay': '0.3s' } as React.CSSProperties}>
                        <div className="field">
                          <span className="label">Name</span>
                          <span className="value">{identityData?.name || 'FULL NAME'}</span>
                        </div>
                        <div className="field">
                          <span className="label">Permanent Account Number</span>
                          <span className="value number">{identityData?.number || 'ABCDE1234F'}</span>
                        </div>
                      </div>
                    </div>
                    <div className="storybook-pan-card-footer identity-reveal-item" style={{ '--delay': '0.4s' } as React.CSSProperties}>
                      <Fingerprint size={24} />
                    </div>
                  </div>
                )}

                {cardType === 'aadhar' && (
                  <div className="storybook-aadhar-card">
                    <div className="storybook-aadhar-header identity-reveal-item" style={{ '--delay': '0.1s' } as React.CSSProperties}>
                      <div className="storybook-aadhar-gov">Unique Identification Authority of India</div>
                    </div>
                    <div className="storybook-aadhar-body">
                      <div className="storybook-aadhar-photo identity-reveal-item" style={{ '--delay': '0.2s' } as React.CSSProperties}>
                         {identityData?.photo ? <img src={identityData.photo} alt="Aadhar Photo" /> : <div className="placeholder"><IdentificationBadge size={48} /></div>}
                      </div>
                      <div className="storybook-aadhar-details identity-reveal-item" style={{ '--delay': '0.3s' } as React.CSSProperties}>
                        <div className="name">{identityData?.name || 'FULL NAME'}</div>
                        <div className="info">DOB: {identityData?.dob || 'DD/MM/YYYY'}</div>
                        <div className="info">Gender: {identityData?.gender || 'Male'}</div>
                        <div className="uid">{identityData?.number || '0000 0000 0000'}</div>
                      </div>
                      <div className="storybook-aadhar-qr identity-reveal-item" style={{ '--delay': '0.4s' } as React.CSSProperties}>
                        <QrCode size={48} />
                      </div>
                    </div>
                  </div>
                )}

                {cardType === 'id' && (
                  <div className="storybook-id-card">
                    <div className="storybook-id-header identity-reveal-item" style={{ '--delay': '0.1s' } as React.CSSProperties}>
                       <div className="storybook-id-issuer">{identityData?.issuer || 'COMPANY NAME'}</div>
                    </div>
                    <div className="storybook-id-content">
                      <div className="storybook-id-photo identity-reveal-item" style={{ '--delay': '0.2s' } as React.CSSProperties}>
                         {identityData?.photo ? <img src={identityData.photo} alt="ID Photo" /> : <div className="placeholder"><User size={48} /></div>}
                      </div>
                      <div className="storybook-id-details identity-reveal-item" style={{ '--delay': '0.3s' } as React.CSSProperties}>
                        <div className="name">{identityData?.name || 'EMPLOYEE NAME'}</div>
                        <div className="role">{identityData?.role || 'Job Position'}</div>
                        <div className="id-number">ID: {identityData?.number || 'EMP-001'}</div>
                      </div>
                    </div>
                  </div>
                )}


              </div>
            ) : (
              hasTabs ? (
                <div className="storybook-premium-card-tab-content anim-tab-switch">
                  {tabs[activeTab].content}
                </div>
              ) : (
                children
              )
            )}
          </div>
        )}
      </div>

      {/* Footer Image (Bottom) */}
      {image && imagePosition === 'bottom' && (
        <div className="storybook-premium-card-image-bottom">
          <img src={image} alt={title || 'Card image'} />
        </div>
      )}

      {/* Footer */}
      {footer && (
        <div className="storybook-premium-card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};
