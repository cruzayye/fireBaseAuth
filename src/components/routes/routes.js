import Login from '../login/Login';
import SignUp from '../auth/SignUp';

export const routes = {
  LOGIN: {
    path: '/',
    component: Login,
    linkTo: () => '/'
  },
  SIGNUP: {
    path: '/signup',
    component: SignUp,
    linkTo: () => '/signup'
  },
}