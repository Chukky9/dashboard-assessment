import { render, screen } from '@/utils/test-utils';
import StatusBadge from '@/components/shared/StatusBadge';
import { statusConfig } from '@/constants/status';
import type { StatusType } from '@/types/status';

describe('StatusBadge', () => {
  const statuses: StatusType[] = ['critical', 'high', 'medium', 'low'];

  test.each(statuses)('renders %s status correctly', (status) => {
    render(<StatusBadge status={status} />);
    const badge = screen.getByText(statusConfig[status].label);
    expect(badge).toBeInTheDocument();
  });

  test('renders custom children when provided', () => {
    const customText = 'Custom Status';
    render(<StatusBadge status="critical">{customText}</StatusBadge>);
    expect(screen.getByText(customText)).toBeInTheDocument();
  });

  test('applies additional props correctly', () => {
    render(<StatusBadge status="critical" data-testid="test-badge" />);
    expect(screen.getByTestId('test-badge')).toBeInTheDocument();
  });
}); 