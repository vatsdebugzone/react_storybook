import React from 'react';
import { Table, Chip } from '../components';
import type { TableColumn } from '../components';
import { ShieldCheck, Clock, WarningCircle, Envelope, Calendar } from '@phosphor-icons/react';

/**
 * Table Component — Usage Examples
 *
 * Features: sorting, pagination (smart ellipsis), search, selection,
 *           row actions, images, sticky header, condensed mode
 */

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'pending' | 'blocked';
  joined: string;
}

const columns: TableColumn<User>[] = [
  {
    key: 'name',
    label: 'User',
    sortable: true,
    render: (val: string, row: User) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: '#dbeafe', color: '#2563eb',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700, fontSize: 12,
        }}>
          {row.name.charAt(0)}
        </div>
        <span style={{ fontWeight: 600 }}>{val}</span>
      </div>
    ),
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
    render: (val: string) => (
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6b7280' }}>
        <Envelope size={14} /> {val}
      </span>
    ),
  },
  { key: 'role', label: 'Role', sortable: true },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (val: string) => {
      const map: Record<string, { color: 'success' | 'warning' | 'error'; icon: React.ReactNode }> = {
        active:  { color: 'success', icon: <ShieldCheck size={14} /> },
        pending: { color: 'warning', icon: <Clock size={14} /> },
        blocked: { color: 'error',   icon: <WarningCircle size={14} /> },
      };
      const cfg = map[val] || map.active;
      return <Chip label={val.toUpperCase()} color={cfg.color} size="sm" variant="filled" icon={cfg.icon} />;
    },
  },
  {
    key: 'joined',
    label: 'Joined',
    sortable: true,
    render: (val: string) => (
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#9ca3af' }}>
        <Calendar size={14} /> {val}
      </span>
    ),
  },
];

const data: User[] = [
  { id: 1, name: 'Alex Murphy',   email: 'alex@omnicorp.com',      role: 'Security',  status: 'active',  joined: '2023-01-12' },
  { id: 2, name: 'Ellen Ripley',  email: 'ripley@weyland.com',     role: 'Officer',   status: 'active',  joined: '2023-02-05' },
  { id: 3, name: 'Rick Deckard',  email: 'deckard@lapd.gov',       role: 'Detective', status: 'blocked', joined: '2022-11-20' },
  { id: 4, name: 'Sarah Connor',  email: 'sarah@resistance.org',   role: 'Commander', status: 'pending', joined: '2023-05-15' },
  { id: 5, name: 'James Holden',  email: 'holden@rocinante.space', role: 'Captain',   status: 'active',  joined: '2023-03-30' },
  { id: 6, name: 'Amos Burton',   email: 'amos@rocinante.space',   role: 'Mechanic',  status: 'active',  joined: '2023-04-01' },
  { id: 7, name: 'Bobbie Draper', email: 'bobbie@mcrn.mars',       role: 'Sergeant',  status: 'pending', joined: '2023-06-22' },
  { id: 8, name: 'Naomi Nagata',  email: 'naomi@rocinante.space',  role: 'Engineer',  status: 'active',  joined: '2023-07-10' },
];

export default function TableExample() {
  return (
    <div style={{ padding: '2rem' }}>
      <Table
        title="User Management"
        columns={columns}
        data={data}
        selectable
        pagination
        pageSize={5}
        pageSizeOptions={[5, 10, 20]}
        searchable
        searchPlaceholder="Search users..."
        actions={(row) => [
          { label: 'Edit',   onClick: () => alert(`Edit ${row.name}`) },
          { label: 'Delete', onClick: () => alert(`Delete ${row.name}`) },
        ]}
        onSelectionChange={(rows) => console.log('Selected:', rows)}
      />
    </div>
  );
}
