import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  test('renders button with default props', () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary');
  });

  test('renders button with primary variant', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const button = screen.getByRole('button', { name: /primary button/i });
    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveClass('text-white');
  });

  test('renders button with secondary variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByRole('button', { name: /secondary button/i });
    expect(button).toHaveClass('bg-accent');
    expect(button).toHaveClass('text-white');
  });

  test('renders button with outline variant', () => {
    render(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByRole('button', { name: /outline button/i });
    expect(button).toHaveClass('border');
    expect(button).toHaveClass('border-primary');
    expect(button).toHaveClass('text-primary');
  });

  test('renders button with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small Button</Button>);
    let button = screen.getByRole('button', { name: /small button/i });
    expect(button).toHaveClass('h-9');
    expect(button).toHaveClass('px-3');
    expect(button).toHaveClass('text-sm');

    rerender(<Button size="default">Default Button</Button>);
    button = screen.getByRole('button', { name: /default button/i });
    expect(button).toHaveClass('h-10');
    expect(button).toHaveClass('py-2');
    expect(button).toHaveClass('px-4');

    rerender(<Button size="lg">Large Button</Button>);
    button = screen.getByRole('button', { name: /large button/i });
    expect(button).toHaveClass('h-12');
    expect(button).toHaveClass('px-8');
    expect(button).toHaveClass('text-lg');
  });

  test('applies additional className', () => {
    render(<Button className="test-class">Custom Class Button</Button>);
    const button = screen.getByRole('button', { name: /custom class button/i });
    expect(button).toHaveClass('test-class');
  });
});
