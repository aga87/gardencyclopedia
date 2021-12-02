import React, { useState } from 'react';
import useWidgetKeyboardSupport from '../utils/hooks/useWidgetKeyboardSupport';
import Tab from './01-atoms/buttons/Tab';
import AuthForm from './AuthForm';

const TabbedAuthForm = (): JSX.Element => {
  const tabs = ['login', 'register'];
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const { widgetItemsRefs, handleKeyDown } = useWidgetKeyboardSupport(tabs, 0);

  const handleLoginTabClick = () => {
    setTab('login');
  };

  const handleRegisterTabClick = () => {
    setTab('register');
  };

  return (
    <div className='c-tabbed-form l-tabbed-form'>
      <div role='tablist' className='l-tabbed-form__tabs'>
        <Tab
          ref={ref => {
            widgetItemsRefs.current[0] = ref;
          }}
          text='Log in'
          selected={tab === 'login'}
          tabPanelId='tabpanel-login'
          handleClick={handleLoginTabClick}
          handleKeyDown={handleKeyDown}
        />
        <Tab
          ref={ref => {
            widgetItemsRefs.current[1] = ref;
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
