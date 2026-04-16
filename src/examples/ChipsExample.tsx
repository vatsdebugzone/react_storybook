import { Chip } from '../components';
import { Check, Star, Lightning, Tag } from '@phosphor-icons/react';

/**
 * Chip Component — Usage Examples
 *
 * Variants: filled | outlined | flat | ghost
 * Colors:   primary | success | warning | error | info | neutral
 * Sizes:    sm | md | lg
 */
export default function ChipsExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>

      {/* ── Color Variants (filled) ── */}
      <section>
        <h3>Colors</h3>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Chip label="Primary" color="primary" />
          <Chip label="Success" color="success" />
          <Chip label="Warning" color="warning" />
          <Chip label="Error"   color="error" />
          <Chip label="Info"    color="info" />
          <Chip label="Neutral" color="neutral" />
        </div>
      </section>

      {/* ── Variant Styles ── */}
      <section>
        <h3>Variants</h3>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Chip label="Filled"   variant="filled" />
          <Chip label="Outlined" variant="outlined" />
          <Chip label="Flat"     variant="flat" />
          <Chip label="Ghost"    variant="ghost" />
        </div>
      </section>

      {/* ── With Icons ── */}
      <section>
        <h3>With Icons</h3>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Chip label="Verified"  icon={<Check weight="bold" />}     color="success" />
          <Chip label="Featured"  icon={<Star weight="fill" />}      color="warning" />
          <Chip label="Urgent"    icon={<Lightning weight="fill" />}  color="error" />
          <Chip label="Category"  icon={<Tag />}                     color="info" />
        </div>
      </section>

      {/* ── Sizes ── */}
      <section>
        <h3>Sizes</h3>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <Chip label="Small"  size="sm" />
          <Chip label="Medium" size="md" />
          <Chip label="Large"  size="lg" />
        </div>
      </section>

      {/* ── Closable ── */}
      <section>
        <h3>Closable</h3>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Chip label="React"      closable onClose={() => alert('Removed React')} />
          <Chip label="TypeScript" closable onClose={() => alert('Removed TS')} color="info" />
          <Chip label="Tailwind"   closable onClose={() => alert('Removed TW')} color="success" />
        </div>
      </section>

      {/* ── Selectable (Toggle) ── */}
      <section>
        <h3>Selectable</h3>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Chip label="Click to toggle" selectable color="primary" />
          <Chip label="Auto Toggle" selectable color="success" />
        </div>
      </section>

      {/* ── Disabled ── */}
      <section>
        <h3>Disabled</h3>
        <Chip label="Can't interact" disabled closable />
      </section>
    </div>
  );
}
