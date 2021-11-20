import React, { useState } from 'react';
import useTabFocus from '../utils/hooks/useTabFocus';
import Tab from './nano/Tab';
import AuthForm from './AuthForm';

const TabbedAuthForm = (): JSX.Element => {
  const tabs = ['login', 'register'];
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const { tabRefs, handleKeyDown } = useTabFocus(tabs);

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
