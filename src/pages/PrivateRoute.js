import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;