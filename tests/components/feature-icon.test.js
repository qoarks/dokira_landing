import React from 'react';
import { render, screen } from '@testing-library/react';
import { FeatureIcon } from '@/components/ui/feature-icon';

describe('FeatureIcon Component', () => {
  test('renders icon correctly', () => {
    const TestIcon = () => <span data-testid="test-icon">Icon</span>;
    render(<FeatureIcon icon={<TestIcon />} />);
    
    const iconContainer = screen.getByTestId('test-icon').closest('div');
    expect(iconContainer).toBeInTheDocument();
    expect(iconContainer).toHaveClass('w-12');
    expect(iconContainer).toHaveClass('h-12');
    expect(iconContainer).toHaveClass('rounded-lg');
    expect(iconContainer).toHaveClass('flex');
    expect(iconContainer).toHaveClass('items-center');
    expect(iconContainer).toHaveClass('justify-center');
    expect(iconContainer).toHaveClass('mb-4');
  });

  test('renders with primary variant by default', () => {
    const TestIcon = () => <span data-testid="test-icon">Icon</span>;
    render(<FeatureIcon icon={<TestIcon />} />);
    
    const iconContainer = screen.getByTestId('test-icon').closest('div');
    expect(iconContainer).toHaveClass('bg-primary/10');
    expect(iconContainer).toHaveClass('text-primary');
  });

  test('renders with accent variant when specified', () => {
    const TestIcon = () => <span data-testid="test-icon">Icon</span>;
    render(<FeatureIcon icon={<TestIcon />} variant="accent" />);
    
    const iconContainer = screen.getByTestId('test-icon').closest('div');
    expect(iconContainer).toHaveClass('bg-accent/10');
    expect(iconContainer).toHaveClass('text-accent');
  });

  test('applies additional className', () => {
    const TestIcon = () => <span data-testid="test-icon">Icon</span>;
    render(<FeatureIcon icon={<TestIcon />} className="test-class" />);
    
    const iconContainer = screen.getByTestId('test-icon').closest('div');
    expect(iconContainer).toHaveClass('test-class');
  });
});
