import { render } from '@testing-library/react';
import { byRole, byTestId } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { within } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import CalendarEntryMenu from './CalendarEntryMenu';

const renderComponent = () =>
  render(
    <Provider store={store}>
      <CalendarEntryMenu plantName='Parsley' plantId='1' />
    </Provider>
  );

const ui = {
  nav: byRole('navigation', { name: /plant options/i }),
  openDropdownBtn: byRole('button', { name: /open options/i }),
  closeDropdownBtn: byRole('button', { name: /close options/i }),
  dropdown: byTestId('calendar-entry-menu-dropdown'),
  deleteBtn: byRole('button', { name: /delete/i }),
  editBtn: byRole('button', { name: /edit/i }),
  plantBtn: byRole('button', { name: /plant/i }),
  alert: byRole('alertdialog', { name: /confirm deletion/i })
};

test('CalendarEntryMenu renders dropdown navigation with "plant", "edit and "delete" menu items', () => {
  renderComponent();
  const nav = ui.nav.get();
  expect(nav).toBeInTheDocument();
  expect(ui.openDropdownBtn.get()).toBeInTheDocument();
  // Open dropdown
  userEvent.click(ui.openDropdownBtn.get());
  expect(ui.dropdown.get(nav)).toBeInTheDocument();
  expect(ui.deleteBtn.get(nav)).toBeInTheDocument();
  expect(ui.editBtn.get(nav)).toBeInTheDocument();
  expect(ui.plantBtn.get(nav)).toBeInTheDocument();
  expect(ui.openDropdownBtn.query(nav)).not.toBeInTheDocument();
  expect(ui.closeDropdownBtn.get(nav)).toBeInTheDocument();
  // Close dropdown
  userEvent.click(ui.closeDropdownBtn.get());
  expect(ui.dropdown.query()).not.toBeInTheDocument();
});

test('CalendarEntryMenu dropdown closes on click outside', () => {
  renderComponent();
  // Open dropdown
  userEvent.click(ui.openDropdownBtn.get());
  expect(ui.dropdown.get()).toBeInTheDocument();
  // Click outside
  act(() => {
    userEvent.click(document.body);
  });
  expect(ui.dropdown.query()).not.toBeInTheDocument();
});

test('CalendarEntryMenu is keyboard accessible', () => {
  renderComponent();
  // Focus open dropdown button
  ui.openDropdownBtn.get().focus();
  expect(ui.openDropdownBtn.get()).toHaveFocus();
  // Open dropdown with arrow down
  userEvent.keyboard('{arrowdown}');
  const dropdown = ui.dropdown.get();
  // Get all menu items inside dropdown
  const dropdownItems = within(dropdown).getAllByRole('button');
  expect(dropdownItems.length).toBe(3);
  expect(dropdownItems[0]).toHaveFocus();
  // Focus next item with arrow down
  userEvent.keyboard('{arrowdown}');
  expect(dropdownItems[1]).toHaveFocus();
  // Focus next item with arrow right
  userEvent.keyboard('{arrowright}');
  expect(dropdownItems[2]).toHaveFocus();
  // Focus next (first) item with arrow right
  userEvent.keyboard('{arrowright}');
  expect(dropdownItems[0]).toHaveFocus();
  // Focus previous (last) item with arrow left
  userEvent.keyboard('{arrowleft}');
  expect(dropdownItems[2]).toHaveFocus();
  // Focus previous (last) item with arrow up
  userEvent.keyboard('{arrowup}');
  expect(dropdownItems[1]).toHaveFocus();
  // Close dropdown with Escape
  act(() => {
    userEvent.keyboard('{escape}');
  });
  // userEvent.keyboard('{escape}');
  expect(ui.dropdown.query()).not.toBeInTheDocument();
  expect(ui.openDropdownBtn.get()).toHaveFocus();
  // Open dropdown with arrow up
  act(() => {
    userEvent.keyboard('{arrowup}');
  });
  expect(ui.dropdown.get()).toBeInTheDocument();
});
