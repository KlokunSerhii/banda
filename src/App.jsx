import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom/dist';
import { useDispatch } from 'react-redux';

import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';
import { refreshUser } from 'redux/auth/operations';
import Loader from 'components/Loader';

const Welcome = lazy(() => import('pages/Welcome'));
const Diary = lazy(() => import('pages/Diary'));
const SharedLayout = lazy(() => import('components/SharedLayout'));
const SignUp = lazy(() => import('pages/SignUp'));
const SignIn = lazy(() => import('pages/SignIn'));
const Products = lazy(() => import('pages/Products'));
const Exercises = lazy(() => import('pages/Exercises'));
const Params = lazy(() => import('pages/Params'));
const Profile = lazy(() => import('pages/Profile'));
const ExercisesSubcategoriesList = lazy(() =>
  import('components/exercises/ExercisesSubcategoriesList')
);
const ExercisesList = lazy(() => import('components/exercises/ExercisesList'));
const Page404 = lazy(() => import('components/Page404'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Welcome />} />
          <Route
            path="singin"
            element={<PublicRoute redirectto="/diary" component={SignIn} />}
          />
          <Route
            path="singup"
            element={<PublicRoute redirectto="/params" component={SignUp} />}
          />
          <Route
            path="diary"
            element={<PrivateRoute redirectto="/" component={Diary} />}
          />

          <Route
            path="exercises"
            element={<PrivateRoute redirectto="/" component={Exercises} />}
          >
            <Route index element={<Navigate to="bodyparts" />} />
            <Route path=":category" element={<ExercisesList />} />
            <Route
              path=":category/:subcategory"
              element={<ExercisesSubcategoriesList />}
            />
          </Route>
          <Route
            path="params"
            element={<PrivateRoute redirectto="/" component={Params} />}
          />
          <Route
            path="products"
            element={<PrivateRoute redirectto="/" component={Products} />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute redirectto="/" component={Profile} />}
          />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
