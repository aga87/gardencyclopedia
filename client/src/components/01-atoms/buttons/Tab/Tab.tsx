import React from 'react';

type TabProps = {
  text: string;
  selected: boolean;
  tabPanelId: string;
  handleClick: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  (
    { text, selected, tabPanelId, handleClick, handleKeyDown }: TabProps,
    ref
  ): JSX.Element => (
    <button
      type='button'
      role='tab'
      ref={ref}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={selected ? 'tab tab--selected' : 'tab'}
      aria-selected={selected}
      tabIndex={selected ? 0 : -1} // Roving tabindex
      aria-controls={tabPanelId}
      data-testid='tab'
    >
      {text}
    </button>
  )
);

export default Tab;
