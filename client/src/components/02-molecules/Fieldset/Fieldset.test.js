import { render, screen } from '@testing-library/react';
import Fieldset from './Fieldset';

const defaultProps = {
  legend: 'Some legend'
};

test('Fieldset renders with correct legend', () => {
  render(<Fieldset {...defaultProps} />);
  expect(screen.getByRole('group', {name: /some legend/i})).toBeInTheDocument();
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
