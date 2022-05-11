import React, {CSSProperties} from 'react';
import {Button} from 'antd';
import {TLocation} from '../../types/weather';
import {TempDiagramContainer} from '../../containers';
import {Link} from 'react-router-dom';
import {routes} from '../../constants/routes';
import {WeatherDescription} from './WeatherDescription';

const pageWrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '0 4rem',
  maxWidth: '100vw',
};

interface IProps {
  location: TLocation;
}

export const ViewLocation: React.FC<IProps> = ({location}) => {
  return (
    <div style={pageWrapperStyles}>
      <div>
        <Link to={routes.main.get()}>
          <Button>Back</Button>
        </Link>
      </div>
      <WeatherDescription location={location} />
      <TempDiagramContainer />
    </div>
  );
};
