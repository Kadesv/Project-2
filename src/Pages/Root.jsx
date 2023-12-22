import axios from 'axios';
import {Outlet} from 'react-router-dom';
import HomeNav from '../Components/HomeNav.jsx';

export default function Root() {

  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/logout');
    if (res.data.success) {
      navigate('/');
    }
  };

  return (
    <>
    <HomeNav  brand="Ask Away Forums"/>

      <main>
        <Outlet />
      </main>
    </>
  );
}
