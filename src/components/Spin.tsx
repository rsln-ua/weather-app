import React, {CSSProperties, ReactNode} from 'react';
import {Spin as AntSpin} from 'antd';

const styles: CSSProperties = {
  position: 'fixed',
  inset: '0',
  maxHeight: 'none',
};

interface IProps {
  children: ReactNode;
  spinning: boolean;
}

export const Spin: React.FC<IProps> = ({children, spinning}) => {
  return (
    <AntSpin style={styles} spinning={spinning}>
      {children}
    </AntSpin>
  );
};
