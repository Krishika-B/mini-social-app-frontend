import { useState } from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('signup');

  const handleSignup = () => {
    setPage('login');
  };

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  if (!user) {
    if (page === 'signup') {
      return <Signup onSignup={handleSignup} />;
    } else {
      return <Login onLogin={handleLogin} onSwitch={() => setPage('signup')} />;
    }
  }

  return <Home user={user} />;
}

export default App;