import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import ReactBreakpoints from './components/ReactBreakpoints';
import RoutesModule from './routes';
import './site.css';

import registerServiceWorker from './registerServiceWorker';

let Routes = RoutesModule;

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920
};

const renderApp = () => {
  const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
  ReactDOM.render(
    <ReactBreakpoints breakpoints={breakpoints}>
      <AppContainer>
        <BrowserRouter children={Routes} basename={baseUrl} />
      </AppContainer>
    </ReactBreakpoints>,
    document.getElementById('root') as HTMLElement
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./routes', () => {
    Routes = require('./routes.tsx').default;
    renderApp();
  });
}

registerServiceWorker();
