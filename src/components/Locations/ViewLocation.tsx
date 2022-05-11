import React, {CSSProperties, ReactNode} from 'react';
import {Descriptions} from 'antd';
import {TLocation} from '../../types/weather';
import {TempDiagramContainer} from '../../containers/TempDiagramContainer';

const pageWrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '0 4rem',
  maxWidth: '100vw',
};

const descrWrapperStyles: CSSProperties = {
  backgroundColor: 'white',
  borderRadius: '4px',
  padding: '2rem',
};

const labels: Partial<Record<keyof TLocation, string>> = {
  main: 'main',
  description: 'description',
  temp: 'temperature',
  feels_like: 'feels like',
  temp_max: 'max temperature',
  temp_min: 'min temperature',
  pressure: 'pressure',
  humidity: 'humidity',
  sunrise: 'sunrise',
  sunset: 'sunset',
  wind_deg: 'wind deg',
  wind_speed: 'wind speed',
};

const descriptionItems: Array<keyof typeof labels> = [
  'main',
  'description',
  'temp',
  'feels_like',
  'temp_max',
  'temp_min',
  'humidity',
  'pressure',
  'sunrise',
  'sunset',
  'wind_deg',
  'wind_speed',
];

interface IProps {
  location: TLocation;
}

export const ViewLocation: React.FC<IProps> = ({location}) => {
  const {locationName} = location;

  return (
    <div style={pageWrapperStyles}>
      <div style={descrWrapperStyles}>
        <Descriptions title={locationName}>
          {descriptionItems.map((el) => {
            return (
              <Descriptions.Item label={<Capitalize>{labels[el]}</Capitalize>} key={el}>
                {location[el]}
              </Descriptions.Item>
            );
          })}
        </Descriptions>
      </div>
      <TempDiagramContainer />
    </div>
  );
};

const Capitalize: React.FC<{children: ReactNode}> = ({children}) => (
  <span style={{textTransform: 'capitalize'}}>{children}</span>
);
