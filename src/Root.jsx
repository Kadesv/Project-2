import {Outlet} from 'react-router-dom';
import HomeNav from './HomeNav';

export default function Root() {
  return (
    <>
    <HomeNav />
    
      <main>
        <Outlet />
      </main>
    </>
  );
}
