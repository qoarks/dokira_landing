import React from 'react';
import { render, screen } from '@testing-library/react';
import { SectionTitle } from '@/components/ui/section-title';

describe('SectionTitle Component', () => {
  test('renders title correctly', () => {
    render(<SectionTitle title="Test Title" />);
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H2');
    expect(title).toHaveClass('text-3xl');
    expect(title).toHaveClass('md:text-4xl');
    expect(title).toHaveClass('font-bold');
  });

  test('renders subtitle when provided', () => {
    render(<SectionTitle title="Test Title" subtitle="Test Subtitle" />);
    const subtitle = screen.getByText('Test Subtitle');
    expect(subtitle).toBeInTheDocument();
    expect(subtitle.tagName).toBe('P');
    expect(subtitle).toHaveClass('text-lg');
    expect(subtitle).toHaveClass('md:text-xl');
    expect(subtitle).toHaveClass('text-gray-600');
  });

  test('does not render subtitle when not provided', () => {
    render(<SectionTitle title="Test Title" />);
    const subtitle = screen.queryByText(/subtitle/i);
    expect(subtitle).not.toBeInTheDocument();
  });

  test('applies different alignments', () => {
    const { rerender } = render(<SectionTitle title="Left Title" align="left" />);
    let container = screen.getByText('Left Title').closest('div');
    expect(container).toHaveClass('text-left');

    rerender(<SectionTitle title="Center Title" align="center" />);
    container = screen.getByText('Center Title').closest('div');
    expect(container).toHaveClass('text-center');

    rerender(<SectionTitle title="Right Title" align="right" />);
    container = screen.getByText('Right Title').closest('div');
    expect(container).toHaveClass('text-right');
  });

  test('applies default center alignment when not specified', () => {
    render(<SectionTitle title="Default Alignment" />);
    const container = screen.getByText('Default Alignment').closest('div');
    expect(container).toHaveClass('text-center');
  });

  test('applies additional className', () => {
    render(<SectionTitle title="Custom Class Title" className="test-class" />);
    const container = screen.getByText('Custom Class Title').closest('div');
    expect(container).toHaveClass('test-class');
  });
});
