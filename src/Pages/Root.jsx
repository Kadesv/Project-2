import axios from 'axios';
import {Outlet, useNavigate } from 'react-router-dom';
import HomeNav from '../HomeNav.jsx';

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
          { url: '/sign', text: 'Login' },
          { url: '/account', text: 'Account' },
        ]}/>

      <main>
        <Outlet />
      </main>
    </>
  );
}
