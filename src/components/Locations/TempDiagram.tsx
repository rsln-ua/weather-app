import React, {CSSProperties} from 'react';
import {Tag, Tooltip} from 'antd';
import {DIAGRAM_HEIGHT} from '../../constants/diagram';
import {TDiagramItem} from '../../types/diagram';

const diagramStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'flex-end',
  gap: '4px',
  height: `${DIAGRAM_HEIGHT}px`,
};

const wrapperStyles: CSSProperties = {
  marginTop: '60px',
  padding: '50px 16px 16px 16px',
  paddingBottom: '50px',
  overflowX: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  borderRadius: '4px',
};

interface IProps {
  items: Array<TDiagramItem>;
}

export const TempDiagram: React.FC<IProps> = ({items}) => {
  return (
    <div style={wrapperStyles}>
      <div style={diagramStyles}>
        {items.map((el, idx) => (
          <Tooltip key={el.height + idx} placement="top" title={el.date.toLocaleString()}>
            <Tag color="gold" style={{marginBottom: `${el.height}px`}}>
              {el.temp}
            </Tag>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
