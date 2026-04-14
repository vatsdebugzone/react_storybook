import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../components/Checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info', 'neutral'],
    },
    variant: {
      control: 'select',
      options: ['default', 'glass', 'bordered'],
    },
    labelPlacement: {
      control: 'select',
      options: ['start', 'end'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {
    label: 'I agree to the terms and conditions',
    color: 'primary',
    size: 'md',
  },
};

export const SemanticColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Success State" color="success" defaultChecked />
      <Checkbox label="Warning State" color="warning" defaultChecked />
      <Checkbox label="Error State" color="error" defaultChecked />
      <Checkbox label="Info State" color="info" defaultChecked />
      <Checkbox label="Neutral State" color="neutral" defaultChecked />
    </div>
  )
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-gray-100 rounded-xl">
      <Checkbox label="Default Variant" variant="default" defaultChecked />
      <Checkbox label="Glassmorphism Variant (On Background)" variant="glass" defaultChecked />
      <Checkbox label="Bordered Variant" variant="bordered" defaultChecked />
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Small Checkbox" size="sm" defaultChecked />
      <Checkbox label="Medium Checkbox" size="md" defaultChecked />
      <Checkbox label="Large Checkbox" size="lg" defaultChecked />
    </div>
  )
};

export const Placement: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Checkbox label="Label at End (Default)" labelPlacement="end" defaultChecked />
      <Checkbox label="Label at Start" labelPlacement="start" defaultChecked />
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Checked State" checked={true} />
      <Checkbox label="Unchecked State" checked={false} />
      <Checkbox label="Indeterminate State" indeterminate={true} />
      <Checkbox label="Disabled Checked" checked={true} disabled />
      <Checkbox label="Disabled Unchecked" checked={false} disabled />
    </div>
  )
};

export const InteractiveGroup: Story = {
  render: () => {
    const [checkedItems, setCheckedItems] = useState([true, false, false]);
    
    const allChecked = checkedItems.every(Boolean);
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
    
    const handleParentChange = (checked: boolean) => {
      setCheckedItems([checked, checked, checked]);
    };
    
    const handleChildChange = (index: number, checked: boolean) => {
      const nextItems = [...checkedItems];
      nextItems[index] = checked;
      setCheckedItems(nextItems);
    };

    return (
      <div className="flex flex-col gap-2 border p-6 rounded-xl bg-white shadow-sm min-w-[300px]">
        <Checkbox 
          label="Select all permissions" 
          checked={allChecked} 
          indeterminate={isIndeterminate}
          onChange={handleParentChange}
          color="primary"
          className="pb-2 border-b mb-1"
        />
        <div className="flex flex-col gap-2 ml-6">
          <Checkbox label="Read access" checked={checkedItems[0]} onChange={(c) => handleChildChange(0, c)} size="sm" />
          <Checkbox label="Write access" checked={checkedItems[1]} onChange={(c) => handleChildChange(1, c)} size="sm" />
          <Checkbox label="Admin access" checked={checkedItems[2]} onChange={(c) => handleChildChange(2, c)} size="sm" />
        </div>
      </div>
    );
  }
};
