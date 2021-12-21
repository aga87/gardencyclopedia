import { render } from '@testing-library/react';
import Logo from './Logo';

test('It renders the logo icon', () => {
  const { container } = render(<Logo />);
  expect(container.firstChild).toMatchSnapshot();
});
