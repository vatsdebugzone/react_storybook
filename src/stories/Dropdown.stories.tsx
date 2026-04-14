import type { Meta, StoryObj } from '@storybook/react-vite';
import { AirplaneTilt, CarProfile, Bicycle, Train, Boat, Plus } from '@phosphor-icons/react';
import { Dropdown } from '../components/Dropdown';
import { useState } from 'react';

const meta: Meta<typeof Dropdown> = {
  title: 'WD/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const standardOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date', disabled: true },
  { value: 'elderberry', label: 'Elderberry' },
];

const iconOptions = [
  { value: 'flight', label: 'Flight', icon: <AirplaneTilt /> },
  { value: 'car', label: 'Car', icon: <CarProfile /> },
  { value: 'bike', label: 'Bicycle', icon: <Bicycle /> },
  { value: 'train', label: 'Train', icon: <Train />, disabled: true },
  { value: 'boat', label: 'Boat', icon: <Boat /> },
];

export const SingleSelect: Story = {
  args: {
    label: 'Favorite Fruit',
    options: standardOptions,
    placeholder: 'Select a fruit...',
  },
};

export const MultiSelect: Story = {
  args: {
    label: 'Select Fruits (Multiple)',
    options: standardOptions,
    multiple: true,
    placeholder: 'Choose multiple fruits...',
  },
};

export const Searchable: Story = {
  args: {
    label: 'Searchable Options',
    options: standardOptions,
    searchable: true,
    placeholder: 'Search and select...',
  },
};

export const MultiSelectSearchable: Story = {
  args: {
    label: 'Multi-select with Search & Check All',
    options: standardOptions,
    multiple: true,
    searchable: true,
    placeholder: 'Find and select fruits...',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Transport Mode',
    options: iconOptions,
    placeholder: 'Select transport...',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Dropdown',
    options: standardOptions,
    disabled: true,
    placeholder: 'Cannot open this dropdown',
  },
};

export const WithError: Story = {
  args: {
    label: 'Required Selection',
    options: standardOptions,
    error: 'Please select an option before submitting.',
  },
};

// Interactive wrapper for demonstration
export const InteractiveInteractiveMultiSelect = () => {
  const [val, setVal] = useState<(string | number)[]>(['apple']);
  return (
    <Dropdown
      label="Stateful Multi-Select Example"
      options={standardOptions}
      multiple
      searchable
      value={val}
      onChange={(v) => setVal(v as (string | number)[])}
    />
  );
};

export const RadiusFlat: Story = {
  args: {
    label: 'Flat Radius Dropdown',
    options: standardOptions,
    radius: 'flat',
  },
};

export const RadiusCircle: Story = {
  args: {
    label: 'Circle Radius Dropdown',
    options: standardOptions,
    radius: 'circle',
  },
};

export const CustomToggleIcon: Story = {
  args: {
    label: 'Custom Toggle Icon',
    options: standardOptions,
    toggleIcon: <Plus size={20} weight="bold" />,
  },
};

export const MaxSelection3: Story = {
  args: {
    label: 'Select Max 3 Items',
    options: iconOptions,
    multiple: true,
    maxSelection: 3,
    placeholder: 'Pick up to 3 transport modes...',
  },
};

const imageOptions = [
  { value: 'user1', label: 'John Doe', image: 'https://i.pravatar.cc/150?u=1' },
  { value: 'user2', label: 'Jane Smith', image: 'https://i.pravatar.cc/150?u=2' },
  { value: 'user3', label: 'Bob Johnson', image: 'https://i.pravatar.cc/150?u=3' },
  { value: 'user4', label: 'Alice Williams', image: 'https://i.pravatar.cc/150?u=4' },
];

export const WithImages: Story = {
  args: {
    label: 'Select User',
    options: imageOptions,
    multiple: true,
    searchable: true,
    placeholder: 'Find and select users...',
  },
};
