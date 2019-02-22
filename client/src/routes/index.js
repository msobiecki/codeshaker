import HomePage from '../views/HomePage/HomePage';
import SectionsPage from '../views/Admin/SectionsPage/SectionsPage';

const Routes = [
  // PUBLIC ROUTES
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    exact: true
  },
  // ADMIN ROUTES
  {
    path: '/admin/sections',
    name: 'AdminSectionsPage',
    component: SectionsPage,
    exact: true
  }
];

export default Routes;
