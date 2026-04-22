import { createBrowserRouter } from 'react-router';
import MainLayOut from '../Layout/MainLayOut';
import Books from '../Pages/Books/Books';
import Homepage from '../Pages/HomePage/Homepage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'books',
        element: <Books />,
      },
    ],
  },
  {
    path: 'signUp',
    element: <SignUp />,
  },
  {
    path: 'signIn',
    element: <SignIn />,
  },
]);
