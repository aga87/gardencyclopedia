import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { byRole } from 'testing-library-selector';
import ConfirmDeletionAlert from './ConfirmDeletionAlert';

const ui = {
  alert: byRole('alertdialog', { name: /confirm deletion/i }),
  cancelBtn: byRole('button', { name: /cancel/i }),
  deleteBtn: byRole('button', { name: /delete/i })
};

const defaultProps = {
  itemName: 'item',
  id: 'id',
  handleCancel: jest.fn(),
  handleDelete: jest.fn()
};

describe('ConfirmDeletionAlert', () => {
  beforeEach(() => {
    render(<ConfirmDeletionAlert {...defaultProps} />);
  });

  test('renders with correct title', () => {
    expect(ui.alert.get()).toBeInTheDocument();
  });

  test('renders cancel button', () => {
    expect(ui.cancelBtn.get()).toBeInTheDocument();
  });

  test('cancel button calls correct function on click', () => {
    userEvent.click(ui.cancelBtn.get());
    expect(defaultProps.handleCancel).toHaveBeenCalledTimes(1);
  });

  test('renders delete button', () => {
    expect(ui.deleteBtn.get()).toBeInTheDocument();
  });

  test('delete button calls correct function on click', () => {
    userEvent.click(ui.deleteBtn.get());
    expect(defaultProps.handleDelete).toHaveBeenCalledTimes(1);
  });

  describe('alert is keyboard accessible', () => {
    test('Escape key simulates cancel click (closes the dialog)', () => {
      userEvent.keyboard('{Escape}');
      expect(defaultProps.handleCancel).toHaveBeenCalledTimes(1);
    });

    test('Tab key moves focus to next focusable element inside the dialog', () => {
      expect(ui.cancelBtn.get()).toHaveFocus();
      userEvent.tab();
      expect(ui.deleteBtn.get()).toHaveFocus();
      userEvent.tab();
      expect(ui.cancelBtn.get()).toHaveFocus();
    });

    test('Tab + Shift moves focus to previous focusable element inside the dialog', () => {
      expect(ui.cancelBtn.get()).toHaveFocus();
      userEvent.tab({ shift: true });
      expect(ui.deleteBtn.get()).toHaveFocus();
      userEvent.tab({ shift: true });
      expect(ui.cancelBtn.get()).toHaveFocus();
    });
  });
});
