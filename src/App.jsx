import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom/dist';
import { useDispatch } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';

import SharedLayout from 'components/SharedLayout';
import Diary from 'pages/Diary';
import Exercises from 'pages/Exercises';
import Params from 'pages/Params';
import Products from 'pages/Products';
import Profile from 'pages/Profile';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Welcome from 'pages/Welcome';
import Page404 from 'components/Page404';

import { refreshUser } from 'redux/auth/operations';

// const Welcome = lazy(() => import('pages/Welcome'));
// const Diary = lazy(() => import('pages/Diary'));
// const SharedLayout = lazy(() => import('components/SharedLayout'));
// const SignUp = lazy(() => import('pages/SignUp'));
// const SignIn = lazy(() => import('pages/SignIn'));
// const Products = lazy(() => import('pages/Products'));
// const Exercises = lazy(() => import('pages/Exercises'));
// const Params = lazy(() => import('pages/Params'));
// const Profile = lazy(() => import('pages/Profile'));
// const Page404 = lazy(() => import('components/Page404'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Welcome />} />
          <Route
            path="/singin"
            element={<PublicRoute redirectto="/diary" component={SignIn} />}
          />
          <Route
            path="/singup"
            element={<PublicRoute redirectto="/params" component={SignUp} />}
          />
          <Route
            path="/diary"
            element={<PrivateRoute redirectto="/" component={Diary} />}
          />
          <Route
            path="/exercises"
            element={<PrivateRoute redirectto="/" component={Exercises} />}
          />
          <Route
            path="/params"
            element={<PrivateRoute redirectto="/" component={Params} />}
          />
          <Route
            path="/products"
            element={<PrivateRoute redirectto="/" component={Products} />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute redirectto="/" component={Profile} />}
          />

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
};
