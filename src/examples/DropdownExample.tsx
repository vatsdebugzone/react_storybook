import { useState } from 'react';
import { Dropdown } from '../components';

/**
 * Dropdown Component — Usage Examples
 *
 * Features: single/multi select, search, images, error state,
 *           disabled state, radius variants, maxSelection
 */

const countries = [
  { value: 'us', label: 'United States', image: 'https://flagcdn.com/24x18/us.png' },
  { value: 'gb', label: 'United Kingdom', image: 'https://flagcdn.com/24x18/gb.png' },
  { value: 'in', label: 'India',          image: 'https://flagcdn.com/24x18/in.png' },
  { value: 'de', label: 'Germany',        image: 'https://flagcdn.com/24x18/de.png' },
  { value: 'jp', label: 'Japan',          image: 'https://flagcdn.com/24x18/jp.png' },
];

const roles = [
  { value: 'admin',  label: 'Administrator' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
  { value: 'mod',    label: 'Moderator', disabled: true },
];

export default function DropdownExample() {
  const [country, setCountry] = useState<(string | number)[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<(string | number)[]>([]);
  const [single, setSingle] = useState<string | number>('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', maxWidth: 400 }}>

      {/* ── Single Select ── */}
      <Dropdown
        label="Country"
        options={countries}
        value={single}
        onChange={setSingle}
        placeholder="Select a country"
        searchable
      />

      {/* ── Multi Select with Images ── */}
      <Dropdown
        label="Preferred Countries"
        options={countries}
        value={country}
        onChange={setCountry}
        placeholder="Choose countries"
        multiple
        searchable
      />

      {/* ── Multi Select with maxSelection ── */}
      <Dropdown
        label="User Roles (max 2)"
        options={roles}
        value={selectedRoles}
        onChange={setSelectedRoles}
        placeholder="Assign roles"
        multiple
        maxSelection={2}
      />

      {/* ── Error State ── */}
      <Dropdown
        label="Department"
        options={roles}
        value=""
        onChange={() => {}}
        placeholder="Select department"
        error="This field is required"
      />

      {/* ── Disabled ── */}
      <Dropdown
        label="Locked Field"
        options={roles}
        value="admin"
        onChange={() => {}}
        disabled
      />

      {/* ── Radius Variants ── */}
      <Dropdown
        label="Rounded"
        options={roles}
        value=""
        onChange={() => {}}
        placeholder="Circle radius"
        radius="circle"
      />
    </div>
  );
}
