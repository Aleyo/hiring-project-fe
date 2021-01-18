import 'core-js';
import 'regenerator-runtime/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'src/assets/styles/global.scss';
import { App } from 'src/App';

/**
 *  * Package initializations
 *   */
import store from 'src/init/createStore';
import 'src/init/i18nInit';
import 'src/init/toastInit';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
