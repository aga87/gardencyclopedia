import React from 'react';

type DashboardTemplateProps = {
  sideContent: React.ReactNode;
  topMenu: React.ReactNode;
  bottomMenuMobile: React.ReactNode;
  content: React.ReactNode;
};

const DashboardTemplate = ({
  sideContent,
  topMenu,
  bottomMenuMobile,
  content
}: DashboardTemplateProps): JSX.Element => (
  <div className='t-dashboard l-dashboard'>
    <div className='l-dashboard__flex-main-menu not-xxs'>
      <h1 className='t-dashboard__title'>Gardencyclopedia</h1>
      {sideContent}
    </div>
    <div className='l-dashboard__flex-content'>
      {topMenu}
      <main role='main' className='l-dashboard__content'>
        {content}
      </main>
      <div className='l-dashboard__bottom-toolbar xxs-only'>
        {bottomMenuMobile}
      </div>
    </div>
  </div>
);

export default DashboardTemplate;
