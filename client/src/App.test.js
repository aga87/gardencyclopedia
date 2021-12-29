import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import App from './App';

jest.mock('axios');

test('App renders authentication page when user authentication fails', async () => {
  axios.get.mockRejectedValueOnce(new Error('authentication failed'));
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(axios.get).toHaveBeenCalledTimes(1);
  const authPage = await screen.findByTestId('authentication');
  expect(authPage).toBeInTheDocument();
});

test('App renders calendar dashboard view when user authentication succeeds', async () => {
  const user = {
    username: 'user'
  };
  axios.get.mockResolvedValueOnce({ data: user });
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(axios.get).toHaveBeenCalledTimes(1);
  const calendarDashboardView = await screen.findByTestId('calendar-dashboard');
  expect(calendarDashboardView).toBeInTheDocument();
  expect(screen.queryByTestId('authentication')).not.toBeInTheDocument();
});
