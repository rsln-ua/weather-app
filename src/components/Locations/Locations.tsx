import React, {CSSProperties} from 'react';
import {TLocation} from '../../types/weather';
import {AddLocation} from './AddLocation';
import {LocationCard} from './LocationCard';

const cardWrapperStyles: CSSProperties = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

interface IProps {
  data: Array<TLocation>;
  addLocation: (name: string) => Promise<void>;
  deleteLocation: (id: number) => void;
  reloadLocation: (id: number) => void;
}

export const Locations: React.FC<IProps> = ({data, addLocation, deleteLocation, reloadLocation}) => {
  return (
    <div style={cardWrapperStyles}>
      {data.map((el, idx) => {
        return (
          <LocationCard
            description={el.description}
            humidity={el.humidity}
            locationName={el.locationName}
            temp={el.temp}
            main={el.main}
            windSpeed={el.wind_speed}
            id={el.locationId}
            key={el.locationName + idx}
            deleteLocation={deleteLocation}
            reloadLocation={reloadLocation}
          />
        );
      })}
      <AddLocation addLocation={addLocation} />
    </div>
  );
};
