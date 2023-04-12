import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import TodoList from './pages/TodoList';
import Home from './pages/Home';
import CheckToken from './CheckToken';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'signup',
        element: (
          <CheckToken>
            <SignUp />
          </CheckToken>
        ),
      },
      {
        path: 'signin',
        element: (
          <CheckToken>
            <SignIn />
          </CheckToken>
        ),
      },
      {
        path: 'todo',
        element: (
          <CheckToken>
            <TodoList />
          </CheckToken>
        ),
      },
    ],
  },
]);

export default router;
