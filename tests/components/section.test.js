import React from 'react';
import { render, screen } from '@testing-library/react';
import { Section } from '@/components/ui/section';

describe('Section Component', () => {
  test('renders section with default props', () => {
    render(<Section>Test Content</Section>);
    const section = screen.getByText('Test Content').closest('section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('section');
    expect(section).toHaveClass('bg-white');
    
    // Vérifier que le container est présent par défaut
    const container = section.firstChild;
    expect(container).toHaveClass('container');
    expect(container).toHaveClass('mx-auto');
    expect(container).toHaveClass('px-4');
  });

  test('renders section with custom id', () => {
    render(<Section id="test-section">Test Content</Section>);
    const section = screen.getByText('Test Content').closest('section');
    expect(section).toHaveAttribute('id', 'test-section');
  });

  test('renders section with different backgrounds', () => {
    const { rerender } = render(<Section background="light">Light Section</Section>);
    let section = screen.getByText('Light Section').closest('section');
    expect(section).toHaveClass('bg-gray-50');

    rerender(<Section background="primary">Primary Section</Section>);
    section = screen.getByText('Primary Section').closest('section');
    expect(section).toHaveClass('bg-primary');
    expect(section).toHaveClass('text-white');

    rerender(<Section background="accent">Accent Section</Section>);
    section = screen.getByText('Accent Section').closest('section');
    expect(section).toHaveClass('bg-accent');
    expect(section).toHaveClass('text-white');
  });

  test('renders section without container when container=false', () => {
    render(<Section container={false}>No Container</Section>);
    const section = screen.getByText('No Container').closest('section');
    const sectionContent = section.firstChild;
    expect(sectionContent).not.toHaveClass('container');
    expect(sectionContent).not.toHaveClass('mx-auto');
    expect(sectionContent).not.toHaveClass('px-4');
  });

  test('applies additional className', () => {
    render(<Section className="test-class">Custom Class Section</Section>);
    const section = screen.getByText('Custom Class Section').closest('section');
    expect(section).toHaveClass('test-class');
  });
});
