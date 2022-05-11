import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {routes} from './constants/routes';
import {LocationsContainer, ViewLocationContainer} from './containers';
import {Layout} from './components/Layout';

export const Router: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path={routes.main.path} element={<LocationsContainer />} />
        <Route path={routes.locationWeather.path} element={<ViewLocationContainer />} />
        <Route path={routes.any.path} element={<Navigate to={routes.main.get()} />} />
      </Routes>
    </Layout>
  );
};
