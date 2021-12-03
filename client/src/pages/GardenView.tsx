import React from 'react';
import GardenMenuTop from '../components/03-organisms/GardenMenuTop';
import GardenMenuBottom from '../components/03-organisms/GardenMenuBottom';
import Garden from '../components/03-organisms/Garden';
import MainMenu from '../components/03-organisms/MainMenu';
import DashboardTemplate from '../components/04-templates/DashboardTemplate';

const GardenView = () => (
  <DashboardTemplate
    sideContent={<MainMenu />}
    topMenu={<GardenMenuTop />}
    bottomMenuMobile={<GardenMenuBottom />}
    content={<Garden />}
  />
);

export default GardenView;
