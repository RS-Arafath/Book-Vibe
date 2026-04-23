import { createBrowserRouter, RouterProvider } from 'react-router';
import { Outlet } from 'react-router';
import MainLayOut from '../Layout/MainLayOut';
import Books from '../Pages/Books/Books';
import Homepage from '../Pages/HomePage/Homepage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import BookDetails from '../Pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,

    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'books',
        element: <Books />,
      },
      {
        path: '/bookDetails/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json'),
      },
      {
        path: 'signUp',
        element: <SignUp />,
      },
      {
        path: 'signIn',
        element: <SignIn />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
