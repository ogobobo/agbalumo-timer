/* eslint no-unused-vars: 0 */
import Home from './home/Home';
import Trucks from './trucks/Trucks';
import Details from './details/Details';
import Favorites from './favorites/Favorites';

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
      {
        path: '/trucks',
        exact: true,
        component: Trucks,
      },
      {
        path: '/details',
        exact: true,
        component: Details,
      },
      {
        path: '/favorites',
        exact: true,
        component: Favorites,
      },
    ],
  },
];
