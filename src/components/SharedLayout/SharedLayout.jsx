import { Suspense } from 'react';
import Header from 'components/layout/Header';
import { Outlet } from 'react-router-dom/dist';
import Loader from 'components/Loader';
import { ToastContainer } from 'react-toastify';
function SharedLayout() {


  return (
    <div>
      <Header />
      <Suspense fallback={<Loader/>}>
          <Outlet />
          <ToastContainer />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
