import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from '../components/Chips';
import {
  Tag,
  CheckCircle,
  Warning,
  XCircle,
  Info
} from '@phosphor-icons/react';
import React from 'react';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chips',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info', 'neutral'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'flat', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: 'select',
      options: ['full', 'lg', 'none'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Basic: Story = {
  args: {
    label: 'Standard Chip',
    color: 'primary',
    variant: 'filled',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'New Feature',
    icon: <Tag weight="fill" />,
    color: 'info',
    variant: 'flat',
  },
};

export const Removable: Story = {
  args: {
    label: 'Disposable Item',
    closable: true,
    onClose: () => console.log('Chip removed'),
    color: 'neutral',
    variant: 'outlined',
  },
};

export const Selectable: Story = {
  args: {
    label: 'Select Me',
    selectable: true,
    color: 'success',
    variant: 'flat',
  },
};

export const SemanticColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Chip label="Success" color="success" icon={<CheckCircle weight="fill" />} />
      <Chip label="Warning" color="warning" icon={<Warning weight="fill" />} />
      <Chip label="Error" color="error" icon={<XCircle weight="fill" />} />
      <Chip label="Info" color="info" icon={<Info weight="fill" />} />
    </div>
  )
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 items-center">
        <span className="w-20 text-xs font-bold text-gray-400">Filled</span>
        <Chip label="Primary" variant="filled" color="primary" />
        <Chip label="Success" variant="filled" color="success" />
        <Chip label="Error" variant="filled" color="error" />
      </div>
      <div className="flex gap-4 items-center">
        <span className="w-20 text-xs font-bold text-gray-400">Outlined</span>
        <Chip label="Primary" variant="outlined" color="primary" />
        <Chip label="Success" variant="outlined" color="success" />
        <Chip label="Error" variant="outlined" color="error" />
      </div>
      <div className="flex gap-4 items-center">
        <span className="w-20 text-xs font-bold text-gray-400">Flat</span>
        <Chip label="Primary" variant="flat" color="primary" />
        <Chip label="Success" variant="flat" color="success" />
        <Chip label="Error" variant="flat" color="error" />
      </div>
      <div className="flex gap-4 items-center">
        <span className="w-20 text-xs font-bold text-gray-400">Ghost</span>
        <Chip label="Primary" variant="ghost" color="primary" />
        <Chip label="Success" variant="ghost" color="success" />
        <Chip label="Error" variant="ghost" color="error" />
      </div>
    </div>
  )
};

export const SizesAndShapes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 items-center">
        <span className="w-20 text-xs font-bold text-gray-400">Sizes</span>
        <Chip label="Small" size="sm" color="info" />
        <Chip label="Medium" size="md" color="info" />
        <Chip label="Large" size="lg" color="info" />
      </div>
      <div className="flex gap-4 items-center">
        <span className="w-20 text-xs font-bold text-gray-400">Shapes</span>
        <Chip label="Full Rounded" rounded="full" variant="flat" />
        <Chip label="Large Rounded" rounded="lg" variant="flat" />
        <Chip label="Flat Corner" rounded="none" variant="flat" />
      </div>
    </div>
  )
};

export const DynamicGroup: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = React.useState<string[]>(['React']);
    const items = ['React', 'Vue', 'Svelte', 'Angular', 'Next.js', 'Vite'];

    const toggle = (item: string) => {
      setSelectedItems(prev =>
        prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
      );
    };

    return (
      <div className="space-y-4">
        <p className="text-sm font-medium text-gray-500">Select your favorite frameworks:</p>
        <div className="flex flex-wrap gap-2 max-w-sm">
          {items.map(item => (
            <Chip
              key={item}
              label={item}
              selectable
              selected={selectedItems.includes(item)}
              onSelectChange={() => toggle(item)}
              variant="outlined"
              color={selectedItems.includes(item) ? 'primary' : 'neutral'}
            />
          ))}
        </div>
      </div>
    );
  }
};
