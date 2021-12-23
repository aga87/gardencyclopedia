import { render, screen } from '@testing-library/react';
import CalendarCaption from './CalendarCaption';

const defaultProps = {
  noOfPlants: 12
};

test('CalendarCaption renders with correct text', () => {
  const { rerender } = render(<CalendarCaption noOfPlants={0} />);
  expect(screen.getByText('0 Plants')).toBeInTheDocument();
  rerender(<CalendarCaption noOfPlants={1} />);
  expect(screen.getByText('1 Plant')).toBeInTheDocument();
  rerender(<CalendarCaption {...defaultProps} />);
  expect(screen.getByText('12 Plants')).toBeInTheDocument();
});

test('CalendarCaption renders the legend with no visual regression', () => {
  const { container } = render(<CalendarCaption {...defaultProps} />);
  expect(screen.getByText('Legend')).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});
