import Login from '../login/Login';
import SignUp from '../auth/SignUp';
import Success from '../success/Success';

export const routes = {
  SIGNUP: {
    path: '/signup',
    component: SignUp,
    linkTo: () => '/signup'
  },
  LOGIN: {
    path: '/',
    component: Login,
    linkTo: () => '/'
  },
  SUCCESS: {
    path: '/success',
    component: Success,
    linkTo: () => '/'
  },
};
