import React, {ReactNode} from 'react';
import {BrowserRouter} from 'react-router-dom';

export const TestProvider: React.FC<{children?: ReactNode}> = ({children}) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
