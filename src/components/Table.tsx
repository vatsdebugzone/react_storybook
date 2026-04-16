import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  CaretUp,
  CaretDown,
  CaretLeft,
  CaretRight,
  ArrowsDownUp,
  MagnifyingGlass,
  DotsThreeVertical
} from '@phosphor-icons/react';
import { Checkbox } from './Checkbox';
import { Button } from './Button';
import { Textbox } from './Textbox';
import './Table.scss';

export interface TableColumn<T> {
  key: string;
  label: string;
  render?: (value: any, row: T) => React.ReactNode;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  /**
   * Render content as a circular/rounded image
   */
  isImage?: boolean;
  /**
   * Image styling: 'circle' or 'rounded'
   */
  imageShape?: 'circle' | 'rounded';
  /**
   * Render content as a clickable link
   */
  link?: (row: T) => string;
  /**
   * Render column as a star rating display
   */
  isRating?: boolean;
  /**
   * Maximum stars to display (default: 5)
   */
  maxRating?: number;
}

export interface TableProps<T> {
  /**
   * Column definitions
   */
  columns: TableColumn<T>[];
  /**
   * Data array
   */
  data: T[];
  /**
   * Unique key for each row (default: 'id')
   */
  rowKey?: keyof T;
  /**
   * Enable row selection
   */
  selectable?: boolean;
  /**
   * Enable pagination
   */
  pagination?: boolean;
  /**
   * Number of items per page
   */
  pageSize?: number;
  /**
   * Available options for results per page
   */
  pageSizeOptions?: number[];
  /**
   * Enable global search
   */
  searchable?: boolean;
  /**
   * Placeholder for search input
   */
  searchPlaceholder?: string;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Optional title for the table
   */
  title?: string;
  /**
   * Row action menu options
   */
  actions?: (row: T) => { label: string; onClick: () => void; icon?: React.ReactNode }[];
  /**
   * Additional wrapper class names
   */
  className?: string;
  /**
   * Visual variant
   */
  variant?: 'default' | 'bordered' | 'glass';
  /**
   * Callback when selection changes
   */
  onSelectionChange?: (selectedRows: T[]) => void;
  /**
   * Make table header sticky
   */
  stickyHeader?: boolean;
  /**
   * Make table rows more compact
   */
  condensed?: boolean;
  /**
   * Custom content to display when no records are found
   */
  emptyState?: React.ReactNode;
}

export function Table<T>({
  columns,
  data,
  rowKey = 'id' as keyof T,
  selectable = false,
  pagination = true,
  pageSize = 5,
  pageSizeOptions,
  searchable = true,
  searchPlaceholder = 'Search records...',
  loading = false,
  title,
  actions,
  className = '',
  variant = 'default',
  onSelectionChange,
  stickyHeader = false,
  condensed = false,
  emptyState,
}: TableProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');
  const [localPageSize, setLocalPageSize] = useState(pageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(new Set());

  // Sync internal page distribution
  useEffect(() => {
    setLocalPageSize(pageSize);
  }, [pageSize]);

  // Reset page on search
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Filter Data
  const filteredData = useMemo(() => {
    let result = [...data];
    if (searchQuery) {
      result = result.filter((row) =>
        Object.values(row as object).some((val) =>
          String(val).toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    return result;
  }, [data, searchQuery]);

  // Sort Data
  const sortedData = useMemo(() => {
    let result = [...filteredData];
    if (sortConfig) {
      result.sort((a, b) => {
        const aValue = (a as any)[sortConfig.key];
        const bValue = (b as any)[sortConfig.key];

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return result;
  }, [filteredData, sortConfig]);

  // Paginate Data
  const totalPages = Math.ceil(sortedData.length / localPageSize);
  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;
    const start = (currentPage - 1) * localPageSize;
    return sortedData.slice(start, start + localPageSize);
  }, [sortedData, pagination, currentPage, localPageSize]);

  // Selection Handlers
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = new Set(paginatedData.map((row) => (row as any)[rowKey as string]));
      setSelectedIds(allIds);
      onSelectionChange?.(paginatedData);
    } else {
      setSelectedIds(new Set());
      onSelectionChange?.([]);
    }
  };

  const handleSelectRow = (id: string | number, checked: boolean) => {
    const newSelected = new Set(selectedIds);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedIds(newSelected);

    const selectedRows = data.filter(row => newSelected.has((row as any)[rowKey as string]));
    onSelectionChange?.(selectedRows);
  };

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const isAllSelected = paginatedData.length > 0 && paginatedData.every(row => selectedIds.has((row as any)[rowKey as string]));
  const isSomeSelected = selectedIds.size > 0 && !isAllSelected;

  const highlightText = useCallback((text: any, term: string) => {
    const strText = String(text);
    if (!term || !strText) return strText;

    const parts = strText.split(new RegExp(`(${term})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === term.toLowerCase() ? (
            <mark key={i} className="storybook-table-highlight">{part}</mark>
          ) : (
            part
          )
        )}
      </>
    );
  }, []);

  const renderCellContent = (col: TableColumn<T>, row: T) => {
    const value = (row as any)[col.key];
    let content = col.render ? col.render(value, row) : highlightText(value, searchQuery);

    if (col.isImage && value) {
      content = (
        <img
          src={value}
          alt={col.label}
          className={`storybook-table-cell-image is-${col.imageShape || 'circle'}`}
        />
      );
    }

    if (col.isRating) {
      const ratingValue = Number(value) || 0;
      const maxStars = col.maxRating ?? 5;
      return (
        <div className="storybook-table-cell-rating">
          {Array.from({ length: maxStars }).map((_, i) => (
            <span
              key={i}
              className={`storybook-table-star ${i < ratingValue ? 'is-filled' : 'is-empty'}`}
              aria-hidden="true"
            >
              ★
            </span>
          ))}
          <span className="storybook-table-rating-value">{ratingValue}/{maxStars}</span>
        </div>
      );
    }

    if (col.link) {
      return (
        <a href={col.link(row)} className="storybook-table-cell-link" onClick={(e) => e.stopPropagation()}>
          {content}
        </a>
      );
    }

    return content;
  };

  const getPageNumbers = () => {
    const pages = [];
    const showMax = 5;
    
    if (totalPages <= showMax + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      if (!pages.includes(totalPages)) pages.push(totalPages);
    }
    return pages;
  };

  const tableClasses = [
    'storybook-generic-table-container',
    `storybook-generic-table-container--${variant}`,
    stickyHeader ? 'is-sticky' : '',
    condensed ? 'is-condensed' : '',
    loading ? 'is-loading' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={tableClasses}>
      {/* Table Header Controls */}
      {(title || searchable || selectedIds.size > 0) && (
        <div className="storybook-table-header">
          <div className="storybook-table-header-left">
            {title && <h3 className="storybook-table-title">{title}</h3>}
            {selectedIds.size > 0 && (
              <div className="storybook-table-selection-info animate-fade-in">
                <span className="count">{selectedIds.size}</span>
                <span className="text">selected</span>
                <Button
                  size="small"
                  variant="ghost"
                  label="Clear"
                  onClick={() => handleSelectAll(false)}
                  className="text-blue-600 hover:text-blue-700 font-bold"
                />
              </div>
            )}
          </div>
          <div className="storybook-table-header-right">
            {searchable && (
              <Textbox
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={setSearchQuery}
                icon={<MagnifyingGlass size={18} weight="bold" />}
                radius="rounded"
                className="storybook-table-search"
              />
            )}
          </div>
        </div>
      )}

      {/* Main Table */}
      <div className="storybook-table-wrapper">
        <table className="storybook-table">
          <thead>
            <tr>
              {selectable && (
                <th className="storybook-table-th-checkbox">
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={isSomeSelected}
                    onChange={handleSelectAll}
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  style={{ width: col.width, textAlign: col.align }}
                  className={col.sortable ? 'is-sortable' : ''}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <div className={`storybook-table-th-content align-${col.align || 'left'}`}>
                    <span>{col.label}</span>
                    {col.sortable && (
                      <span className="storybook-table-sort-icons">
                        {sortConfig?.key === col.key ? (
                          sortConfig.direction === 'asc' ? <CaretUp weight="bold" /> : <CaretDown weight="bold" />
                        ) : (
                          <ArrowsDownUp size={14} weight="bold" className="opacity-30" />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              {actions && <th className="storybook-table-th-actions">Operations</th>}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              // Loading State (Skeletons)
              Array.from({ length: pageSize }).map((_, i) => (
                <tr key={i} className="storybook-table-row-skeleton">
                  {selectable && <td><div className="skeleton-checkbox" /></td>}
                  {columns.map((_, j) => (
                    <td key={j}><div className="skeleton-line" /></td>
                  ))}
                  {actions && <td><div className="skeleton-circle" /></td>}
                </tr>
              ))
            ) : paginatedData.length > 0 ? (
              paginatedData.map((row, index) => (
                <tr
                  key={(row as any)[rowKey as string]}
                  className={`storybook-table-row ${selectedIds.has((row as any)[rowKey as string]) ? 'is-selected' : ''}`}
                  style={{ '--row-index': index } as React.CSSProperties}
                >
                  {selectable && (
                    <td>
                      <Checkbox
                        checked={selectedIds.has((row as any)[rowKey as string])}
                        onChange={(checked) => handleSelectRow((row as any)[rowKey as string], checked)}
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td key={col.key} style={{ textAlign: col.align }}>
                      {renderCellContent(col, row)}
                    </td>
                  ))}
                  {actions && (
                    <td className="storybook-table-td-actions">
                      <Button
                        variant="ghost"
                        size="small"
                        iconOnly
                        icon={<DotsThreeVertical size={20} weight="bold" />}
                        dropdownOptions={actions(row)}
                        dropdownAlign="right"
                        className="storybook-table-action-btn"
                      />
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0) + (actions ? 1 : 0)} className="storybook-table-empty-td">
                  {emptyState || (
                    <div className="storybook-table-empty-state">
                      <div className="empty-icon-wrapper">
                        <MagnifyingGlass size={48} weight="duotone" />
                      </div>
                      <h4>No Records Found</h4>
                      <p>Try adjusting your search or filters to find what you're looking for.</p>
                    </div>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {pagination && totalPages > 0 && (
        <div className="storybook-table-footer">
          <div className="storybook-table-footer-left">
            <div className="storybook-table-pagination-info">
              Showing <b>{(currentPage - 1) * localPageSize + 1}</b> to <b>{Math.min(currentPage * localPageSize, filteredData.length)}</b> of <b>{filteredData.length}</b> entries
            </div>
            {pageSizeOptions && (
              <div className="storybook-table-page-size-selector">
                <span className="text-xs text-gray-400">Show:</span>
                <select 
                  value={localPageSize} 
                  onChange={(e) => {
                    setLocalPageSize(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="storybook-table-page-select"
                >
                  {pageSizeOptions.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="storybook-table-pagination-controls">
            <Button
              variant="ghost"
              size="small"
              label="Prev"
              icon={<CaretLeft size={14} weight="bold" />}
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="storybook-table-pagination-btn"
            />
            <div className="storybook-table-pagination-pages">
              {getPageNumbers().map((page, i) => (
                <React.Fragment key={i}>
                  {page === '...' ? (
                    <span className="pagination-ellipsis">...</span>
                  ) : (
                    <button
                      className={`pagination-page ${currentPage === page ? 'active' : ''}`}
                      onClick={() => setCurrentPage(page as number)}
                    >
                      {page}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <Button
              variant="ghost"
              size="small"
              label="Next"
              icon={<CaretRight size={14} weight="bold" />}
              iconPosition="right"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="storybook-table-pagination-btn"
            />
          </div>
        </div>
      )}
    </div>
  );
}
