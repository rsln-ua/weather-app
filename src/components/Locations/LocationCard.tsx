import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Divider, Space, Typography} from 'antd';
import {DeleteOutlined, ReloadOutlined} from '@ant-design/icons';
import {routes} from '../../constants/routes';

const {Meta} = Card;

interface IProps {
  main: string;
  description: string;
  temp: number;
  humidity: number;
  windSpeed: number;
  locationName: string;
  id: number;
  deleteLocation: (id: number) => void;
  reloadLocation: (id: number) => void;
}

export const LocationCard: React.FC<IProps> = ({
  main,
  description,
  locationName,
  humidity,
  windSpeed,
  temp,
  id,
  deleteLocation,
  reloadLocation,
}) => {
  const handleDelete = () => {
    deleteLocation(id);
  };
  const handleReload = () => {
    reloadLocation(id);
  };

  return (
    <Card
      style={{width: 300, minHeight: '245px'}}
      title={<Link to={routes.locationWeather.get({id: id.toString()})}>{locationName}</Link>}
      actions={[
        <DeleteOutlined key="delete" onClick={handleDelete} />,
        <ReloadOutlined key={'reload'} onClick={handleReload} />,
      ]}>
      <Meta title={main} description={description} />
      <Space style={{marginTop: '1rem'}} split={<Divider type="vertical" />}>
        <Typography.Text>{temp}℃</Typography.Text>
        <Typography.Text>💧{humidity}%</Typography.Text>
        <Typography.Text>💨{windSpeed}m/s</Typography.Text>
      </Space>
    </Card>
  );
};
