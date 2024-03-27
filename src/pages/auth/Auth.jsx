import { useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function Auth() {
  const token = localStorage.getItem('token');

  return token ? <Outlet /> : <Navigate replace to={'/'} />;
}
