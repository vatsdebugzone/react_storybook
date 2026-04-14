import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../components/Card';
import React from 'react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card/IdentityCards',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const [key, setKey] = React.useState(0);
      return (
        <div className="flex flex-col items-center gap-6">
          <div key={key}>
            <Story />
          </div>
          <button 
            onClick={() => setKey(prev => prev + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg"
          >
            Re-animate Card
          </button>
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CreditCard: Story = {
  args: {
    cardType: 'credit',
    size: "md",
    identityData: {
      number: '4532 1234 5678 9012',
      name: 'ALEX J. MURPHY',
      expiry: '08/29',
      issuer: 'ULTIMATE PLATINUM',
    },
    hoverable: true,
  },
};

export const PanCard: Story = {
  args: {
    cardType: 'pan',
    size: 'lg',
    identityData: {
      number: 'ABCDE1234F',
      name: 'ANISH KUMAR SINGH',
      photo: 'https://i.pravatar.cc/150?u=anish',
    },
    hoverable: true,
  },
};

export const AadharCard: Story = {
  args: {
    cardType: 'aadhar',
    size: 'lg',
    identityData: {
      number: '1234 5678 9012',
      name: 'Rohan Sharma',
      dob: '15/05/1992',
      gender: 'Male',
      photo: 'https://i.pravatar.cc/150?u=rohan',
    },
    hoverable: true,
  },
};

export const CorporateID: Story = {
  args: {
    cardType: 'id',
    size: 'sm',
    identityData: {
      number: 'EMP-9942',
      name: 'SARAH CONNOR',
      role: 'Lead System Architect',
      issuer: 'TECHNO CORE',
      photo: 'https://i.pravatar.cc/150?u=sarah',
    },
    hoverable: true,
  },
};
