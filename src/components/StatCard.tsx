import React from 'react';
import './StatCard.scss';

/** A single sub-metric shown beneath the main value (e.g. "Active: 8,200") */
export interface StatCardSubMetric {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

/** One data point in a sparkline series */
export interface StatCardSparkPoint {
  label?: string;
  value: number;
}

/** A comparison value shown alongside the main value */
export interface StatCardComparison {
  label: string;
  value: string | number;
  trendDirection?: 'up' | 'down' | 'neutral';
}

export interface StatCardProps {
  /** Card title (e.g. "Total Users") */
  title?: string;

  /** Primary numeric or text value displayed prominently */
  value: string | number;

  /** Text shown before the value (e.g. "₹", "$") */
  prefix?: string;

  /** Text shown after the value (e.g. "%", "hrs", "K") */
  suffix?: string;

  /** Short description or context line below the value */
  description?: string;

  // ─── Trend ──────────────────────────────────────────────────
  /** Trend label (e.g. "+12%", "–3.4%") */
  trend?: string;

  /** Visual direction of the trend arrow / colour cue */
  trendDirection?: 'up' | 'down' | 'neutral';

  /** Trend period label (e.g. "vs last week") */
  trendPeriod?: string;

  // ─── Icon ───────────────────────────────────────────────────
  /** Icon rendered inside the coloured icon bubble */
  icon?: React.ReactNode;

  /** CSS class for the icon bubble background (e.g. "bg-indigo-500") */
  iconBgClass?: string;

  /** Position of the icon relative to the stat text */
  iconPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'inline';

  // ─── Badge ──────────────────────────────────────────────────
  /** Small badge text overlaid on the card (e.g. "NEW", "LIVE") */
  badge?: string;

  /** Colour variant for the badge */
  badgeVariant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';

  // ─── Progress Bar ───────────────────────────────────────────
  /** Progress value (0–100) */
  progress?: number;

  /** Label at the end of the progress bar */
  progressLabel?: string;

  /** Colour variant for the progress bar */
  progressVariant?: 'primary' | 'success' | 'warning' | 'danger';

  // ─── Sparkline ──────────────────────────────────────────────
  /** Data points rendered as a mini sparkline chart */
  sparkline?: StatCardSparkPoint[];

  /** Colour of the sparkline stroke */
  sparklineColor?: string;

  /** Fill the area under the sparkline */
  sparklineFilled?: boolean;

  // ─── Sub-metrics ────────────────────────────────────────────
  /** Secondary metrics listed beneath the main value */
  subMetrics?: StatCardSubMetric[];

  // ─── Comparison ─────────────────────────────────────────────
  /** Comparison data (e.g. previous period or a target value) */
  comparison?: StatCardComparison;

  // ─── Layout / Appearance ────────────────────────────────────
  /** Card layout orientation */
  layout?: 'horizontal' | 'vertical' | 'compact';

  /** Predefined colour scheme */
  colorScheme?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

  /** Use a gradient background */
  gradient?: boolean;

  /** Disable the reveal animation */
  animated?: boolean;

  /** Make the value larger / bolder (hero stat) */
  featured?: boolean;

  /** Additional wrapper class names */
  className?: string;
}

/**
 * Renders a mini SVG sparkline from data points.
 */
const Sparkline: React.FC<{
  data: StatCardSparkPoint[];
  color?: string;
  filled?: boolean;
}> = ({ data, color = '#6366f1', filled = false }) => {
  if (!data || data.length < 2) return null;

  const width = 120;
  const height = 36;
  const padding = 2;

  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const points = values.map((v, i) => {
    const x = padding + (i / (values.length - 1)) * (width - padding * 2);
    const y = height - padding - ((v - min) / range) * (height - padding * 2);
    return `${x},${y}`;
  });

  const polyline = points.join(' ');
  const areaPath = `M${points[0]} ${points.join(' L')} L${width - padding},${height} L${padding},${height} Z`;

  return (
    <svg
      className="wd-stat-sparkline-svg"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
    >
      {filled && (
        <path d={areaPath} fill={color} opacity={0.12} />
      )}
      <polyline
        points={polyline}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  prefix,
  suffix,
  description,
  trend,
  trendDirection = 'up',
  trendPeriod,
  icon,
  iconBgClass = 'bg-indigo-500',
  iconPosition = 'top-right',
  badge,
  badgeVariant = 'info',
  progress,
  progressLabel,
  progressVariant = 'primary',
  sparkline,
  sparklineColor,
  sparklineFilled = false,
  subMetrics,
  comparison,
  layout = 'horizontal',
  colorScheme = 'default',
  gradient = false,
  animated = true,
  featured = false,
  className = '',
}) => {
  const rootClasses = [
    'wd-stat-card',
    `wd-stat-card--${layout}`,
    `wd-stat-card--${colorScheme}`,
    gradient ? 'wd-stat-card--gradient' : '',
    featured ? 'wd-stat-card--featured' : '',
    animated ? 'wd-stat-card--animated' : '',
    className,
  ].filter(Boolean).join(' ');

  const iconEl = icon ? (
    <div className={`wd-stat-card-icon ${iconBgClass}`}>
      {icon}
    </div>
  ) : null;

  const trendEl = trend ? (
    <div className={`wd-stat-card-trend wd-stat-card-trend--${trendDirection}`}>
      <span className="wd-stat-card-trend-value">{trend}</span>
      {trendPeriod && <span className="wd-stat-card-trend-period">{trendPeriod}</span>}
    </div>
  ) : null;

  return (
    <div className={rootClasses}>
      {/* Badge */}
      {badge && (
        <div className={`wd-stat-card-badge wd-stat-card-badge--${badgeVariant}`}>
          {badge}
        </div>
      )}

      {/* Main content */}
      <div className="wd-stat-card-body">
        {/* Icon top-left */}
        {iconPosition === 'top-left' && iconEl && (
          <div className="wd-stat-card-icon-wrap wd-stat-card-icon-wrap--top-left">{iconEl}</div>
        )}

        <div className="wd-stat-card-info">
          {title && <div className="wd-stat-card-title">{title}</div>}

          <div className={`wd-stat-card-value ${featured ? 'wd-stat-card-value--featured' : ''}`}>
            {prefix && <span className="wd-stat-card-prefix">{prefix}</span>}
            {value}
            {suffix && <span className="wd-stat-card-suffix">{suffix}</span>}
          </div>

          {description && <div className="wd-stat-card-desc">{description}</div>}

          {/* Trend */}
          {trendEl}

          {/* Comparison */}
          {comparison && (
            <div className={`wd-stat-card-comparison wd-stat-card-comparison--${comparison.trendDirection || 'neutral'}`}>
              <span className="wd-stat-card-comparison-label">{comparison.label}:</span>
              <span className="wd-stat-card-comparison-value">{comparison.value}</span>
            </div>
          )}
        </div>

        {/* Icon top-right (default) */}
        {(iconPosition === 'top-right' || iconPosition === 'inline') && iconEl && (
          <div className="wd-stat-card-icon-wrap wd-stat-card-icon-wrap--top-right">{iconEl}</div>
        )}
      </div>

      {/* Sparkline */}
      {sparkline && sparkline.length >= 2 && (
        <div className="wd-stat-sparkline">
          <Sparkline data={sparkline} color={sparklineColor} filled={sparklineFilled} />
        </div>
      )}

      {/* Progress bar */}
      {progress !== undefined && (
        <div className="wd-stat-progress">
          <div className="wd-stat-progress-track">
            <div
              className={`wd-stat-progress-fill wd-stat-progress-fill--${progressVariant}`}
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
          {progressLabel && <div className="wd-stat-progress-label">{progressLabel}</div>}
        </div>
      )}

      {/* Sub-metrics */}
      {subMetrics && subMetrics.length > 0 && (
        <div className="wd-stat-sub-metrics">
          {subMetrics.map((sm, i) => (
            <div className="wd-stat-sub-metric" key={i}>
              {sm.icon && <span className="wd-stat-sub-metric-icon">{sm.icon}</span>}
              <span className="wd-stat-sub-metric-label">{sm.label}</span>
              <span className="wd-stat-sub-metric-value">{sm.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
