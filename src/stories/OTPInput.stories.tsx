import type { Meta, StoryObj } from '@storybook/react-vite';
import { OTPInput } from '../components/OTPInput';

const meta: Meta<typeof OTPInput> = {
  title: 'Forms/OTPInput',
  component: OTPInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    length: {
      control: { type: 'select' },
      options: [4, 6, 8],
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'bordered', 'glass'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof OTPInput>;

export const FourDigit: Story = {
  args: {
    length: 4,
    variant: 'default',
    onChange: (otp) => console.log('OTP Changed:', otp),
    onComplete: (otp) => alert(`Verification Successful: ${otp}`),
  },
};

export const SixDigit: Story = {
  args: {
    length: 6,
    variant: 'bordered',
    onComplete: (otp) => console.log('Final OTP:', otp),
  },
};

export const Masked: Story = {
  args: {
    length: 6,
    mask: true,
    variant: 'default',
  },
};

export const GlassVariant: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    length: 6,
    variant: 'glass',
  },
};

export const Loading: Story = {
  args: {
    length: 6,
    loading: true,
  },
};

export const Error: Story = {
  args: {
    length: 6,
    error: true,
  },
};
