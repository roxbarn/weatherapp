import React from 'react';
import AppContainer from './containers/AppContainer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppContainer />
    </Router>
  );
}

export default App;