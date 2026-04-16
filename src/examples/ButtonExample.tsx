import { useState } from 'react';
import { Button } from '../components';
import { Plus, Trash, PaperPlaneTilt, DownloadSimple } from '@phosphor-icons/react';

/**
 * Button Component — Usage Examples
 *
 * Variants: primary | secondary | outline | ghost
 * Sizes:    small | medium | large (or sm | md | lg)
 * Radius:   flat | rounded | circle
 */
export default function ButtonExample() {
  const [loading, setLoading] = useState(false);

  const handleAsync = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>

      {/* ── Basic Variants ── */}
      <section>
        <h3>Variants</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button label="Primary"   variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Outline"   variant="outline" />
          <Button label="Ghost"     variant="ghost" />
        </div>
      </section>

      {/* ── Sizes ── */}
      <section>
        <h3>Sizes</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button label="Small"  size="small" />
          <Button label="Medium" size="medium" />
          <Button label="Large"  size="large" />
        </div>
      </section>

      {/* ── With Icons ── */}
      <section>
        <h3>With Icons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button label="Create"   icon={<Plus size={18} weight="bold" />} variant="primary" />
          <Button label="Send"     icon={<PaperPlaneTilt size={18} />} iconPosition="right" variant="secondary" />
          <Button label="Download" icon={<DownloadSimple size={18} />} variant="ghost" />
          <Button label="Delete"   icon={<Trash size={18} />} variant="outline" />
        </div>
      </section>

      {/* ── Icon Only ── */}
      <section>
        <h3>Icon Only</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button icon={<Plus size={20} weight="bold" />} iconOnly variant="primary" />
          <Button icon={<Trash size={20} />} iconOnly variant="outline" />
        </div>
      </section>

      {/* ── Loading / Disabled ── */}
      <section>
        <h3>States</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button label={loading ? 'Saving...' : 'Save Changes'} disabled={loading} onClick={handleAsync} variant="primary" />
          <Button label="Disabled" disabled />
        </div>
      </section>

      {/* ── Radius ── */}
      <section>
        <h3>Border Radius</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button label="Flat"    radius="flat" />
          <Button label="Rounded" radius="rounded" />
          <Button label="Circle"  radius="circle" icon={<Plus size={18} />} iconOnly />
        </div>
      </section>

      {/* ── With Dropdown ── */}
      <section>
        <h3>Dropdown Menu</h3>
        <Button
          label="Actions"
          variant="secondary"
          dropdownOptions={[
            { label: 'Edit',   onClick: () => alert('Edit') },
            { label: 'Clone',  onClick: () => alert('Clone') },
            { label: 'Delete', onClick: () => alert('Delete') },
          ]}
        />
      </section>
    </div>
  );
}
