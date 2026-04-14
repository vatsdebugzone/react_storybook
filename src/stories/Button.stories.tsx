import type { Meta, StoryObj } from '@storybook/react-vite';
import { AirplaneTilt, DotsThreeVertical } from '@phosphor-icons/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'WD/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const IconLeft: Story = {
  args: {
    primary: true,
    label: 'Icon Left',
    icon: <AirplaneTilt weight="fill" />,
    iconPosition: 'left',
  },
};

export const IconRight: Story = {
  args: {
    primary: true,
    label: 'Icon Right',
    icon: <AirplaneTilt weight="fill" />,
    iconPosition: 'right',
  },
};

export const DisabledIconLeft: Story = {
  args: {
    primary: true,
    label: 'Disabled Icon Left',
    icon: <AirplaneTilt weight="fill" />,
    iconPosition: 'left',
    disabled: true,
  },
};

export const DisabledIconRight: Story = {
  args: {
    primary: true,
    label: 'Disabled Icon Right',
    icon: <AirplaneTilt weight="fill" />,
    iconPosition: 'right',
    disabled: true,
  },
};

export const Dropdown: Story = {
  args: {
    primary: true,
    label: 'Options',
    dropdownOptions: [
      { label: 'Profile', onClick: () => console.log('Profile clicked') },
      { label: 'Settings', onClick: () => console.log('Settings clicked') },
      { label: 'Logout', onClick: () => console.log('Logout clicked') },
    ],
  },
};

export const DropdownSecondary: Story = {
  args: {
    label: 'More Actions',
    dropdownOptions: [
      { 
        label: 'Edit (Icon Left)', 
        onClick: () => alert('Edit clicked'),
        icon: <AirplaneTilt weight="fill" />,
        iconPosition: 'left'
      },
      { 
        label: 'Delete (Icon Right)', 
        onClick: () => alert('Delete clicked'),
        icon: <AirplaneTilt weight="fill" />,
        iconPosition: 'right'
      },
      { 
        label: 'Move (Disabled)', 
        onClick: () => alert('Should not alert'),
        icon: <AirplaneTilt weight="fill" />,
        disabled: true
      },
    ],
  },
};

export const CustomClass: Story = {
  args: {
    primary: true,
    label: 'Tailwind Overrides',
    className: 'bg-red-500 hover:bg-red-600 rounded-none shadow-lg',
  },
};

export const RadiusFlat: Story = {
  args: {
    primary: true,
    label: 'Flat Radius',
    radius: 'flat',
  },
};

export const RadiusRounded: Story = {
  args: {
    primary: true,
    label: 'Rounded Radius',
    radius: 'rounded',
  },
};

export const RadiusCircle: Story = {
  args: {
    primary: true,
    label: 'Circle Radius',
    radius: 'circle',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost Button',
  },
};

export const ContextMenu: Story = {
  args: {
    variant: 'ghost',
    iconOnly: true,
    radius: 'circle',
    icon: <DotsThreeVertical size={20} weight="bold" />,
    dropdownOptions: [
      { label: 'Edit', onClick: () => alert('Edit clicked'), icon: <AirplaneTilt size={16} /> },
      { label: 'Share', onClick: () => alert('Share clicked') },
      { label: 'Download', onClick: () => alert('Download clicked') },
      { label: 'Delete', onClick: () => alert('Delete clicked'), disabled: true },
    ],
  },
};