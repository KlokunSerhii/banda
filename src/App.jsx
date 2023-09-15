import { Route, Routes } from 'react-router-dom/dist';

import Diary from 'pages/Diary';
import Exercices from 'pages/Exercices';
import Params from 'pages/Params';
import Products from 'pages/Products';
import Profile from 'pages/Profile';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Welcome from 'pages/Welcome';
import SharedLayout from 'components/SharedLayout';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Welcome />} />
        <Route
          path="/singin"
          element={<PublicRoute redirectTo="/diary" component={SignIn} />}
        />
        <Route
          path="/singup"
          element={<PublicRoute redirectTo="/params" component={SignUp} />}
        />
        <Route
          path="/diary"
          element={<PrivateRoute redirectTo="/" component={Diary} />}
        />
        <Route
          path="/exercices"
          element={<PrivateRoute redirectTo="/" component={Exercices} />}
        />
        <Route
          path="/params"
          element={<PrivateRoute redirectTo="/" component={Params} />}
        />
        <Route
          path="/products"
          element={<PrivateRoute redirectTo="/" component={Products} />}
        />
        <Route
          path="/profile"
          element={<PrivateRoute redirectTo="/" component={Profile} />}
        />

        <Route path="*" element={<div>NotFound </div>} />
      </Route>
    </Routes>
  );
};
