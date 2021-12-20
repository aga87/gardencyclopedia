import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import App from './App';

afterEach(cleanup);

test('Renders without crashing with app title', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const appTitle = getByText(/gardencyclopedia/i);
  expect(appTitle).toBeInTheDocument();
});
