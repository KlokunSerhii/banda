import { Suspense } from 'react';
import Header from 'components/layout/Header';
import { Outlet } from 'react-router-dom/dist';

function SharedLayout() {


  return (
    <div>
      <Header />
      <Suspense fallback={<b>LODIND....</b>}>
          <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
