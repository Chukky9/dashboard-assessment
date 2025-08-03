export interface Asset {
  id: string;
  name: string;
  ipAddress: string;
  status: 'critical' | 'high' | 'medium' | 'low';
  lastUpdated: string;
}

export interface FlowNode {
  id: string;
  type: 'email' | 'server';
  name: string;
  ipAddress?: string;
  notificationCount?: number;
  status?: 'critical' | 'high' | 'medium' | 'low';
}

export const mockAssets: Asset[] = [
  {
    id: '1',
    name: 'Loremipsumdolorsit',
    ipAddress: '192.168.1.1',
    status: 'critical',
    lastUpdated: '2024-01-20T10:00:00Z'
  },
  {
    id: '2',
    name: 'Loremipsumdolorsit002',
    ipAddress: '192.168.1.2',
    status: 'critical',
    lastUpdated: '2024-01-20T10:00:00Z'
  },
  // Add more mock assets as needed
];

export const mockFlowNodes: FlowNode[] = [
  {
    id: '1',
    type: 'email',
    name: 'Loremipsumm',
    notificationCount: 24
  },
  {
    id: '2',
    type: 'server',
    name: 'Loremipsu',
    status: 'critical'
  },
  {
    id: '3',
    type: 'server',
    name: 'Loremipsu',
    status: 'critical'
  },
  {
    id: '4',
    type: 'server',
    name: 'Loremipsumdolorsit',
    ipAddress: '192.168.1.1',
    status: 'critical'
  },
  {
    id: '5',
    type: 'server',
    name: 'Loremipsumdolorsit002',
    ipAddress: '192.168.1.2',
    status: 'critical'
  }
]; 