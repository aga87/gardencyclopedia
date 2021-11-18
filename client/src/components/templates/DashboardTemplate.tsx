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
      <h2 className='t-dashboard__title'>Gardencyclopedia</h2>
      {sideContent}
    </div>
    <div className='l-dashboard__flex-content'>
      {topMenu}
      <section className='l-dashboard__content'>{content}</section>
      <div className='l-dashboard__bottom-toolbar xxs-only'>
        {bottomMenuMobile}
      </div>
    </div>
  </div>
);

export default DashboardTemplate;
