import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom/dist';

function SharedLayout() {
  return (
    <div>
      <Suspense fallback={<b>LOAD...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
