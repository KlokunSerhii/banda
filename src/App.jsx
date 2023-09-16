import { Route, Routes } from 'react-router-dom/dist';

import Diary from 'pages/Diary';
import Exercices from 'pages/Exercices';
import Params from 'pages/Params';
import Products from 'pages/Products';
import Profile from 'pages/Profile';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Welcome from 'pages/Welcome';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';

export const App = () => {
  return (
    <Routes>
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
          element={<PrivateRoute redirectto="/" component={Exercices} />}
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
        <Route path="*" element={<div>NotFound </div>} />
    </Routes>
  );
};
