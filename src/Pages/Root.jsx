import axios from 'axios';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton.jsx';
import HomeNav from './HomeNav.jsx';

export default function Root() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/logout');
    if (res.data.success) {
      navigate('/');
    }
  };

  return (
    <>
    <HomeNav  brand="Ask Away Forums"
        leftLinks={[
          { url: '#', text: 'About' },
          { url: '#', text: 'Contact' },
        ]}
        rightLinks={[
          { url: '#', text: 'Login' },
          { url: '#', text: 'Favorites' },
          { url: '#', text: 'Settings' },
          { url: '#', text: 'Profile' },
        ]}/>

      <main>
        <Outlet />
      </main>
    </>
  );
}
