import React, {CSSProperties, ReactNode} from 'react';
import {blue, grey} from '@ant-design/colors';

const layoutStyles: CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(70deg, ${blue.primary}, ${grey.primary})`,
};

interface IProps {
  children: ReactNode;
}

export const Layout: React.FC<IProps> = ({children}) => {
  return <div style={layoutStyles}>{children}</div>;
};
