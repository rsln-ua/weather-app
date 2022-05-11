import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Router} from './Router';
import {SyncWithLocalStorageContainer} from './containers/SyncWithLocalStorageContainer';
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <SyncWithLocalStorageContainer>
        <Router />
      </SyncWithLocalStorageContainer>
    </BrowserRouter>
  );
}

export default App;
