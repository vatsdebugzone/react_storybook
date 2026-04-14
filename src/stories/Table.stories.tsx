import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table, type TableColumn } from '../components/Table';
import { Chip } from '../components/Chips';
import { User, Envelope, Calendar, Tag, ShieldCheck, WarningCircle, Clock } from '@phosphor-icons/react';

const meta: Meta<typeof Table> = {
  title: 'Data/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'pending' | 'blocked';
  joined: string;
}

const columns: TableColumn<UserData>[] = [
  {
    key: 'name',
    label: 'User',
    sortable: true,
    render: (val, row) => (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
          {row.name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-gray-900">{val}</span>
          <span className="text-[10px] text-gray-400">UID: #{row.id}</span>
        </div>
      </div>
    )
  },
  {
    key: 'email',
    label: 'Email Address',
    sortable: true,
    render: (val) => (
      <div className="flex items-center gap-2 text-gray-500">
        <Envelope size={14} />
        {val}
      </div>
    )
  },
  {
    key: 'role',
    label: 'Role',
    sortable: true,
    render: (val) => (
      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium uppercase tracking-wider">
        {val}
      </span>
    )
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (val) => {
      switch (val) {
        case 'active': return <Chip label="Active" color="success" size="sm" variant="filled" icon={<ShieldCheck />} />;
        case 'pending': return <Chip label="Pending" color="warning" size="sm" variant="filled" icon={<Clock />} />;
        case 'blocked': return <Chip label="Blocked" color="error" size="sm" variant="filled" icon={<WarningCircle />} />;
        default: return <Chip label={val} size="sm" />;
      }
    }
  },
  {
    key: 'joined',
    label: 'Joined Date',
    sortable: true,
    render: (val) => (
      <div className="flex items-center gap-2 text-gray-400">
        <Calendar size={14} />
        {val}
      </div>
    )
  }
];

const sampleData: UserData[] = [
  { id: 101, name: 'Alex Murphy', email: 'alex.m@omnicorp.com', role: 'Security', status: 'active', joined: '2023-01-12' },
  { id: 102, name: 'Ellen Ripley', email: 'ripley@weyland.com', role: 'Officer', status: 'active', joined: '2023-02-05' },
  { id: 103, name: 'Rick Deckard', email: 'deckard@lapd.gov', role: 'Blade Runner', status: 'blocked', joined: '2022-11-20' },
  { id: 104, name: 'Sarah Connor', email: 'sarah.c@resistance.org', role: 'Commander', status: 'pending', joined: '2023-05-15' },
  { id: 105, name: 'James Holden', email: 'holden@rocinante.space', role: 'Captain', status: 'active', joined: '2023-03-30' },
  { id: 106, name: 'Amos Burton', email: 'amos@rocinante.space', role: 'Mechanic', status: 'active', joined: '2023-03-30' },
  { id: 107, name: 'Chrisjen Avasarala', email: 'avasarala@un.gov', role: 'Executive', status: 'blocked', joined: '2022-08-10' },
  { id: 108, name: 'Bobbie Draper', email: 'bobbie@mcrn.mars', role: 'Sergeant', status: 'pending', joined: '2023-06-22' },
];

export const Basic: Story = {
  args: {
    title: 'User Management',
    columns: columns as any,
    data: sampleData as any,
    selectable: true,
    pagination: true,
    pageSize: 5,
    searchable: true,
  },
};

export const Bordered: Story = {
  args: {
    ...Basic.args,
    variant: 'bordered',
  },
};

export const Glass: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    ...Basic.args,
    variant: 'glass',
  },
};

export const Loading: Story = {
  args: {
    ...Basic.args,
    loading: true,
  },
};

export const WithRating: Story = {
  args: {
    title: 'Product Ratings',
    columns: [
      {
        key: 'name',
        label: 'Product',
        sortable: true,
        render: (val: any) => (
          <span className="font-semibold text-gray-800">{val}</span>
        ),
      },
      { key: 'category', label: 'Category', sortable: true },
      { key: 'rating', label: 'Rating', sortable: true, isRating: true, maxRating: 5 },
      { key: 'reviews', label: 'Reviews', sortable: true, align: 'right' },
      {
        key: 'price',
        label: 'Price',
        sortable: true,
        align: 'right',
        render: (val: any) => (
          <span className="font-bold text-green-600">${val}</span>
        ),
      },
    ] as any,
    data: [
      { id: 1, name: 'Arc Flow Headset', category: 'Audio', rating: 5, reviews: 1240, price: 129 },
      { id: 2, name: 'Luminary Desk Lamp', category: 'Lighting', rating: 4, reviews: 876, price: 59 },
      { id: 3, name: 'NovaPen Stylus', category: 'Accessories', rating: 3, reviews: 421, price: 39 },
      { id: 4, name: 'Quantum Keyboard', category: 'Peripherals', rating: 5, reviews: 3105, price: 189 },
      { id: 5, name: 'Vibe Backpack', category: 'Bags', rating: 4, reviews: 654, price: 79 },
      { id: 6, name: 'Pixel Webcam 4K', category: 'Cameras', rating: 2, reviews: 198, price: 99 },
      { id: 7, name: 'NovaCool Pad', category: 'Accessories', rating: 3, reviews: 310, price: 29 },
    ] as any,
    selectable: true,
    pagination: true,
    pageSize: 5,
    searchable: true,
    rowKey: 'id' as any,
  },
};

export const WithActions: Story = {
  args: {
    ...Basic.args,
    actions: (row: any) => [
      { label: 'Edit', onClick: () => alert(`Edit ${row.name}`), icon: <User size={14} /> },
      { label: 'Delete', onClick: () => alert(`Delete ${row.name}`), icon: <Tag size={14} /> },
    ],
  },
};

export const Advanced: Story = {
  args: {
    title: 'Advanced User Directory',
    columns: [
      {
        key: 'avatar',
        label: '',
        width: '50px',
        isImage: true,
        imageShape: 'circle'
      },
      {
        key: 'name',
        label: 'Full Name',
        sortable: true,
        link: (row: any) => `https://example.com/users/${row.id}`,
      },
      {
        key: 'email',
        label: 'Email',
        sortable: true,
        link: (row: any) => `mailto:${row.email}`,
      },
      {
        key: 'website',
        label: 'Portfolio',
        link: (row: any) => `https://${row.website}`,
      },
      {
        key: 'status',
        label: 'Status',
        sortable: true,
        render: (val: any) => {
          switch (val) {
            case 'active': return <Chip label="Active" color="success" size="sm" variant="filled" />;
            case 'pending': return <Chip label="Pending" color="warning" size="sm" variant="filled" />;
            default: return <Chip label="Blocked" color="error" size="sm" variant="filled" />;
          }
        }
      }
    ] as any,
    data: sampleData.map(d => ({
      ...d,
      avatar: `https://i.pravatar.cc/150?u=${d.id}`,
      website: `portfolio-${d.id}.me`
    })) as any,
    selectable: true,
    pagination: true,
    pageSizeOptions: [5, 10, 20, 50],
    pageSize: 5,
    searchable: true,
  },
};

export const StickyHeader: Story = {
  args: {
    ...Advanced.args,
    title: 'Sticky Header Example',
    stickyHeader: true,
    data: Array.from({ length: 50 }).map((_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      status: i % 3 === 0 ? 'active' : 'pending',
      avatar: `https://i.pravatar.cc/150?u=${i}`,
      website: `web-${i}.com`
    })) as any,
  },
};

export const Condensed: Story = {
  args: {
    ...Advanced.args,
    title: 'Condensed High-Density View',
    condensed: true,
  },
};

export const Empty: Story = {
  args: {
    ...Advanced.args,
    title: 'Empty State Demo',
    data: [],
  },
};
