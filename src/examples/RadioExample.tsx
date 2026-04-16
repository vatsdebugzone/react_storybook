import { useState } from 'react';
import { RadioGroup } from '../components';

/**
 * Radio & RadioGroup — Usage Examples
 *
 * Features: color themes, sizes, orientations, disabled options
 */
export default function RadioExample() {
  const [plan, setPlan] = useState('pro');
  const [size, setSize] = useState('md');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>

      {/* ── Basic RadioGroup ── */}
      <RadioGroup
        label="Select Plan"
        name="plan"
        options={[
          { value: 'free', label: 'Free — $0/mo' },
          { value: 'pro',  label: 'Pro — $19/mo' },
          { value: 'team', label: 'Team — $49/mo' },
          { value: 'ent',  label: 'Enterprise', disabled: true },
        ]}
        value={plan}
        onChange={setPlan}
        color="primary"
      />
      <p style={{ fontSize: 13, color: '#6b7280' }}>Selected: {plan}</p>

      {/* ── Horizontal Orientation ── */}
      <RadioGroup
        label="Size"
        name="size"
        options={[
          { value: 'sm', label: 'Small' },
          { value: 'md', label: 'Medium' },
          { value: 'lg', label: 'Large' },
        ]}
        value={size}
        onChange={setSize}
        orientation="horizontal"
        color="success"
      />

      {/* ── Colors ── */}
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <RadioGroup
          label="Primary"
          name="c1"
          options={[{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }]}
          value="a"
          onChange={() => {}}
          color="primary"
        />
        <RadioGroup
          label="Warning"
          name="c2"
          options={[{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }]}
          value="a"
          onChange={() => {}}
          color="warning"
        />
        <RadioGroup
          label="Error"
          name="c3"
          options={[{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }]}
          value="b"
          onChange={() => {}}
          color="error"
        />
      </div>
    </div>
  );
}
