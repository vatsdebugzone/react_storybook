import { useState } from 'react';
import { Textbox } from '../components';
import { Envelope, MagnifyingGlass, LockKey, Phone, CreditCard } from '@phosphor-icons/react';

/**
 * Textbox Component — Usage Examples
 *
 * Features: floating label, icons, validation types, password toggle,
 *           multiline (textarea), character counter, error states
 */
export default function TextboxExample() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState('');
  const [phone, setPhone] = useState('');
  const [card, setCard] = useState('');
  const [bio, setBio] = useState('');
  const [name, setName] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', maxWidth: 500 }}>

      {/* ── Basic with Label ── */}
      <Textbox
        label="Full Name"
        placeholder="Enter your name"
        value={name}
        onChange={setName}
      />

      {/* ── Floating Label ── */}
      <Textbox
        label="Email Address"
        floatingLabel
        value={email}
        onChange={setEmail}
        icon={<Envelope size={20} weight="duotone" />}
      />

      {/* ── Password with Toggle ── */}
      <Textbox
        label="Password"
        type="password"
        floatingLabel
        value={password}
        onChange={setPassword}
        icon={<LockKey size={20} weight="duotone" />}
      />

      {/* ── Search with Right Icon ── */}
      <Textbox
        placeholder="Search..."
        value={search}
        onChange={setSearch}
        icon={<MagnifyingGlass size={18} weight="bold" />}
        radius="rounded"
      />

      {/* ── Phone Validation ── */}
      <Textbox
        label="Phone Number"
        floatingLabel
        validationType="phone"
        value={phone}
        onChange={setPhone}
        icon={<Phone size={20} />}
      />

      {/* ── Credit Card Validation ── */}
      <Textbox
        label="Card Number"
        floatingLabel
        validationType="card"
        value={card}
        onChange={setCard}
        icon={<CreditCard size={20} />}
      />

      {/* ── Error State ── */}
      <Textbox
        label="Username"
        floatingLabel
        value=""
        onChange={() => {}}
        error="Username is already taken"
      />

      {/* ── Disabled ── */}
      <Textbox
        label="Account ID"
        value="ACC-00421"
        onChange={() => {}}
        disabled
      />

      {/* ── Multiline (Textarea) with Character Counter ── */}
      <Textbox
        label="Bio"
        floatingLabel
        multiline
        rows={4}
        maxLength={200}
        value={bio}
        onChange={setBio}
      />

      {/* ── Radius Variants ── */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Textbox placeholder="Flat"    radius="flat"    value="" onChange={() => {}} />
        <Textbox placeholder="Rounded" radius="rounded" value="" onChange={() => {}} />
      </div>
    </div>
  );
}
