
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import MainLayOut from "../Layout/MainLayOut";
import Books from "../Pages/Books/Books";
import Homepage from "../Pages/HomePage/Homepage";

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
   
  },
]);