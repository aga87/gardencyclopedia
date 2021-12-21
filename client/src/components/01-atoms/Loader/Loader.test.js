import { render } from '@testing-library/react';
import Loader from './Loader';

test('Loader renders icon with text', () => {
  const { container } = render(<Loader />);
  expect(container.firstChild).toMatchSnapshot();
});