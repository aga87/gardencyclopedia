import React, { useState } from 'react';
import useRovingFocus from '../../../../hooks/useRovingFocus';
import Tab from '../../../01-atoms/buttons/Tab/Tab';
import AuthForm from '../AuthForm';

const TabbedAuthForm = (): JSX.Element => {
  // Tabs corresponding to form variants
  type AuthFormProps = React.ComponentProps<typeof AuthForm>;
  const [selectedTab, selectTab] = useState<AuthFormProps['variant']>('login');
  const { widgetItemsRefs, handleKeyDown } = useRovingFocus(2, 0, true);

  const handleLoginTabClick = () => {
    selectTab('login');
  };

  const handleRegisterTabClick = () => {
    selectTab('register');
  };

  return (
    <div className='o-tabbed-form l-tabbed-form'>
      <div role='tablist' className='l-tabbed-form__tabs'>
        <Tab
          ref={ref => {
            widgetItemsRefs.current[0] = ref;
          }}
          text='Log in'
          selected={selectedTab === 'login'}
          tabPanelId='tabpanel-login'
          handleClick={handleLoginTabClick}
          handleKeyDown={handleKeyDown}
        />
        <Tab
          ref={ref => {
            widgetItemsRefs.current[1] = ref;
          }}
          text='Register'
          selected={selectedTab === 'register'}
          tabPanelId='tabpanel-register'
          handleClick={handleRegisterTabClick}
          handleKeyDown={handleKeyDown}
        />
      </div>
      <div role='tabpanel' id={`tabpanel-${selectedTab}`}>
        <AuthForm variant={selectedTab} />
      </div>
    </div>
  );
};

export default TabbedAuthForm;
