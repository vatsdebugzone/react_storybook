import { Card } from '../components';
import { PencilSimple, Trash, Star } from '@phosphor-icons/react';

/**
 * Card Component — Usage Examples
 *
 * Variants: default | bordered | glass | flat
 * Sizes:    sm | md | lg | xl | full
 * Features: image, tabs, menu options, hoverable, loading, identity cards
 */
export default function CardExample() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', padding: '2rem' }}>

      {/* ── Basic Card ── */}
      <Card title="Getting Started" subtitle="Quick introduction">
        <p>Learn how to set up and configure your project with our component library.</p>
      </Card>

      {/* ── Card with Image ── */}
      <Card
        title="Mountain Retreat"
        subtitle="Weekend Getaway"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
      >
        <p>Escape to the serene mountains for a perfect weekend retreat with breathtaking views.</p>
      </Card>

      {/* ── Card with Menu Options ── */}
      <Card
        title="Premium Headphones"
        subtitle="$129.99"
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop"
        variant="bordered"
        menuOptions={[
          { label: 'Edit',   icon: <PencilSimple size={16} />, onClick: () => alert('Edit') },
          { label: 'Delete', icon: <Trash size={16} />,        onClick: () => alert('Delete') },
        ]}
      >
        <p>High-fidelity wireless headphones with active noise cancellation.</p>
      </Card>

      {/* ── Closable Card ── */}
      <Card
        title="Notification"
        subtitle="System Alert"
        onClose={() => alert('Card closed')}
      >
        <p>This card can be dismissed by the user.</p>
      </Card>

      {/* ── Hoverable Card ── */}
      <Card title="Hoverable" subtitle="Hover over this card" hoverable>
        <p>This card has a lift/tilt effect on hover.</p>
      </Card>

      {/* ── Card with Tabs ── */}
      <Card
        title="User Profile"
        subtitle="Multi-tab view"
        tabs={[
          { label: 'Overview', icon: <Star size={14} />, content: <p>User overview goes here.</p> },
          { label: 'Activity', content: <p>Recent activity log.</p> },
          { label: 'Settings', content: <p>Account settings panel.</p> },
        ]}
      />

      {/* ── Glass Variant (use on dark backgrounds) ── */}
      <div style={{ background: 'linear-gradient(135deg, #1e293b, #334155)', borderRadius: 16, padding: '2rem' }}>
        <Card title="Glassmorphism" subtitle="Premium Design" variant="glass">
          <p>Beautiful frosted-glass effect for modern UI designs.</p>
        </Card>
      </div>

      {/* ── Loading State ── */}
      <Card title="Loading Card" loading />

      {/* ── Credit Card Type ── */}
      <Card
        cardType="credit"
        identityData={{
          name: 'JOHN DOE',
          number: '4111 1111 1111 1234',
          expiry: '12/28',
          issuer: 'PREMIUM BANK',
        }}
      />

      {/* ── ID Card Type ── */}
      <Card
        cardType="id"
        identityData={{
          name: 'Jane Smith',
          role: 'Senior Engineer',
          number: 'EMP-0042',
          issuer: 'ACME CORP',
        }}
      />
    </div>
  );
}
