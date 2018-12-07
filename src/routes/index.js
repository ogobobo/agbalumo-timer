/* eslint no-unused-vars: 0 */
import Home from './home/Home';

/**
 * Global Routes
 */
export default [
  {
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
    ],
  },
];
