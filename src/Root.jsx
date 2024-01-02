import axios from 'axios';
import {Outlet} from 'react-router-dom';
import HomeNav from './HomeNav';
import { useState } from 'react';

export default function Root() {

  const [signStatus, setSignStatus] = useState('Sign In')


  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/logout');
    if (res.data.success) {
      navigate('/');
    }
  };

  return (
    <>
    <HomeNav  signStatus={signStatus}/>

      <main>
        <Outlet />
      </main>
    </>
  );
}
