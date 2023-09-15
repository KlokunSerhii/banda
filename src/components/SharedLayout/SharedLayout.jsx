import Header from 'components/layout/Header';
import UserBar from 'components/layout/UserBar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom/dist';

function SharedLayout() {
  return (
    <div>
      <Header/>
      <UserBar/>
      <Suspense fallback={<b>LOAD...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
