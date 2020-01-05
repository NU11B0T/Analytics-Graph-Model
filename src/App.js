import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndiaMap from './components/maps/india';
import Dashboard from './components/Layout/dashboard';

function App() {
  return (
    <div style={{ backgroundColor: '#F1F2F6', margin: '0px'}}>
      <Dashboard />
    </div>
  );
}

export default App;
