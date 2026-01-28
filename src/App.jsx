import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import UserPage from './pages/UserPage';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return <div>Redirecting to login...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
