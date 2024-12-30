import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reducer from './TPRedux/Store'
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const Store = createStore(reducer)



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <BrowserRouter>
  <Provider store={Store}>
      <App />
  </Provider>
  
  // </BrowserRouter>
  
);



