import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxGroup } from '../components/CheckboxGroup';
import React from 'react';
import { 
  Bell, 
  Envelope, 
  ShieldCheck, 
  Lock, 
  Globe, 
  User 
} from '@phosphor-icons/react';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Forms/CheckboxGroup',
  component: CheckboxGroup,
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
    iconPlacement: {
      control: 'select',
      options: ['start', 'end'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

const PERMISSION_OPTIONS = [
  { label: 'Read Access', value: 'read' },
  { label: 'Write Access', value: 'write' },
  { label: 'Admin Access', value: 'admin' },
  { label: 'Delete Access', value: 'delete', disabled: true },
];

export const Vertical: Story = {
  args: {
    label: 'Permissions (Vertical)',
    options: PERMISSION_OPTIONS,
    orientation: 'vertical',
    defaultValue: ['read'],
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Permissions (Horizontal)',
    options: PERMISSION_OPTIONS,
    orientation: 'horizontal',
    defaultValue: ['read', 'write'],
  },
};

export const Gaps: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <CheckboxGroup label="Gap Small" options={PERMISSION_OPTIONS} orientation="horizontal" gap="sm" />
      <CheckboxGroup label="Gap Medium" options={PERMISSION_OPTIONS} orientation="horizontal" gap="md" />
      <CheckboxGroup label="Gap Large" options={PERMISSION_OPTIONS} orientation="horizontal" gap="lg" />
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <CheckboxGroup label="Small Group" options={PERMISSION_OPTIONS} size="sm" orientation="horizontal" />
      <CheckboxGroup label="Medium Group" options={PERMISSION_OPTIONS} size="md" orientation="horizontal" />
      <CheckboxGroup label="Large Group" options={PERMISSION_OPTIONS} size="lg" orientation="horizontal" />
    </div>
  )
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState(['read']);
    return (
      <div className="space-y-4 min-w-[300px]">
        <CheckboxGroup 
          label="Controlled Group" 
          options={PERMISSION_OPTIONS} 
          value={value} 
          onChange={setValue} 
        />
        <div className="p-4 bg-gray-50 rounded-lg border text-xs font-mono">
          Selected: {JSON.stringify(value)}
        </div>
      </div>
    );
  }
};

export const WithIcons: Story = {
  args: {
    label: 'Account Features',
    orientation: 'vertical',
    gap: 'md',
    options: [
      { label: 'Push Notifications', value: 'notifications', icon: <Bell weight="duotone" /> },
      { label: 'Email Updates', value: 'email', icon: <Envelope weight="duotone" /> },
      { label: 'Advanced Security', value: 'security', icon: <ShieldCheck weight="duotone" /> },
      { label: 'Public Profile', value: 'profile', icon: <User weight="duotone" /> },
    ],
    defaultValue: ['notifications', 'security'],
    color: 'primary',
    variant: 'bordered',
  },
};

export const IconPlacementEnd: Story = {
  args: {
    label: 'Account Features (Icon End)',
    orientation: 'vertical',
    iconPlacement: 'end',
    options: [
      { label: 'Push Notifications', value: 'notifications', icon: <Bell weight="duotone" /> },
      { label: 'Email Updates', value: 'email', icon: <Envelope weight="duotone" /> },
      { label: 'Advanced Security', value: 'security', icon: <ShieldCheck weight="duotone" /> },
      { label: 'Public Profile', value: 'profile', icon: <User weight="duotone" /> },
    ],
    defaultValue: ['notifications'],
    variant: 'bordered',
  },
};

export const StaggeredEntry: Story = {
  render: () => {
    const [key, setKey] = React.useState(0);
    return (
      <div className="flex flex-col items-center gap-6">
        <CheckboxGroup 
          key={key}
          label="Staggered Animation" 
          options={[
            { label: 'Step 1: Planning', value: 'p', icon: <Globe /> },
            { label: 'Step 2: Execution', value: 'e', icon: <Lock /> },
            { label: 'Step 3: Verification', value: 'v', icon: <ShieldCheck /> },
            { label: 'Step 4: Deployment', value: 'd', icon: <Globe /> },
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
