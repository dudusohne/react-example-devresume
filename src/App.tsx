import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={AuthPage} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
}

export default App;
