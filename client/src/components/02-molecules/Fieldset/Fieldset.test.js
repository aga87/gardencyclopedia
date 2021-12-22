import { render, cleanup, getByRole } from '@testing-library/react';
import Fieldset from './Fieldset';

afterEach(cleanup);

const defaultProps = {
  legend: 'Some legend'
};

test('Fieldset renders with correct legend', () => {
  const { getByText, getByTestId } = render(<Fieldset {...defaultProps} />);
  const legend = getByText('Some legend');
  expect(legend.tagName).toBe('LEGEND');
  expect(getByTestId('fieldset').firstChild).toBe(legend);
});

test('Fieldset renders children components', () => {
  const { getByTestId } = render(
    <Fieldset {...defaultProps}>
      <input type='text' defaultValue='' data-testid='fieldset-input' />
    </Fieldset>
  );
  expect(getByTestId('fieldset')).toContainElement(getByTestId('fieldset-input'));
});
