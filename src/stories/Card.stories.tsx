import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import {
  User,
  Gear,
  Bell,
  ShareNetwork,
  Heart,
  Globe,
  NavigationArrow,
  X
} from '@phosphor-icons/react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'glass', 'flat'],
    },
    imagePosition: {
      control: 'select',
      options: ['top', 'bottom', 'background'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    title: 'Modern Architecture',
    subtitle: 'Exploring the geometry of space',
    hoverable: true,
    children: (
      <div className="flex flex-col gap-4">
        <p>
          Architecture is both the process and the product of planning, designing, and constructing buildings or other structures.
        </p>
        <div className="flex gap-2">
          <Button variant="primary" size="small" label="Learn More" />
          <Button variant="outline" size="small" label="Share" />
        </div>
      </div>
    ),
    footer: (
      <div className="flex justify-between items-center w-full text-xs text-gray-400">
        <span>Published 2 days ago</span>
        <div className="flex gap-3">
          <Heart size={16} />
          <ShareNetwork size={16} />
        </div>
      </div>
    ),
  },
};

export const WithContextMenu: Story = {
  args: {
    ...Basic.args,
    menuOptions: [
      { label: 'Edit Post', onClick: () => console.log('Edit'), icon: <Gear size={16} /> },
      { label: 'View Analytics', onClick: () => console.log('Analytics'), icon: <Globe size={16} /> },
      { label: 'Archive', onClick: () => console.log('Archive'), disabled: true },
      { label: 'Delete', onClick: () => console.log('Delete'), icon: <X size={16} /> },
    ],
  },
};

export const WithImage: Story = {
  args: {
    ...Basic.args,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    imagePosition: 'top',
  },
};

export const Tabbed: Story = {
  args: {
    title: 'Project Settings',
    subtitle: 'Manage your workspace preferences',
    tabs: [
      {
        label: 'General',
        icon: <User size={18} />,
        content: (
          <div className="space-y-4 py-2">
            <h4 className="font-bold text-gray-800">Account Information</h4>
            <p>Update your personal details and contact information here.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <span className="block text-[10px] uppercase text-gray-400 font-bold mb-1">Username</span>
                <span className="text-sm font-semibold text-gray-700">johndoe_dev</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <span className="block text-[10px] uppercase text-gray-400 font-bold mb-1">Email</span>
                <span className="text-sm font-semibold text-gray-700">john@example.com</span>
              </div>
            </div>
          </div>
        )
      },
      {
        label: 'Notifications',
        icon: <Bell size={18} />,
        content: (
          <div className="space-y-4 py-2">
            <h4 className="font-bold text-gray-800">Alert Preferences</h4>
            <p>Choose when and how you want to be notified.</p>
            <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg border border-blue-100">
              <span className="text-sm font-medium text-blue-900">Email Notifications</span>
              <div className="w-10 h-5 bg-blue-500 rounded-full relative shadow-inner">
                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
              </div>
            </div>
          </div>
        )
      },
      {
        label: 'Security',
        icon: <Gear size={18} />,
        content: (
          <div className="space-y-4 py-2 text-center py-8">
            <div className="mx-auto w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full text-gray-400 mb-2">
              <Gear size={24} />
            </div>
            <p className="text-sm">Additional security settings are available on the main dashboard.</p>
            <Button variant="outline" size="small" label="Go to Dashboard" />
          </div>
        )
      }
    ],
    footer: (
      <div className="flex justify-end w-full gap-2">
        <Button variant="ghost" size="small" label="Cancel" />
        <Button variant="primary" size="small" label="Save Changes" />
      </div>
    )
  },
};

export const BackgroundImage: Story = {
  args: {
    title: 'Ultimate Adventure',
    subtitle: 'Explore the high peaks of the Alps',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000',
    imagePosition: 'background',
    size: 'lg',
    children: (
      <div className="py-12 flex flex-col items-center text-center gap-6">
        <Globe size={48} weight="duotone" className="text-blue-400 opacity-80" />
        <p className="max-w-md text-lg font-medium">
          Experience breathtaking views and challenging trails in one of the world's most iconic mountain ranges.
        </p>
        <Button variant="primary" label="Book Your Trip" icon={<NavigationArrow size={18} className="ml-2 rotate-90" />} />
      </div>
    ),
  },
};

export const Glass: Story = {
  args: {
    ...Basic.args,
    variant: 'glass',
    className: 'bg-gradient-to-br from-purple-500/20 to-blue-500/10',
    onClose: () => console.log('Closed'),
  },
  decorators: [
    (Story) => (
      <div className="p-20 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1000')] bg-cover rounded-3xl overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export const Loading: Story = {
  args: {
    title: 'Fetching Data',
    subtitle: 'Please wait a moment',
    loading: true,
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-screen items-center py-10">
      <Card title="Small Card" size="sm" subtitle="Compact display" children={<p>Used for sidebars or tight spaces.</p>} />
      <Card title="Medium Card (Default)" size="md" subtitle="Standard display" children={<p>The most versatile size for general content.</p>} />
      <Card title="Large Card" size="lg" subtitle="Spacious display" children={<p>Great for detailed reports or featured content.</p>} />
    </div>
  )
};
