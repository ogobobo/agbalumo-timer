import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import routes from './routes';

/**
 * Define context for Application
 */
const context = {
  routes,
};

/**
 * Mount Point object
 */
const mountPoint = document ? document.getElementById('root') : null;

ReactDOM.render(<App context={context} />, mountPoint);
