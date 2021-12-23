import { render, screen } from '@testing-library/react';
import Icon from './Icon';

const defaultProps = {
  name: 'trash'
};

test('Icon renders SVG', () => {
  const { container } = render(<Icon {...defaultProps} />);
  expect(container.querySelector('svg')).toBeInTheDocument();
});

test('Icon is not visible to screen readers', () => {
  const { container } = render(<Icon {...defaultProps} />);
  expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
});
