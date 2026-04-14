import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatCard } from '../components/StatCard';
import {
  Users,
  CurrencyInr,
  ShoppingCart,
  Package,
  ChartLineUp,
  Lightning,
  Eye,
  Clock,
  ArrowUp,
  ArrowDown,
  UserPlus,
  Heartbeat,
} from '@phosphor-icons/react';

const meta: Meta<typeof StatCard> = {
  title: 'Components/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical', 'compact'],
    },
    colorScheme: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
    },
    trendDirection: {
      control: 'select',
      options: ['up', 'down', 'neutral'],
    },
    progressVariant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger'],
    },
    badgeVariant: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'info', 'neutral'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

// ─── Basic ──────────────────────────────────────────────────────
export const Basic: Story = {
  args: {
    title: 'Total Users',
    value: '12,450',
    trend: '+12%',
    trendDirection: 'up',
    icon: <Users size={22} weight="fill" />,
    iconBgClass: 'bg-indigo-500',
  },
};

// ─── Dashboard Row (matching your screenshot) ──────────────────
export const DashboardRow: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      <StatCard
        title="Total Users"
        value="12,450"
        trend="+12%"
        trendDirection="up"
        icon={<Users size={22} weight="fill" />}
        iconBgClass="bg-indigo-500"
      />
      <StatCard
        title="Revenue"
        value="8,42,000"
        prefix="₹"
        trend="+8.2%"
        trendDirection="up"
        icon={<CurrencyInr size={22} weight="fill" />}
        iconBgClass="bg-amber-500"
      />
      <StatCard
        title="Orders"
        value="1,280"
        trend="+5.1%"
        trendDirection="up"
        icon={<ShoppingCart size={22} weight="fill" />}
        iconBgClass="bg-orange-500"
      />
      <StatCard
        title="Products"
        value="356"
        trend="+2.4%"
        trendDirection="up"
        icon={<Package size={22} weight="fill" />}
        iconBgClass="bg-purple-500"
      />
    </div>
  ),
};

// ─── With Prefix & Suffix ──────────────────────────────────────
export const WithPrefixSuffix: Story = {
  args: {
    title: 'Monthly Revenue',
    value: '4,52,000',
    prefix: '₹',
    trend: '+18.3%',
    trendDirection: 'up',
    trendPeriod: 'vs last month',
    icon: <CurrencyInr size={22} weight="fill" />,
    iconBgClass: 'bg-emerald-500',
  },
};

// ─── Downward Trend ────────────────────────────────────────────
export const DownwardTrend: Story = {
  args: {
    title: 'Bounce Rate',
    value: '42.8',
    suffix: '%',
    trend: '-3.2%',
    trendDirection: 'down',
    description: 'Lower is better',
    icon: <ChartLineUp size={22} weight="fill" />,
    iconBgClass: 'bg-red-500',
  },
};

// ─── With Progress Bar ─────────────────────────────────────────
export const WithProgress: Story = {
  args: {
    title: 'Storage Used',
    value: '68',
    suffix: '%',
    progress: 68,
    progressLabel: '68 GB of 100 GB',
    progressVariant: 'warning',
    icon: <Package size={22} weight="fill" />,
    iconBgClass: 'bg-amber-500',
  },
};

// ─── With Sparkline ────────────────────────────────────────────
export const WithSparkline: Story = {
  args: {
    title: 'Page Views',
    value: '24,891',
    trend: '+14%',
    trendDirection: 'up',
    sparkline: [
      { value: 120 }, { value: 180 }, { value: 150 },
      { value: 220 }, { value: 190 }, { value: 280 },
      { value: 260 }, { value: 320 }, { value: 290 },
      { value: 350 }, { value: 380 }, { value: 410 },
    ],
    sparklineColor: '#6366f1',
    sparklineFilled: true,
    icon: <Eye size={22} weight="fill" />,
    iconBgClass: 'bg-indigo-500',
  },
};

// ─── With Sub-metrics ──────────────────────────────────────────
export const WithSubMetrics: Story = {
  args: {
    title: 'Active Users',
    value: '8,214',
    trend: '+5.3%',
    trendDirection: 'up',
    icon: <Users size={22} weight="fill" />,
    iconBgClass: 'bg-sky-500',
    subMetrics: [
      { label: 'New', value: '1,240', icon: <UserPlus size={12} /> },
      { label: 'Returning', value: '6,974', icon: <Heartbeat size={12} /> },
    ],
  },
};

// ─── With Comparison ───────────────────────────────────────────
export const WithComparison: Story = {
  args: {
    title: 'Avg. Response Time',
    value: '1.2',
    suffix: 's',
    trend: '-0.3s',
    trendDirection: 'down',
    comparison: {
      label: 'Last week',
      value: '1.5s',
      trendDirection: 'down',
    },
    icon: <Clock size={22} weight="fill" />,
    iconBgClass: 'bg-violet-500',
  },
};

// ─── With Badge ────────────────────────────────────────────────
export const WithBadge: Story = {
  args: {
    title: 'Real-time Visitors',
    value: '1,842',
    trend: '+22%',
    trendDirection: 'up',
    badge: 'LIVE',
    badgeVariant: 'danger',
    icon: <Lightning size={22} weight="fill" />,
    iconBgClass: 'bg-rose-500',
  },
};

// ─── Gradient Card ─────────────────────────────────────────────
export const GradientCard: Story = {
  args: {
    title: 'Total Revenue',
    value: '₹12,84,500',
    trend: '+23.5%',
    trendDirection: 'up',
    trendPeriod: 'this quarter',
    gradient: true,
    colorScheme: 'primary',
    icon: <CurrencyInr size={22} weight="fill" />,
    iconBgClass: 'bg-white/20',
  },
};

// ─── Gradient Variants Row ─────────────────────────────────────
export const GradientVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      <StatCard
        title="Revenue"
        value="₹8.4L"
        trend="+12%"
        trendDirection="up"
        gradient
        colorScheme="primary"
        icon={<CurrencyInr size={22} weight="fill" />}
        iconBgClass="bg-white/20"
      />
      <StatCard
        title="Growth"
        value="+23%"
        trend="+4.2%"
        trendDirection="up"
        gradient
        colorScheme="success"
        icon={<ArrowUp size={22} weight="bold" />}
        iconBgClass="bg-white/20"
      />
      <StatCard
        title="Alerts"
        value="12"
        trend="+3"
        trendDirection="up"
        gradient
        colorScheme="warning"
        icon={<Lightning size={22} weight="fill" />}
        iconBgClass="bg-white/20"
      />
      <StatCard
        title="Errors"
        value="5"
        trend="-2"
        trendDirection="down"
        gradient
        colorScheme="danger"
        icon={<ArrowDown size={22} weight="bold" />}
        iconBgClass="bg-white/20"
      />
    </div>
  ),
};

// ─── Compact Layout ────────────────────────────────────────────
export const CompactLayout: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <StatCard
        title="CPU"
        value="72"
        suffix="%"
        layout="compact"
        progress={72}
        progressVariant="warning"
      />
      <StatCard
        title="Memory"
        value="4.2"
        suffix="GB"
        layout="compact"
        progress={42}
        progressVariant="success"
      />
      <StatCard
        title="Disk"
        value="89"
        suffix="%"
        layout="compact"
        progress={89}
        progressVariant="danger"
      />
    </div>
  ),
};

// ─── Featured / Hero ───────────────────────────────────────────
export const Featured: Story = {
  args: {
    title: 'Total Sales This Year',
    value: '₹1.2Cr',
    trend: '+32.8%',
    trendDirection: 'up',
    trendPeriod: 'vs last year',
    featured: true,
    gradient: true,
    colorScheme: 'primary',
    sparkline: [
      { value: 40 }, { value: 65 }, { value: 50 },
      { value: 80 }, { value: 70 }, { value: 95 },
      { value: 110 }, { value: 100 }, { value: 130 },
      { value: 140 }, { value: 155 }, { value: 180 },
    ],
    sparklineColor: 'rgba(255,255,255,0.5)',
    sparklineFilled: true,
    icon: <ChartLineUp size={28} weight="fill" />,
    iconBgClass: 'bg-white/20',
  },
};

// ─── Full Kitchen Sink ─────────────────────────────────────────
export const KitchenSink: Story = {
  args: {
    title: 'Monthly Active Users',
    value: '34,892',
    trend: '+18.7%',
    trendDirection: 'up',
    trendPeriod: 'vs last month',
    description: 'Across all platforms',
    badge: 'NEW HIGH',
    badgeVariant: 'success',
    icon: <Users size={22} weight="fill" />,
    iconBgClass: 'bg-indigo-500',
    progress: 87,
    progressLabel: '87% of 40K target',
    progressVariant: 'primary',
    sparkline: [
      { value: 200 }, { value: 220 }, { value: 250 },
      { value: 230 }, { value: 270 }, { value: 300 },
      { value: 280 }, { value: 320 }, { value: 310 },
      { value: 350 }, { value: 340 }, { value: 380 },
    ],
    sparklineColor: '#6366f1',
    sparklineFilled: true,
    subMetrics: [
      { label: 'Mobile', value: '22,140', icon: <Heartbeat size={12} /> },
      { label: 'Desktop', value: '12,752', icon: <Eye size={12} /> },
    ],
    comparison: {
      label: 'Last month',
      value: '29,380',
      trendDirection: 'up',
    },
  },
};
