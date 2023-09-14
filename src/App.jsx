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

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Welcome />} />
        <Route path="/singin" element={<SignIn />} />
        <Route path="/singup" element={<SignUp />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/exercices" element={<Exercices />} />
        <Route path="/params" element={<Params />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<div>NotFound </div>} />
      </Route>
    </Routes>
  );
};
