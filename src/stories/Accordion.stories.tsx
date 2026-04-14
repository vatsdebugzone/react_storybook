import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionItem } from '../components/Accordion';
import { User, Bell, Shield, Palette, Info } from '@phosphor-icons/react';
import '../components/Accordion.scss';

const meta: Meta<typeof Accordion> = {
  title: 'WD/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated', 'flat'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Usage
export const Default: Story = {
  args: {
    allowMultiple: false,
    variant: 'default',
    radius: 'md',
  },
  render: (args) => (
    <div className="max-w-xl w-full">
      <Accordion {...args}>
        <AccordionItem id="item-1" title="What is WD Storybook?">
          WD Storybook is a premium component library designed for high-performance React applications.
          It provides accessible, beautifully animated, and highly customizable UI elements out of the box.
        </AccordionItem>
        <AccordionItem id="item-2" title="How do I install the library?">
          Simply run `npm install @wd/components` in your local project directory. Make sure you have Tailwind CSS
          configured to import the core component styles.
        </AccordionItem>
        <AccordionItem id="item-3" title="Are these components accessible?">
          Yes! All components are built with Web Content Accessibility Guidelines (WCAG) in mind,
          including ARIA tags, keyboard navigation support, and high-contrast color schemes.
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const AllowMultiple: Story = {
  args: {
    allowMultiple: true,
    variant: 'bordered',
    radius: 'none',
  },
  render: (args) => (
    <div className="max-w-xl w-full">
      <Accordion {...args}>
        <AccordionItem id="mult-1" title="Account Settings" startContent={<User size={20} />}>
          Update your personal information, profile picture, and bio here. Changes will be reflected
          across all associated applications.
        </AccordionItem>
        <AccordionItem id="mult-2" title="Notifications" startContent={<Bell size={20} />}>
          Customize how and when you receive alerts. You can mute specific categories or schedule
          daily digest emails to keep your inbox clean.
        </AccordionItem>
        <AccordionItem id="mult-3" title="Security & Privacy" startContent={<Shield size={20} />}>
          Manage your two-factor authentication, trusted devices, and external integrations.
          We strongly recommend keeping 2FA enabled at all times.
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const ElevatedWithSubtitles: Story = {
  args: {
    variant: 'elevated',
    radius: 'lg',
  },
  render: (args) => (
    <div className="max-w-xl w-full">
      <Accordion {...args}>
        <AccordionItem 
          id="theme" 
          title="Theme Configuration" 
          subtitle="Colors, Typography, and Shapes"
          startContent={<Palette size={20} className="text-purple-500" />}
        >
          Define your brand guidelines including your primary and secondary color palettes.
          You can also upload custom font families here.
        </AccordionItem>
        <AccordionItem 
          id="system" 
          title="System Preferences"
          subtitle="Language, Timezone, and Region"
          startContent={<Info size={20} className="text-blue-500" />}
        >
          Ensure your system timestamps and localization settings are correctly matched
          with your physical location.
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const NestedSubAccordions: Story = {
  args: {
    variant: 'flat',
  },
  render: (args) => (
    <div className="max-w-2xl w-full">
      <Accordion {...args}>
        <AccordionItem id="root-1" title="Developer Documentation">
          Welcome to the API Documentation! Below you will find specific endpoint categories.

          {/* Sub Accordion */}
          <div className="mt-4">
            <h4 className="font-semibold text-gray-700 mb-2">API Endpoints</h4>
            <Accordion variant="bordered" radius="sm">
              <AccordionItem id="sub-1" title="GET /users">
                Fetches a paginated list of all authenticated users.
                Required scopes: `user_read`, `admin`
              </AccordionItem>
              <AccordionItem id="sub-2" title="POST /users/create">
                Creates a new user account and triggers a verification email sequence.
              </AccordionItem>
              <AccordionItem id="sub-3" title="DELETE /users/:id">
                Permanently deletes a user and purges all their associated telemetry data.
                This action cannot be undone.
              </AccordionItem>
            </Accordion>
          </div>
        </AccordionItem>
        
        <AccordionItem id="root-2" title="Billing & Invoicing">
          Find all your historical receipts and active subscription tiers here.
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const DisabledItems: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <div className="max-w-xl w-full">
      <Accordion {...args}>
        <AccordionItem id="d-1" title="Available Feature">
          This feature is accessible on your current plan.
        </AccordionItem>
        <AccordionItem id="d-2" title="Premium Feature (Locked)" disabled>
          Upgrade your plan to access advanced analytics and custom export tools.
        </AccordionItem>
        <AccordionItem id="d-3" title="Legacy Tooling" disabled>
          This capability has been deprecated and is no longer accessible.
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const ExpandCollapseControls: Story = {
  args: {
    allowMultiple: true,
    variant: 'bordered',
  },
  render: (args) => {
    // We use a React ref to access the imperative handles exposed by Accordion
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const accordionRef = React.useRef<any>(null);

    return (
      <div className="max-w-xl w-full flex flex-col gap-4">
        <div className="flex gap-2 mb-2">
          <button 
            type="button" 
            onClick={() => accordionRef.current?.expandAll()}
            className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md font-medium text-sm hover:bg-blue-100 transition-colors"
          >
            Expand All
          </button>
          <button 
            type="button" 
            onClick={() => accordionRef.current?.collapseAll()}
            className="px-4 py-2 bg-gray-50 text-gray-600 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors"
          >
            Collapse All
          </button>
        </div>

        <Accordion ref={accordionRef} {...args}>
          <AccordionItem id="ctrl-1" title="Initial Setup">
            Configure your development environment and install necessary dependencies before beginning.
          </AccordionItem>
          <AccordionItem id="ctrl-2" title="Integration Phase">
            Connect the APIs and begin synchronizing your telemetry payloads into the main pipeline.
          </AccordionItem>
          <AccordionItem id="ctrl-3" title="Testing & QA">
            Run complete end-to-end testing strings to verify module behavior in production-like situations.
          </AccordionItem>
          <AccordionItem id="ctrl-4" title="Not Applicable (Disabled)" disabled>
            This section cannot be expanded via 'Expand All' because it is explicitly disabled.
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const SizesAndColors: Story = {
  args: {
    variant: 'elevated',
    radius: 'lg',
    size: "md",
    color: 'primary',
  },
  render: (args) => (
    <div className="max-w-xl w-full flex flex-col gap-8">
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Large Size / Primary Color</h4>
        <Accordion {...args}>
          <AccordionItem id="sc-1" title="Primary Settings">
            This accordion uses the 'lg' size variant and the 'primary' color theme.
          </AccordionItem>
          <AccordionItem id="sc-2" title="Advanced Options">
            Notice the larger padding and font sizes compared to the default 'md' size.
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Small Size / Success Color / Flat Variant</h4>
        <Accordion variant="flat" size="sm" color="success">
          <AccordionItem id="sc-3" title="System Stable">
            This is a 'sm' sized accordion utilizing the 'success' color tint.
          </AccordionItem>
          <AccordionItem id="sc-4" title="Diagnostics">
            All telemetry is reporting green.
          </AccordionItem>
        </Accordion>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Danger Color / Bordered Variant</h4>
        <Accordion variant="bordered" color="danger">
          <AccordionItem id="sc-5" title="Danger Zone">
            These actions are destructive. Proceed with caution.
          </AccordionItem>
          <AccordionItem id="sc-6" title="Delete Account">
            This will permanently remove all your data from our servers.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};
