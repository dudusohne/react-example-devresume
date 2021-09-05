import { Route, BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { AuthPage } from './pages/AuthPage';
import { Home } from './pages/Home';
import dotenv from 'dotenv';

dotenv.config();

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={AuthPage} />
        <Route path="/home" exact component={Home} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
