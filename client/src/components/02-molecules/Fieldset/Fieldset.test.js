import { render, cleanup, screen } from '@testing-library/react';
import Fieldset from './Fieldset';

afterEach(cleanup);

const defaultProps = {
  legend: 'Some legend'
};

test('Fieldset renders with correct legend', () => {
  render(<Fieldset {...defaultProps} />);
  const legend = screen.getByText('Some legend');
  expect(legend.tagName).toBe('LEGEND');
  expect(screen.getByTestId('fieldset').firstChild).toBe(legend);
});

test('Fieldset renders children components', () => {
  render(
    <Fieldset {...defaultProps}>
      <input type='text' defaultValue='' data-testid='fieldset-input' />
    </Fieldset>
  );
  expect(screen.getByTestId('fieldset')).toContainElement(
    screen.getByTestId('fieldset-input')
  );
});
