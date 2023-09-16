import { Route, Routes } from 'react-router-dom/dist';
import SharedLayout from 'components/SharedLayout';
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
import { ChakraProvider, Container } from '@chakra-ui/react';


export const App = () => {
  return (
    <Container bg="#040404">
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
              element={
                <PrivateRoute redirectto="/diary" component={<Diary />} />
              }
            />
            <Route
              path="/exercises"
              element={
                <PrivateRoute redirectto="/exercises" component={<Exercices />} />
              }
            />
            <Route
              path="/params"
              element={
                <PrivateRoute redirectto="/params" component={<Params />} />
              }
            />
            <Route
              path="/products"
              element={
                <PrivateRoute redirectto="/products" component={<Products />} />
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute redirectto="/profile" component={<Profile />} />
              }
            />
            <Route path="*" element={<div>NotFound </div>} />
          </Route>
        </Routes>
      </ChakraProvider>
    </Container>
  );
};
