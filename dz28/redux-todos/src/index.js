import './index.css';
import './components/Form.css';
import './components/List.css';
import './components/ListItem.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Provider} from "react-redux";
import store from "./store/reducers";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


