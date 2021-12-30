import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import CalendarWithLoading from './CalendarWithLoading';
import mockPlantsData from '../../../utils/mock-data';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const renderCalendarWithLoading = () =>
  render(
    <Provider store={store}>
      <CalendarWithLoading />
    </Provider>
  );

describe('<CalendarWithLoading />', () => {
  it('should display "loading" when getting data from the server', () => {
    renderCalendarWithLoading();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should display fetched data (plant list) when the API call is successful', async () => {
    const plants = mockPlantsData;
    mockedAxios.get.mockResolvedValueOnce({ data: { plants } });
    renderCalendarWithLoading();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    await screen.findByRole('region', { name: /calendar/i });
    expect(screen.getByText(plants[0].name)).toBeInTheDocument();
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });

  test.todo(
    'should display error message when API call fails (after handling the error on the fe)'
  );
});
