import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './view/Home';
import Task from './view/Task';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Task />
  </React.StrictMode>
);