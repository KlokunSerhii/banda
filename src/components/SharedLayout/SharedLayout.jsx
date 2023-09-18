import Loader from 'components/Loader';
import Header from 'components/layout/Header';
import { useAuth } from 'hooks';
import { Outlet } from 'react-router-dom/dist';

function SharedLayout() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header />
      {isLoggedIn ? (
        <Loader />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
}

export default SharedLayout;
