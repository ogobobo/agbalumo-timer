/* eslint no-unused-vars: 0 */
import Timer from './timer/Timer';
// import Trucks from './trucks/Timer';
// import Details from './details/Details';
// import Favorites from './favorites/Favorites';

/**
 * Global Routes
 */
export default [
  {
    component: Timer,
    routes: [
      {
        path: '/',
        exact: true,
        component: Timer,
      },
      // {
      //   path: '/trucks',
      //   exact: true,
      //   component: Trucks,
      // },
      // {
      //   path: '/details',
      //   exact: true,
      //   component: Details,
      // },
      // {
      //   path: '/favorites',
      //   exact: true,
      //   component: Favorites,
      // },
    ],
  },
];
