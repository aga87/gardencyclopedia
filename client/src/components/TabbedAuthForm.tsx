import React, { useState } from 'react';
import Tab from './nano/Tab';
import AuthForm from './AuthForm';

const TabbedAuthForm = (): JSX.Element => {
  const [tab, setTab] = useState<'login' | 'register'>('login');

  const handleLoginTabClick = () => {
    setTab('login');
  };

  const handleRegisterTabClick = () => {
    setTab('register');
  };

  return (
    <div className='c-tabbed-form l-tabbed-form'>
      <div className='l-tabbed-form__tabs'>
        <Tab
          text='Log in'
          selected={tab === 'login'}
          handleClick={handleLoginTabClick}
        />
        <Tab
          text='Register'
          selected={tab === 'register'}
          handleClick={handleRegisterTabClick}
        />
      </div>
      <AuthForm variant={tab} />
    </div>
  );
};

export default TabbedAuthForm;
