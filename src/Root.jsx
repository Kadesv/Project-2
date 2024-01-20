import { Outlet } from 'react-router-dom';
import HomeNav from './HomeNav';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Root() {
  const [signStatus, setSignStatus] = useState(false);
  const setStatusTrue = () => { setSignStatus(true) };

  const isSignedIn = async () => {
    const res = await axios.post('/api/checkss');
    if (res.data.success) {
      setStatusTrue();
    }
  }
  useEffect(() => {
    isSignedIn()
  }, [])


  return (
    <>
      <HomeNav signStatus={signStatus} setSignStatus={setSignStatus} />

      <main>
        <Outlet
          context={signStatus} />
      </main>

    </>
  );
}

