import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await logout();
      // navigate home and indicate we logged out successfully
      navigate('/', { state: { loggedOut: true } });
    })();
  }, []);

  return null;
};

export default Logout;
