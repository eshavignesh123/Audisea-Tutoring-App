import { Navigate, Outlet } from 'react-router-dom';

const DefaultRoute = () => {
  const authToken = localStorage.getItem('authToken');

  if (authToken) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};

export default DefaultRoute;