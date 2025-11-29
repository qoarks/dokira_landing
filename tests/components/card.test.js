import React from 'react';
import { render, screen } from '@testing-library/react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';

describe('Card Components', () => {
  test('renders Card with default props', () => {
    render(<Card>Card Content</Card>);
    const card = screen.getByText('Card Content');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('rounded-lg');
    expect(card).toHaveClass('border');
    expect(card).toHaveClass('bg-white');
    expect(card).toHaveClass('shadow-sm');
  });

  test('renders CardHeader with default props', () => {
    render(<CardHeader>Header Content</CardHeader>);
    const header = screen.getByText('Header Content');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('flex');
    expect(header).toHaveClass('flex-col');
    expect(header).toHaveClass('space-y-1.5');
    expect(header).toHaveClass('p-6');
  });

  test('renders CardTitle with default props', () => {
    render(<CardTitle>Card Title</CardTitle>);
    const title = screen.getByText('Card Title');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H3');
    expect(title).toHaveClass('text-xl');
    expect(title).toHaveClass('font-semibold');
  });

  test('renders CardDescription with default props', () => {
    render(<CardDescription>Card Description</CardDescription>);
    const description = screen.getByText('Card Description');
    expect(description).toBeInTheDocument();
    expect(description.tagName).toBe('P');
    expect(description).toHaveClass('text-sm');
    expect(description).toHaveClass('text-gray-600');
  });

  test('renders CardContent with default props', () => {
    render(<CardContent>Content</CardContent>);
    const content = screen.getByText('Content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('p-6');
    expect(content).toHaveClass('pt-0');
  });

  test('renders CardFooter with default props', () => {
    render(<CardFooter>Footer Content</CardFooter>);
    const footer = screen.getByText('Footer Content');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('flex');
    expect(footer).toHaveClass('items-center');
    expect(footer).toHaveClass('p-6');
    expect(footer).toHaveClass('pt-0');
  });

  test('renders full card structure correctly', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Example Card</CardTitle>
          <CardDescription>This is a description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the main content</p>
        </CardContent>
        <CardFooter>
          <p>Footer</p>
        </CardFooter>
      </Card>
    );

    expect(screen.getByText('Example Card')).toBeInTheDocument();
    expect(screen.getByText('This is a description')).toBeInTheDocument();
    expect(screen.getByText('This is the main content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  test('applies additional className to all components', () => {
    render(
      <>
        <Card className="custom-card">Card with custom class</Card>
        <CardHeader className="custom-header">Header with custom class</CardHeader>
        <CardTitle className="custom-title">Title with custom class</CardTitle>
        <CardDescription className="custom-desc">Description with custom class</CardDescription>
        <CardContent className="custom-content">Content with custom class</CardContent>
        <CardFooter className="custom-footer">Footer with custom class</CardFooter>
      </>
    );

    expect(screen.getByText('Card with custom class')).toHaveClass('custom-card');
    expect(screen.getByText('Header with custom class')).toHaveClass('custom-header');
    expect(screen.getByText('Title with custom class')).toHaveClass('custom-title');
    expect(screen.getByText('Description with custom class')).toHaveClass('custom-desc');
    expect(screen.getByText('Content with custom class')).toHaveClass('custom-content');
    expect(screen.getByText('Footer with custom class')).toHaveClass('custom-footer');
  });
});
