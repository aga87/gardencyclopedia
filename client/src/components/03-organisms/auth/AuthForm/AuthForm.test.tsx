import { render } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { byRole, byLabelText } from 'testing-library-selector';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';
import AuthForm from './AuthForm';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const ui = {
  loginForm: byRole('form', { name: /login form/i }),
  registerForm: byRole('form', { name: /register/i }),
  username: byLabelText(/username/i),
  email: byLabelText(/email/i),
  password: byLabelText(/password/i),
  loginBtn: byRole('button', { name: /log in/i }),
  registerBtn: byRole('button', { name: /register/i }),
  error: byRole('alert'),
  successMsg: byRole('status')
};

describe('AuthForm', () => {
  describe('Login AuthForm', () => {
    const mockUser = {
      email: 'test@test.com',
      password: 'password'
    };

    beforeEach(() =>
      render(
        <Provider store={store}>
          <AuthForm variant='login' />
        </Provider>
      )
    );
    test(`renders focused required 'email' field`, () => {
      expect(ui.email.get()).toHaveFocus();
      expect(ui.email.get()).toBeRequired();
    });

    test(`renders required 'password' field`, () => {
      expect(ui.password.get()).toBeRequired();
    });

    test('form will submit with email and password', async () => {
      userEvent.type(ui.email.get(), mockUser.email);
      userEvent.type(ui.password.get(), mockUser.password);
      userEvent.click(ui.loginBtn.get());
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post.mock.calls[0][1]).toBe(JSON.stringify(mockUser));
    });

    test('client-side validation: form will render errors and not submit without email', () => {
      userEvent.type(ui.password.get(), mockUser.password);
      expect(ui.email.get()).toHaveDisplayValue('');
      userEvent.click(ui.loginBtn.get());
      expect(mockedAxios.post).not.toHaveBeenCalled();
      expect(ui.error.get()).toHaveTextContent('Please enter email address.');
    });

    test('client-side validation: form will render errors and not submit without password', () => {
      userEvent.type(ui.email.get(), mockUser.email);
      expect(ui.password.get()).toHaveDisplayValue('');
      userEvent.click(ui.loginBtn.get());
      expect(mockedAxios.post).not.toHaveBeenCalled();
      expect(ui.error.get()).toHaveTextContent('Please enter password.');
    });

    test('server-side validation: form will render error if the submitted credentials are invalid', async () => {
      userEvent.type(ui.email.get(), mockUser.email);
      userEvent.type(ui.password.get(), mockUser.password);
      const mockedAxiosError = {
        response: {
          data: 'Invalid credentials',
          status: 400
        }
      };
      mockedAxios.isAxiosError.mockReturnValueOnce(true); // Ensure Axios error type
      mockedAxios.post.mockRejectedValueOnce(mockedAxiosError);
      userEvent.click(ui.loginBtn.get());
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      await ui.error.find();
      expect(ui.error.get()).toHaveTextContent(
        mockedAxiosError?.response?.data
      );
    });
  });

  describe('Registration AuthForm', () => {
    const mockNewUser = {
      username: 'new user',
      email: 'test@test.com',
      password: 'password'
    };

    beforeEach(() =>
      render(
        <Provider store={store}>
          <AuthForm variant='register' />
        </Provider>
      )
    );

    test(`renders focused required 'username' field`, () => {
      expect(ui.username.get()).toBeInTheDocument();
      expect(ui.username.get()).toHaveFocus();
      expect(ui.username.get()).toBeRequired();
    });

    test(`renders required 'email' field`, () => {
      expect(ui.email.get()).toBeInTheDocument();
      expect(ui.email.get()).toBeRequired();
    });

    test(`renders required 'password' field`, () => {
      expect(ui.password.get()).toBeRequired();
    });

    test('form will submit with username, email and password and render success message', async () => {
      userEvent.type(ui.username.get(), mockNewUser.username);
      userEvent.type(ui.email.get(), mockNewUser.email);
      userEvent.type(ui.password.get(), mockNewUser.password);
      mockedAxios.post.mockResolvedValueOnce({ data: 'Success' });
      userEvent.click(ui.registerBtn.get());
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post.mock.calls[0][1]).toBe(
        JSON.stringify(mockNewUser)
      );
      await ui.successMsg.find();
      expect(ui.successMsg.get()).toHaveTextContent(
        'Registration successful. Please log in.'
      );
    });

    test('client-side validation: form will render errors and not submit without username', () => {
      userEvent.type(ui.email.get(), 'test@test.com');
      userEvent.type(ui.password.get(), 'password');
      expect(ui.username.get()).toHaveDisplayValue('');
      userEvent.click(ui.registerBtn.get());
      expect(mockedAxios.post).not.toHaveBeenCalled();
      expect(ui.error.get()).toHaveTextContent('Please enter username.');
    });

    test('client-side validation: form will render errors and not submit with empty email field', () => {
      userEvent.type(ui.username.get(), 'user');
      userEvent.type(ui.password.get(), 'password');
      expect(ui.email.get()).toHaveDisplayValue('');
      userEvent.click(ui.registerBtn.get());
      expect(mockedAxios.post).not.toHaveBeenCalled();
      expect(ui.error.get()).toHaveTextContent('Please enter email address.');
    });

    test('client-side validation: form will render errors and not submit with empty password field', () => {
      userEvent.type(ui.username.get(), 'user');
      userEvent.type(ui.email.get(), 'test@test.com');
      expect(ui.password.get()).toHaveDisplayValue('');
      userEvent.click(ui.registerBtn.get());
      expect(mockedAxios.post).not.toHaveBeenCalled();
      expect(ui.error.get()).toHaveTextContent('Please enter password.');
    });

    test('server-side validation: form will render error if registration fails upon submission', async () => {
      userEvent.type(ui.username.get(), 'user');
      userEvent.type(ui.email.get(), 'test@test.com');
      userEvent.type(ui.password.get(), 'password');
      const mockedAxiosError = {
        response: {
          data: 'User already exists',
          status: 400
        }
      };
      // Ensure correct error type
      mockedAxios.isAxiosError.mockReturnValueOnce(true);
      mockedAxios.post.mockRejectedValueOnce(mockedAxiosError);
      userEvent.click(ui.registerBtn.get());
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      await ui.error.find();
      expect(ui.error.get()).toHaveTextContent(
        mockedAxiosError?.response?.data
      );
    });
  });
});
