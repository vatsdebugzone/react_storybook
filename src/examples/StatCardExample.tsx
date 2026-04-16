import { StatCard } from '../components';
import { Users, ShoppingCart, CurrencyDollar, ChartLineUp, Eye, Heart } from '@phosphor-icons/react';

/**
 * StatCard Component — Usage Examples
 *
 * Features: icon, trend indicator, sparkline, progress bar,
 *           sub-metrics, comparison, colorScheme, gradient, featured
 */
export default function StatCardExample() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', padding: '2rem' }}>

      {/* ── Basic Stat ── */}
      <StatCard
        title="Total Users"
        value="12,847"
        icon={<Users size={24} weight="duotone" />}
        trend="+12.5%"
        trendDirection="up"
        trendPeriod="vs last month"
        colorScheme="primary"
      />

      {/* ── Revenue ── */}
      <StatCard
        title="Revenue"
        value="48,290"
        prefix="$"
        icon={<CurrencyDollar size={24} weight="duotone" />}
        trend="+8.2%"
        trendDirection="up"
        colorScheme="success"
      />

      {/* ── Orders (down trend) ── */}
      <StatCard
        title="Orders"
        value="1,429"
        icon={<ShoppingCart size={24} weight="duotone" />}
        trend="-3.1%"
        trendDirection="down"
        colorScheme="warning"
      />

      {/* ── Growth with Sparkline ── */}
      <StatCard
        title="Growth Rate"
        value="23.4"
        suffix="%"
        icon={<ChartLineUp size={24} weight="duotone" />}
        trend="+5.7%"
        trendDirection="up"
        colorScheme="info"
        sparkline={[
          { value: 10 }, { value: 15 }, { value: 13 },
          { value: 20 }, { value: 18 }, { value: 25 },
          { value: 23 }, { value: 30 },
        ]}
        sparklineFilled
      />

      {/* ── With Progress Bar ── */}
      <StatCard
        title="Storage Used"
        value="67"
        suffix="%"
        icon={<Eye size={24} weight="duotone" />}
        progress={67}
        progressLabel="67 / 100 GB"
        progressVariant="primary"
        colorScheme="default"
      />

      {/* ── Featured + Gradient ── */}
      <StatCard
        title="Engagement"
        value="89.2K"
        icon={<Heart size={24} weight="duotone" />}
        trend="-1.8%"
        trendDirection="down"
        colorScheme="danger"
        gradient
        featured
        badge="LIVE"
        badgeVariant="danger"
      />

      {/* ── With Sub-Metrics ── */}
      <StatCard
        title="Active Users"
        value="8,200"
        icon={<Users size={24} weight="duotone" />}
        colorScheme="primary"
        subMetrics={[
          { label: 'Desktop', value: '5,100' },
          { label: 'Mobile',  value: '3,100' },
        ]}
      />

      {/* ── With Comparison ── */}
      <StatCard
        title="Monthly Sales"
        value="$12,400"
        icon={<ShoppingCart size={24} weight="duotone" />}
        colorScheme="success"
        comparison={{
          label: 'Last month',
          value: '$10,800',
          trendDirection: 'up',
        }}
      />
    </div>
  );
}
