
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import MainLayOut from "../Layout/MainLayOut";
import Books from "../Pages/Books/Books";
import Homepage from "../Pages/HomePage/Homepage";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: '/books',
        Component: Books,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>
   
  }, {
    path: "signUp",
    Component:SignIn
  }, {
    path: "signIn",
    Component: SignUp
  }
]);