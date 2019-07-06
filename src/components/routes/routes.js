import Login from '../login/Login';
import SignUp from '../auth/SignUp';

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
}