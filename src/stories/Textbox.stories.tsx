import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textbox } from '../components/Textbox';
import { Envelope, MagnifyingGlass } from '@phosphor-icons/react';

const meta: Meta<typeof Textbox> = {
  title: 'WD/Textbox',
  component: Textbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Standard Textbox',
    placeholder: 'Enter text...',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot type here',
    disabled: true,
  },
};

export const Numeric: Story = {
  args: {
    label: 'Numeric Only',
    placeholder: '123456789',
    validationType: 'numeric',
  },
};

export const Alphanumeric: Story = {
  args: {
    label: 'Alphanumeric Only',
    placeholder: 'A1B2C3',
    validationType: 'alphanumeric',
  },
};

export const PhoneNumber: Story = {
  args: {
    label: 'Phone Number',
    placeholder: '(555) 555-5555',
    validationType: 'phone',
  },
};

export const CreditCard: Story = {
  args: {
    label: 'Card Number',
    placeholder: '0000 0000 0000 0000',
    validationType: 'card',
  },
};

export const ZipCode: Story = {
  args: {
    label: 'Zip Code',
    placeholder: '12345-6789',
    validationType: 'zipcode',
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    value: 'johndoe',
    error: 'Username is already taken.',
  },
};

export const WithIconLeft: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'hello@example.com',
    icon: <Envelope size={20} />,
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search for something...',
    icon: <MagnifyingGlass size={20} />,
    iconPosition: 'right',
  },
};

export const Password: Story = {
  args: {
    label: 'Account Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
};

// ─── Floating Label Stories ───────────────────────────────────────────────────

export const FloatingLabel: Story = {
  args: {
    label: 'Full Name',
    floatingLabel: true,
  },
};

export const FloatingLabelWithIcon: Story = {
  args: {
    label: 'Email Address',
    floatingLabel: true,
    icon: <Envelope size={20} />,
    iconPosition: 'left',
  },
};

export const FloatingLabelError: Story = {
  args: {
    label: 'Username',
    floatingLabel: true,
    value: 'johndoe',
    error: 'Username is already taken.',
  },
};

export const FloatingLabelDisabled: Story = {
  args: {
    label: 'Company',
    floatingLabel: true,
    value: 'Acme Corp',
    disabled: true,
  },
};

export const FloatingLabelPassword: Story = {
  args: {
    label: 'Password',
    floatingLabel: true,
    type: 'password',
  },
};

// ─── Multiline Stories ────────────────────────────────────────────────────────

export const Multiline: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message here...',
    multiline: true,
    rows: 4,
  },
};

export const MultilineWithFloatingLabel: Story = {
  args: {
    label: 'Comments',
    multiline: true,
    floatingLabel: true,
    rows: 4,
  },
};

export const MultilineError: Story = {
  args: {
    label: 'Description',
    multiline: true,
    value: 'This is a short description',
    error: 'Description must be at least 100 characters'
  },
};

export const MultilineWithMaxLength: Story = {
  args: {
    label: 'Biography',
    multiline: true,
    placeholder: 'Tell us about yourself...',
    maxLength: 150,
    floatingLabel: true,
  },
};

