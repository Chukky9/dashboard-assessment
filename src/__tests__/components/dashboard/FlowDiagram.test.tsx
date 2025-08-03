import { render, screen } from '@/utils/test-utils';
import FlowDiagram from '@/components/dashboard/FlowDiagram';
import { useFlowNodes } from '@/hooks/useFlowNodes';
import type { FlowNode } from '@/mocks/data';

// Mock the custom hook
jest.mock('@/hooks/useFlowNodes');

describe('FlowDiagram', () => {
  const mockNodes: FlowNode[] = [
    {
      id: '1',
      type: 'email',
      name: 'Email Gateway',
      notificationCount: 24,
    },
    {
      id: '2',
      type: 'server',
      name: 'Server 1',
      status: 'high',
    },
    {
      id: '3',
      type: 'server',
      name: 'Server 2',
      status: 'medium',
    },
    {
      id: '4',
      type: 'server',
      name: 'Server 3',
      status: 'critical',
      ipAddress: '192.168.1.1',
    },
  ];

  beforeEach(() => {
    (useFlowNodes as jest.Mock).mockReturnValue({
      data: { data: mockNodes },
      isLoading: false,
      isError: false,
    });
  });

  test('renders loading state', () => {
    (useFlowNodes as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    render(<FlowDiagram />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test('renders error state', () => {
    (useFlowNodes as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    render(<FlowDiagram />);
    expect(screen.getByText('Error loading flow data')).toBeInTheDocument();
  });

//   test('renders nodes with correct types and labels', () => {
//     render(<FlowDiagram />);

//     // Email node should be present with its name and badge
//     const emailNode = mockNodes.find(node => node.type === 'email');
//     expect(screen.getByTestId(`node-${emailNode!.name.toLowerCase().replace(/\s+/g, '-')}`)).toBeInTheDocument();
//     expect(screen.getByTestId(`label-${emailNode!.name.toLowerCase().replace(/\s+/g, '-')}`)).toHaveTextContent(emailNode!.name);
//     expect(screen.getByTestId(`badge-${emailNode!.name.toLowerCase().replace(/\s+/g, '-')}`)).toBeInTheDocument();

//     // Server nodes should be present with their names and IP addresses (if available)
//     const serverNodes = mockNodes.filter(node => node.type === 'server');
//     serverNodes.forEach(node => {
//       const nodeId = node.name.toLowerCase().replace(/\s+/g, '-');
//       expect(screen.getByTestId(`node-${nodeId}`)).toBeInTheDocument();
//       expect(screen.getByTestId(`label-${nodeId}`)).toHaveTextContent(node.name);
      
//       // Only check for IP address if it exists
//       if (node.ipAddress) {
//         expect(screen.getByTestId(`sublabel-${nodeId}`)).toHaveTextContent(node.ipAddress);
//       }
      
//       // Check for server badge
//       expect(screen.getByTestId(`server-badge-${nodeId}`)).toBeInTheDocument();
//     });
//   });

  test('renders legend items', () => {
    render(<FlowDiagram />);
    expect(screen.getAllByText('Lorem')).toHaveLength(3);
  });
}); 