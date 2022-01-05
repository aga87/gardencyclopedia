import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import mockPlantsData from '../../../utils/mock-data';
import CalendarWithLoading from './CalendarWithLoading';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const renderCalendarWithLoading = () =>
  render(
    <Provider store={store}>
      <CalendarWithLoading />
    </Provider>
  );

describe('<CalendarWithLoading />', () => {
  test('renders "loading" when getting data from the server', () => {
    renderCalendarWithLoading();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  describe('when API call is successful', () => {
    test('renders no plants message if the plant list is empty', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: { plants: [] } });
      renderCalendarWithLoading();
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      await screen.findByRole('region', { name: /calendar/i });
      expect(
        screen.getByRole('heading', { name: /no plants/i })
      ).toBeInTheDocument();
    });

    test('renders fetched data (calendar plant list)', async () => {
      mockedAxios.get.mockResolvedValueOnce({
        data: { plants: mockPlantsData }
      });
      renderCalendarWithLoading();
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      await screen.findByRole('region', { name: /calendar/i });
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      // Renders correct number of entries
      const listItems = screen.getAllByRole('listitem');
      expect(listItems.length).toEqual(mockPlantsData.length);
      // Correctly renders each plant entry
      mockPlantsData.forEach(plant => {
        expect(
          screen.getByRole('heading', { name: plant.name })
        ).toBeInTheDocument();

        if (plant.desc) {
          expect(screen.getByText(plant.desc)).toBeInTheDocument();
        }

        expect(
          screen.getByText(new RegExp(plant.category, 'i'))
        ).toBeInTheDocument();
      });
      expect(screen.getAllByRole('figure', { name: /chart/i }).length).toBe(
        mockPlantsData.length
      );
    });

    test('renders dropdown menu for each plant entry with "edit", "plant" and "delete" options', async () => {
      mockedAxios.get.mockResolvedValueOnce({
        data: { plants: [mockPlantsData[0]] }
      });
      renderCalendarWithLoading();
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      await screen.findByRole('navigation', { name: /plant options/i });
      userEvent.click(screen.getByRole('button', { name: /open options/i }));
      expect(
        screen.getByRole('button', { name: /delete/i })
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /plant/i })
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /open options/i })
      ).not.toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /close options/i })
      ).toBeInTheDocument();
    });

    describe('when deleting a plant', () => {
      test('choosing delete from the dropdown menu renders deletion confirmation alert', async () => {
        mockedAxios.get.mockResolvedValueOnce({
          data: { plants: [mockPlantsData[0]] }
        });
        renderCalendarWithLoading();
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        await screen.findByRole('navigation', { name: /plant options/i });
        userEvent.click(screen.getByRole('button', { name: /open options/i }));
        userEvent.click(screen.getByRole('button', { name: /delete/i }));
        expect(
          screen.getByRole('alertdialog', { name: /confirm deletion/i })
        ).toBeInTheDocument();
      });

      test('confirming plant deletion removes the plant from the list and renders status message or no plants message if the deleted plant was the last one on the list (when the API call is successful)', async () => {
        mockedAxios.get.mockResolvedValueOnce({
          data: { plants: [mockPlantsData[0], mockPlantsData[1]] }
        });
        const { rerender } = renderCalendarWithLoading();
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        await screen.findAllByRole('navigation', { name: /plant options/i });
        const openOptionsButtons = screen.getAllByRole('button', {
          name: /open options/i
        });
        // Open options for the first plant
        userEvent.click(openOptionsButtons[0]);
        userEvent.click(screen.getByRole('button', { name: /delete/i }));

        const confirmationAlert = screen.getByRole('alertdialog', {
          name: /confirm deletion/i
        });
        userEvent.click(
          within(confirmationAlert).getByRole('button', { name: /delete/i })
        );
        mockedAxios.delete.mockResolvedValueOnce({
          data: { id: mockPlantsData[0]._id }
        });
        rerender(
          <Provider store={store}>
            <CalendarWithLoading />
          </Provider>
        );
        expect(mockedAxios.delete).toHaveBeenCalledTimes(1);
        await screen.findByRole('region', { name: /calendar/i });
        expect(
          screen.queryByRole('heading', { name: mockPlantsData[0].name })
        ).not.toBeInTheDocument();
        expect(screen.getByRole('status')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem').length).toBe(1);
        userEvent.click(screen.getByRole('button', { name: /open options/i }));
        userEvent.click(screen.getByRole('button', { name: /delete/i }));
        const confirmationAlert2 = screen.getByRole('alertdialog', {
          name: /confirm deletion/i
        });
        userEvent.click(
          within(confirmationAlert2).getByRole('button', { name: /delete/i })
        );
        mockedAxios.delete.mockResolvedValueOnce({
          data: { id: mockPlantsData[0]._id }
        });
        rerender(
          <Provider store={store}>
            <CalendarWithLoading />
          </Provider>
        );
        expect(mockedAxios.delete).toHaveBeenCalledTimes(2);
        await screen.findByRole('region', { name: /calendar/i });
        expect(
          screen.getByRole('heading', { name: /no plants/i })
        ).toBeInTheDocument();
      });

      test.todo(
        'confirming plant deletion renders error message when the delete API call fails (after handling the error on the fe)'
      );
    });
  });

  test.todo(
    'should display error message when API call fails (after handling the error on the fe)'
  );
});
