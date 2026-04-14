import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '../components/Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    weight: {
      control: 'select',
      options: ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'black'],
    },
    fontFamily: {
      control: 'select',
      options: ['sans', 'serif', 'mono'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'success', 'warning', 'error', 'white'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    lineHeight: {
      control: 'select',
      options: ['tight', 'normal', 'relaxed', 'loose'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

const LOREM = "Architecture is both the process and the product of planning, designing, and constructing buildings or other structures. Architectural works, in the material form of buildings, are often perceived as cultural symbols and as works of art.";

export const Showcase: Story = {
  args: {
    children: LOREM,
    size: 'lg',
    weight: 'normal',
    fontFamily: 'sans',
    color: 'default',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <Paragraph size="3xl" weight="bold">Large Display (3xl)</Paragraph>
      <Paragraph size="2xl">Headline Text (2xl)</Paragraph>
      <Paragraph size="xl">Subhead Text (xl)</Paragraph>
      <Paragraph size="lg">Lead Paragraph (lg)</Paragraph>
      <Paragraph size="md">Body Paragraph (md)</Paragraph>
      <Paragraph size="sm">Small Caption (sm)</Paragraph>
      <Paragraph size="xs" weight="bold" className="uppercase tracking-widest">Extra Small Overline (xs)</Paragraph>
    </div>
  )
};

export const FontFamilies: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Paragraph size="sm" weight="bold" color="muted" className="mb-2">SANS SERIF (DEFAULT)</Paragraph>
        <Paragraph fontFamily="sans" size="lg">{LOREM}</Paragraph>
      </div>
      <div>
        <Paragraph size="sm" weight="bold" color="muted" className="mb-2">SERIF (ELEGANT)</Paragraph>
        <Paragraph fontFamily="serif" size="lg">{LOREM}</Paragraph>
      </div>
      <div>
        <Paragraph size="sm" weight="bold" color="muted" className="mb-2">MONOSPACE (TECHNICAL)</Paragraph>
        <Paragraph fontFamily="mono" size="lg">{LOREM}</Paragraph>
      </div>
    </div>
  )
};

export const Alignment: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl mx-auto border p-6 bg-gray-50 rounded-xl">
      <div>
        <Paragraph size="xs" weight="bold" color="primary" className="mb-2 uppercase">Left Align</Paragraph>
        <Paragraph align="left">{LOREM}</Paragraph>
      </div>
      <div>
        <Paragraph size="xs" weight="bold" color="primary" className="mb-2 uppercase text-center">Center Align</Paragraph>
        <Paragraph align="center">{LOREM}</Paragraph>
      </div>
      <div>
        <Paragraph size="xs" weight="bold" color="primary" className="mb-2 uppercase text-right">Right Align</Paragraph>
        <Paragraph align="right">{LOREM}</Paragraph>
      </div>
      <div>
        <Paragraph size="xs" weight="bold" color="primary" className="mb-2 uppercase">Justified</Paragraph>
        <Paragraph align="justify">{LOREM}</Paragraph>
      </div>
    </div>
  )
};

export const PremiumGradient: Story = {
  args: {
    children: "Unleash Your Creative Potential with Modern Design Systems",
    size: '3xl',
    weight: 'black',
    gradient: true,
    align: 'center',
  },
};

export const SemanticColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Paragraph color="primary" weight="bold">Primary color for focal points.</Paragraph>
      <Paragraph color="success" weight="bold">Success color for positive feedback.</Paragraph>
      <Paragraph color="warning" weight="bold">Warning color for cautionary notes.</Paragraph>
      <Paragraph color="error" weight="bold">Error color for critical alerts.</Paragraph>
      <Paragraph color="muted">Muted color for secondary descriptions or metadata.</Paragraph>
    </div>
  )
};

export const LineHeights: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-10 max-w-4xl">
      <div>
        <Paragraph size="xs" weight="bold" className="mb-2 text-blue-500 uppercase">Tight</Paragraph>
        <Paragraph lineHeight="tight">{LOREM}</Paragraph>
      </div>
      <div>
        <Paragraph size="xs" weight="bold" className="mb-2 text-blue-500 uppercase">Normal</Paragraph>
        <Paragraph lineHeight="normal">{LOREM}</Paragraph>
      </div>
      <div>
        <Paragraph size="xs" weight="bold" className="mb-2 text-blue-500 uppercase">Relaxed</Paragraph>
        <Paragraph lineHeight="relaxed">{LOREM}</Paragraph>
      </div>
      <div>
        <Paragraph size="xs" weight="bold" className="mb-2 text-blue-500 uppercase">Loose</Paragraph>
        <Paragraph lineHeight="loose">{LOREM}</Paragraph>
      </div>
    </div>
  )
};
