import { render, screen, fireEvent } from '@/utils/test-utils';
import Table from '@/components/shared/Table/Table';
import type { Column } from '@/types/table';

interface TestData {
  id: number;
  name: string;
  value: number;
}

describe('Table', () => {
  const mockData: TestData[] = [
    { id: 1, name: 'Item 1', value: 100 },
    { id: 2, name: 'Item 2', value: 200 },
    { id: 3, name: 'Item 3', value: 300 },
  ];

  const columns: Column<TestData>[] = [
    { header: 'Name', accessorKey: 'name' },
    { header: 'Value', accessorKey: 'value' },
  ];

  test('renders table with data', () => {
    render(<Table columns={columns} data={mockData} />);
    
    // Check headers
    columns.forEach(column => {
      expect(screen.getByText(column.header)).toBeInTheDocument();
    });

    // Check data
    mockData.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.value.toString())).toBeInTheDocument();
    });
  });

  test('handles sorting when enabled', () => {
    const onSort = jest.fn();
    render(
      <Table
        columns={columns}
        data={mockData}
        onSort={onSort}
        sortField="name"
        sortDirection="asc"
      />
    );

    // Click header to sort
    const nameHeader = screen.getByText('Name').closest('th');
    expect(nameHeader).toHaveStyle({ cursor: 'pointer' });
    fireEvent.click(nameHeader!);
    expect(onSort).toHaveBeenCalledWith('name');
  });

  test('toggles sort direction when clicking same column', () => {
    const onSort = jest.fn();
    render(
      <Table
        columns={columns}
        data={mockData}
        onSort={onSort}
        sortField="name"
        sortDirection="asc"
      />
    );

    const nameHeader = screen.getByText('Name').closest('th');
    fireEvent.click(nameHeader!);
    expect(onSort).toHaveBeenCalledWith('name');
  });

  test('renders custom cell content', () => {
    const customColumns: Column<TestData>[] = [
      {
        header: 'Custom',
        accessorKey: 'name',
        cell: (value) => <span data-testid="custom-cell">{`Custom ${value}`}</span>,
      },
    ];

    render(<Table columns={customColumns} data={mockData} />);
    expect(screen.getByText('Custom Item 1')).toBeInTheDocument();
  });

  test('renders empty table', () => {
    render(<Table columns={columns} data={[]} />);
    columns.forEach(column => {
      expect(screen.getByText(column.header)).toBeInTheDocument();
    });
  });

  test('shows sort icons when sorting is enabled', () => {
    render(
      <Table
        columns={columns}
        data={mockData}
        onSort={jest.fn()}
        sortField="name"
        sortDirection="asc"
      />
    );

    const nameHeader = screen.getByText('Name').closest('th');
    const icon = nameHeader?.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });
}); 