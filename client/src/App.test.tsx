import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('App renders authentication page when user authentication fails', async () => {
  mockedAxios.get.mockRejectedValueOnce(new Error('authentication failed'));
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
  mockedAxios.get.mockResolvedValueOnce({ data: user });
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
