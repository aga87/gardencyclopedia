import { render, cleanup, getByRole } from '@testing-library/react';
import CalendarCaption from './CalendarCaption';

afterEach(cleanup);

const defaultProps = {
  noOfPlants: 12
};

test('CalendarCaption renders with correct text', () => {
  const { getByText } = render(<CalendarCaption noOfPlants={0} />);
  expect(getByText('0 Plants')).toBeInTheDocument();
  cleanup();
  render(<CalendarCaption noOfPlants={1} />);
  expect(getByText('1 Plant')).toBeInTheDocument();
  cleanup();
  render(<CalendarCaption {...defaultProps} />);
  expect(getByText('12 Plants')).toBeInTheDocument();
});

test('CalendarCaption renders the legend with no visual regression', () => {
  const { getByText, container } = render(
    <CalendarCaption {...defaultProps} />
  );
  expect(getByText('Legend')).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});
