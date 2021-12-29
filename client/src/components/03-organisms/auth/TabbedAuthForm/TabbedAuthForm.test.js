import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';
import TabbedAuthForm from './TabbedAuthForm';

test('TabbedAuthForm renders login form on initial render and when login tab is selected', () => {
  render(
    <Provider store={store}>
      <TabbedAuthForm />
    </Provider>
  );
  const loginTab = screen.getByRole('tab', { name: /log in/i });
  expect(loginTab).toBeInTheDocument();
  expect(loginTab).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  expect(screen.getByRole('form', { name: 'login-form' })).toBeInTheDocument();
});

test('TabbedAuthForm renders registration form when register tab is selected', () => {
  render(
    <Provider store={store}>
      <TabbedAuthForm />
    </Provider>
  );
  const registerTab = screen.getByRole('tab', { name: /register/i });
  expect(registerTab).toBeInTheDocument();
  expect(registerTab).toHaveAttribute('aria-selected', 'false');
  expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  expect(
    screen.queryByRole('form', { name: 'register-form' })
  ).not.toBeInTheDocument();
  userEvent.click(registerTab);
  expect(registerTab).toHaveAttribute('aria-selected', 'true');
  expect(
    screen.getByRole('form', { name: 'register-form' })
  ).toBeInTheDocument();
});
