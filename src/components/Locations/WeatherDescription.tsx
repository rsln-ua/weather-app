import {Descriptions} from 'antd';
import React, {CSSProperties, ReactNode} from 'react';
import {TLocation} from '../../types/weather';

const descrWrapperStyles: CSSProperties = {
  backgroundColor: 'white',
  borderRadius: '4px',
  padding: '2rem',
  marginTop: '2rem',
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

const descriptionItems: Array<{
  keyData: keyof typeof labels;
  render?: (value?: string | number) => ReactNode;
}> = [
  {keyData: 'main'},
  {keyData: 'description'},
  {keyData: 'temp'},
  {keyData: 'feels_like'},
  {keyData: 'temp_max'},
  {keyData: 'temp_min'},
  {keyData: 'humidity'},
  {keyData: 'pressure'},
  {
    keyData: 'sunrise',
    render: renderTime,
  },
  {
    keyData: 'sunset',
    render: renderTime,
  },
  {keyData: 'wind_deg'},
  {keyData: 'wind_speed'},
];

export interface IProps {
  location: TLocation;
}

export const WeatherDescription: React.FC<IProps> = ({location}) => {
  const {locationName} = location;

  return (
    <div style={descrWrapperStyles}>
      <Descriptions title={locationName}>
        {descriptionItems.map(({keyData, render}) => {
          return (
            <Descriptions.Item label={<Capitalize>{labels[keyData]}</Capitalize>} key={keyData}>
              {render?.(location[keyData]) || location[keyData]}
            </Descriptions.Item>
          );
        })}
      </Descriptions>
    </div>
  );
};

const Capitalize: React.FC<{children: ReactNode}> = ({children}) => (
  <span style={{textTransform: 'capitalize'}}>{children}</span>
);

function renderTime(value?: string | number): ReactNode {
  if (!value || typeof value === 'string') return null;
  const date = new Date((value as number) * 1000);
  return `${date.getHours()}:${date.getMinutes()}`;
}
