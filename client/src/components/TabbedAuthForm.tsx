import React, { useState, useRef, useEffect } from 'react';
import { getNextIndex, getPreviousIndex } from '../utils/list-utils';
import Tab from './nano/Tab';
import AuthForm from './AuthForm';

const TabbedAuthForm = (): JSX.Element => {
  const tabs = ['login', 'register'];
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [focusedTab, setFocusedTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleLoginTabClick = () => {
    setTab('login');
  };

  const handleRegisterTabClick = () => {
    setTab('register');
  };

  // Keyboard support: manage focus with roving tabindex
  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    const { key } = e;
    switch (key) {
      case 'Enter':
      case 'Space': {
        e.preventDefault();
        const target = e.target as HTMLButtonElement;
        target.click();
        break;
      }
      case 'Right': // Edge
      case 'ArrowRight': {
        e.preventDefault();
        // focus next / first
        const nextIndex = getNextIndex(focusedTab, tabs);
        setFocusedTab(nextIndex);
        break;
      }
      case 'Left': // Edge
      case 'ArrowLeft': {
        e.preventDefault();
        // focus previous / last
        const previousIndex = getPreviousIndex(focusedTab, tabs);
        setFocusedTab(previousIndex);
        break;
      }
      case 'Home':
        e.preventDefault();
        // focus first
        setFocusedTab(0);
        break;
      case 'End': {
        e.preventDefault();
        // focus last
        setFocusedTab(tabs.length - 1);
        break;
      }
      default:
    }
  }

  useEffect(() => {
    const tabToFocus = tabRefs.current[focusedTab] as HTMLButtonElement;
    tabToFocus.focus();
  }, [focusedTab]);

  return (
    <div className='c-tabbed-form l-tabbed-form'>
      <div role='tablist' className='l-tabbed-form__tabs'>
        <Tab
          ref={ref => {
            tabRefs.current[0] = ref;
          }}
          text='Log in'
          selected={tab === 'login'}
          tabPanelId='tabpanel-login'
          handleClick={handleLoginTabClick}
          handleKeyDown={handleKeyDown}
        />
        <Tab
          ref={ref => {
            tabRefs.current[1] = ref;
          }}
          text='Register'
          selected={tab === 'register'}
          tabPanelId='tabpanel-register'
          handleClick={handleRegisterTabClick}
          handleKeyDown={handleKeyDown}
        />
      </div>
      <div role='tabpanel' id={`tabpanel-${tab}`}>
        <AuthForm variant={tab} />
      </div>
    </div>
  );
};

export default TabbedAuthForm;
