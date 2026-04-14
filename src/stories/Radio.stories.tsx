import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup } from '../components/RadioGroup';
import React from 'react';
import { 
  CreditCard, 
  Bank, 
  PaypalLogo, 
  Storefront,
  Pizza,
  Hamburger,
  Coffee,
  IceCream
} from '@phosphor-icons/react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    gap: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info', 'neutral'],
    },
    iconPlacement: {
      control: 'select',
      options: ['start', 'end'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const PLAN_OPTIONS = [
  { label: 'Starter Plan - $0/mo', value: 'starter' },
  { label: 'Pro Plan - $19/mo', value: 'pro' },
  { label: 'Enterprise Plan - Custom', value: 'enterprise' },
  { label: 'Legacy Plan (Disabled)', value: 'legacy', disabled: true },
];

export const Vertical: Story = {
  args: {
    label: 'Select Your Plan (Vertical)',
    options: PLAN_OPTIONS,
    orientation: 'vertical',
    defaultValue: 'starter',
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Plan Comparison (Horizontal)',
    options: PLAN_OPTIONS,
    orientation: 'horizontal',
    defaultValue: 'pro',
    variant: 'bordered',
  },
};

export const SemanticColors: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <RadioGroup label="Success Theme" options={PLAN_OPTIONS.slice(0, 3)} color="success" defaultValue="starter" orientation="horizontal" />
      <RadioGroup label="Warning Theme" options={PLAN_OPTIONS.slice(0, 3)} color="warning" defaultValue="starter" orientation="horizontal" />
      <RadioGroup label="Error Theme" options={PLAN_OPTIONS.slice(0, 3)} color="error" defaultValue="starter" orientation="horizontal" />
      <RadioGroup label="Info Theme" options={PLAN_OPTIONS.slice(0, 3)} color="info" defaultValue="starter" orientation="horizontal" />
    </div>
  )
};

export const GlassVariants: Story = {
  render: () => (
    <div className="p-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl">
      <RadioGroup 
        label="Premium Selection (Glass)" 
        options={PLAN_OPTIONS.slice(0, 3)} 
        variant="glass" 
        color="white" 
        defaultValue="pro" 
        orientation="vertical"
        className="text-white"
      />
    </div>
  )
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState('starter');
    return (
      <div className="space-y-4 min-w-[300px]">
        <RadioGroup 
          label="Controlled Selection" 
          options={PLAN_OPTIONS.slice(0, 3)} 
          value={value} 
          onChange={setValue} 
          variant="bordered"
          color="primary"
        />
        <div className="p-4 bg-gray-50 rounded-lg border text-xs font-mono">
          Selected Value: <span className="text-blue-600 font-bold">{value}</span>
        </div>
      </div>
    );
  }
};

export const WithIcons: Story = {
  args: {
    label: 'Payment Method',
    orientation: 'vertical',
    gap: 'md',
    variant: 'bordered',
    color: 'primary',
    options: [
      { label: 'Credit Card', value: 'card', icon: <CreditCard weight="duotone" /> },
      { label: 'Bank Transfer', value: 'bank', icon: <Bank weight="duotone" /> },
      { label: 'PayPal', value: 'paypal', icon: <PaypalLogo weight="duotone" /> },
      { label: 'In-Store', value: 'store', icon: <Storefront weight="duotone" /> },
    ],
    defaultValue: 'card',
  },
};

export const IconPlacementEnd: Story = {
  args: {
    label: 'Payment Method (Icon End)',
    orientation: 'vertical',
    iconPlacement: 'end',
    variant: 'bordered',
    options: [
      { label: 'Credit Card', value: 'card', icon: <CreditCard weight="duotone" /> },
      { label: 'Bank Transfer', value: 'bank', icon: <Bank weight="duotone" /> },
      { label: 'PayPal', value: 'paypal', icon: <PaypalLogo weight="duotone" /> },
      { label: 'In-Store', value: 'store', icon: <Storefront weight="duotone" /> },
    ],
    defaultValue: 'card',
  },
};

export const StaggeredEntry: Story = {
  render: () => {
    const [key, setKey] = React.useState(0);
    return (
      <div className="flex flex-col items-center gap-6">
        <RadioGroup 
          key={key}
          label="Choose Your Order" 
          options={[
            { label: 'Pizza Margherita', value: 'pizza', icon: <Pizza /> },
            { label: 'Classic Burger', value: 'burger', icon: <Hamburger /> },
            { label: 'Iced Coffee', value: 'coffee', icon: <Coffee /> },
            { label: 'Vanilla Ice Cream', value: 'icecream', icon: <IceCream /> },
          ]} 
          orientation="vertical"
        />
        <button 
          onClick={() => setKey(prev => prev + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Re-animate
        </button>
      </div>
    );
  }
};
