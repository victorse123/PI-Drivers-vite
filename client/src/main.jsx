// /* eslint-disable react/no-deprecated */
// import ReactDOM from 'react-dom'
// import App from './App.jsx'
// import React from 'react'
// import './index.css'
// import {BrowserRouter} from "react-router-dom"
// import { Provider } from 'react-redux'
// import store from './redux/store'


// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <BrowserRouter>
//       <App/>
//       </BrowserRouter>
//     </Provider>
//       </React.StrictMode>, 
//   document.getElementById("root")
// )

import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = document.getElementById('root');
const rootContainer = createRoot(root);

rootContainer.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);