import React from 'react';
import {useSelector} from 'react-redux';
import {TempDiagram} from '../components/Locations/TempDiagram';
import {DIAGRAM_HEIGHT} from '../constants/diagram';
import {RootState} from '../store';
import {TDiagramItem} from '../types/diagram';
import {THourData} from '../types/weatherHistory';

interface IGetDiagramData {
  (params: {
    history: THourData[];
    minTemp: number;
    maxTemp: number;
    tempRange: number;
    oneTempHeight: number;
  }): Array<TDiagramItem>;
}

const getDiagramData: IGetDiagramData = ({history, minTemp, oneTempHeight}) => {
  return history.map((el) => {
    return {
      date: new Date(el.date),
      height: (el.temp - minTemp) * oneTempHeight,
      temp: el.temp,
    };
  });
};

export const TempDiagramContainer: React.FC = () => {
  const history = useSelector((state: RootState) => state.currentLocation.history);

  const temps = history.map((el) => el.temp);

  const minTemp = Math.min(...temps);
  const maxTemp = Math.max(...temps);

  const tempRange = maxTemp - minTemp;
  const oneTempHeight = Math.ceil(DIAGRAM_HEIGHT / tempRange);

  const diagramData = getDiagramData({history, maxTemp, minTemp, tempRange, oneTempHeight});

  return <TempDiagram items={diagramData} />;
};
