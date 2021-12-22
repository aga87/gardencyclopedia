import { render, cleanup, screen } from '@testing-library/react';
import CalendarCaption from './CalendarCaption';

afterEach(cleanup);

const defaultProps = {
  noOfPlants: 12
};

test('CalendarCaption renders with correct text', () => {
  render(<CalendarCaption noOfPlants={0} />);
  expect(screen.getByText('0 Plants')).toBeInTheDocument();
  cleanup();
  render(<CalendarCaption noOfPlants={1} />);
  expect(screen.getByText('1 Plant')).toBeInTheDocument();
  cleanup();
  render(<CalendarCaption {...defaultProps} />);
  expect(screen.getByText('12 Plants')).toBeInTheDocument();
});

test('CalendarCaption renders the legend with no visual regression', () => {
  const { container } = render(<CalendarCaption {...defaultProps} />);
  expect(screen.getByText('Legend')).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});
