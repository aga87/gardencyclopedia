import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { byRole } from 'testing-library-selector';
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

const ui = {
  calendar: byRole('region', { name: /calendar/i }),
  listitem: byRole('listitem'),
  noPlants: byRole('heading', { name: /no plants/i }),
  plantNav: byRole('navigation', { name: /plant options/i }),
  openPlantNavBtn: byRole('button', { name: /open options/i }),
  closePlantNavBtn: byRole('button', { name: /close options/i }),
  deleteBtn: byRole('button', { name: /delete/i }),
  editBtn: byRole('button', { name: /edit/i }),
  plantBtn: byRole('button', { name: /plant/i }),
  alert: byRole('alertdialog', { name: /confirm deletion/i }),
  chart: byRole('figure', { name: /chart/i }),
  statusMsg: byRole('status')
};

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
      await ui.calendar.find();
      expect(ui.noPlants.get()).toBeInTheDocument();
    });

    test('renders fetched data (calendar plant list) with caption', async () => {
      mockedAxios.get.mockResolvedValueOnce({
        data: { plants: mockPlantsData }
      });
      renderCalendarWithLoading();
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      await ui.calendar.find();
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      // Renders correct number of entries
      const listItems = ui.listitem.getAll();
      expect(listItems.length).toEqual(mockPlantsData.length);
      // Correctly renders each plant entry
      mockPlantsData.forEach(plant => {
        expect(
          screen.getByRole('heading', { name: plant.name })
        ).toBeInTheDocument();
        if (plant.desc) {
          expect(
            screen.getByText(new RegExp(plant.desc, 'i'))
          ).toBeInTheDocument();
        }
        expect(
          screen.getByText(new RegExp(plant.category, 'i'))
        ).toBeInTheDocument();
      });
      expect(ui.chart.getAll().length).toBe(mockPlantsData.length);
      // Renders caption
      const caption = `${mockPlantsData.length} plants`
      expect(screen.getByText(new RegExp(caption, 'i'))).toBeInTheDocument();
    });

    test('renders dropdown menu for each plant entry with "edit", "plant" and "delete" options', async () => {
      mockedAxios.get.mockResolvedValueOnce({
        data: { plants: mockPlantsData }
      });
      renderCalendarWithLoading();
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      const plantNavs = await ui.plantNav.findAll();
      expect(plantNavs.length).toBe(mockPlantsData.length);
      plantNavs.forEach(plantNav => {
        userEvent.click(ui.openPlantNavBtn.get(plantNav));
        expect(ui.deleteBtn.get(plantNav)).toBeInTheDocument();
        expect(ui.editBtn.get(plantNav)).toBeInTheDocument();
        expect(ui.plantBtn.get(plantNav)).toBeInTheDocument();
        expect(ui.openPlantNavBtn.query(plantNav)).not.toBeInTheDocument();
        expect(ui.closePlantNavBtn.get(plantNav)).toBeInTheDocument();
      });
    });

    describe('when deleting a plant', () => {
      test('choosing delete from the dropdown menu renders deletion confirmation alert', async () => {
        mockedAxios.get.mockResolvedValueOnce({
          data: { plants: mockPlantsData }
        });
        renderCalendarWithLoading();
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        const openPlantNavBtns = await ui.openPlantNavBtn.findAll();
        // Open options for the first plant
        userEvent.click(openPlantNavBtns[0]);
        userEvent.click(ui.deleteBtn.get());
        expect(ui.alert.get()).toBeInTheDocument();
      });

      test('confirming plant deletion removes the plant from the list and renders status message (when the API call is successful)', async () => {
        mockedAxios.get.mockResolvedValueOnce({
          data: { plants: mockPlantsData }
        });
        renderCalendarWithLoading();
        // Mock data should contain at least two plants, as deleting the last plant should render No Plants view (covered in another test)
        expect(mockPlantsData.length > 1).toBeTruthy();
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        const openPlantNavBtns = await ui.openPlantNavBtn.findAll();
        // Open options for the first plant
        userEvent.click(openPlantNavBtns[0]);
        userEvent.click(ui.deleteBtn.get());

        let confirmationAlert = ui.alert.get();
        userEvent.click(ui.deleteBtn.get(confirmationAlert));
        expect(mockedAxios.delete).toHaveBeenCalledTimes(1);
        await ui.calendar.find();
        expect(
          screen.queryByRole('heading', { name: mockPlantsData[0].name })
        ).not.toBeInTheDocument();
        expect(ui.statusMsg.get()).toBeInTheDocument();
        expect(ui.statusMsg.get()).toHaveTextContent(/plant deleted/i);
        expect(ui.listitem.getAll().length).toBe(mockPlantsData.length - 1);
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
