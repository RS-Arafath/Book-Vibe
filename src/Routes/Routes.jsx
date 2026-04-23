import { createBrowserRouter } from 'react-router';
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
    element: <MainLayOut />, // Navbar এখানে আছে
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
      {
        path: 'bookDetails/:bookId',
        element: <BookDetails />,
      },
    ],
  },
  {
    path: '/signIn',
    element: <SignIn />,
  },
  {
    path: '/signUp',
    element: <SignUp />,
  },
]);
