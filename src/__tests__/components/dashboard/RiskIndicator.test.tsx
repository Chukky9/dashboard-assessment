import { render, screen } from '@/utils/test-utils';
import RiskIndicator from '@/components/dashboard/RiskIndicator';
import { useRiskSummary } from '@/hooks/useRiskSummary';

// Mock the custom hook
jest.mock('@/hooks/useRiskSummary');

describe('RiskIndicator', () => {
  const mockSummary = {
    critical: 5,
    high: 10,
    medium: 15,
    low: 20,
  };

  beforeEach(() => {
    (useRiskSummary as jest.Mock).mockReturnValue({
      data: { data: mockSummary },
      isLoading: false,
      isError: false,
    });
  });

  test('renders loading state', () => {
    (useRiskSummary as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    render(<RiskIndicator />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders error state', () => {
    (useRiskSummary as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    render(<RiskIndicator />);
    expect(screen.getByText('Error loading risk summary')).toBeInTheDocument();
  });

  test('renders risk levels with correct counts', () => {
    render(<RiskIndicator />);

    // Check title
    expect(screen.getByTestId('risk-title')).toHaveTextContent('Contextual Risk');

    // Check risk levels
    expect(screen.getByTestId('risk-count-critical')).toHaveTextContent('5');
    expect(screen.getByTestId('risk-count-high')).toHaveTextContent('10');
    expect(screen.getByTestId('risk-count-medium')).toHaveTextContent('15');
    expect(screen.getByTestId('risk-count-low')).toHaveTextContent('20');
  });

  test('renders circular indicator with critical count', () => {
    render(<RiskIndicator />);
    
    const criticalCount = screen.getByTestId('critical-count');
    expect(criticalCount).toHaveTextContent('5');
    expect(criticalCount).toHaveStyle({
      fontSize: '6xl',
      fontWeight: 'semibold',
    });
  });

  test('renders risk indicator with correct structure', () => {
    render(<RiskIndicator />);
    
    // Check main components
    expect(screen.getByTestId('risk-indicator')).toBeInTheDocument();
    expect(screen.getByTestId('risk-levels')).toBeInTheDocument();

    // Check individual risk levels
    expect(screen.getByTestId('risk-level-critical')).toBeInTheDocument();
    expect(screen.getByTestId('risk-level-high')).toBeInTheDocument();
    expect(screen.getByTestId('risk-level-medium')).toBeInTheDocument();
    expect(screen.getByTestId('risk-level-low')).toBeInTheDocument();
  });
}); 