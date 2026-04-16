import { useState } from 'react';
import { Checkbox, CheckboxGroup } from '../components';

/**
 * Checkbox & CheckboxGroup — Usage Examples
 *
 * Checkbox: standalone toggle with label, color, size, disabled, indeterminate
 * CheckboxGroup: grouped checkboxes with orientation control
 */
export default function CheckboxExample() {
  const [agreed, setAgreed] = useState(false);
  const [features, setFeatures] = useState<string[]>(['dark-mode']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>

      {/* ── Basic Checkbox ── */}
      <Checkbox
        label="I agree to the terms and conditions"
        checked={agreed}
        onChange={setAgreed}
      />

      {/* ── Colors ── */}
      <section>
        <h3>Colors</h3>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Checkbox label="Primary" color="primary" checked onChange={() => {}} />
          <Checkbox label="Success" color="success" checked onChange={() => {}} />
          <Checkbox label="Warning" color="warning" checked onChange={() => {}} />
          <Checkbox label="Error"   color="error"   checked onChange={() => {}} />
        </div>
      </section>

      {/* ── Sizes ── */}
      <section>
        <h3>Sizes</h3>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Checkbox label="Small"  size="sm" checked onChange={() => {}} />
          <Checkbox label="Medium" size="md" checked onChange={() => {}} />
          <Checkbox label="Large"  size="lg" checked onChange={() => {}} />
        </div>
      </section>

      {/* ── Indeterminate ── */}
      <Checkbox label="Select All (partial)" indeterminate onChange={() => {}} />

      {/* ── Disabled ── */}
      <Checkbox label="Disabled option" disabled checked onChange={() => {}} />

      {/* ── CheckboxGroup ── */}
      <section>
        <h3>Checkbox Group</h3>
        <CheckboxGroup
          label="Choose Features"
          options={[
            { value: 'dark-mode',     label: 'Dark Mode' },
            { value: 'notifications', label: 'Push Notifications' },
            { value: 'analytics',     label: 'Analytics Dashboard' },
            { value: 'beta',          label: 'Beta Features', disabled: true },
          ]}
          value={features}
          onChange={setFeatures}
          orientation="vertical"
          color="primary"
        />
        <p style={{ marginTop: 8, fontSize: 13, color: '#6b7280' }}>
          Selected: {features.join(', ') || 'None'}
        </p>
      </section>
    </div>
  );
}
