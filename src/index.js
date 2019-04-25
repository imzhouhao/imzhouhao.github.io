import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import GameApp from './containers/GameApp.js';
import gameAppReducer from './reducers/gameApp.js';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(gameAppReducer);

ReactDOM.render(
  <Provider store={store}>
    <GameApp />
  </Provider>, 
  document.getElementById('app')
);

registerServiceWorker();
