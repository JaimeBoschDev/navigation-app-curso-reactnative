import {Authstate} from './AuthContext';

type AutAccion =
  | {type: 'SignIn'}
  | {type: 'changeIconFav'; payload: string}
  | {type: 'logOut'}
  | {type: 'setUserName'; payload: string};

export const authReducer = (state: Authstate, accion: AutAccion): Authstate => {
  switch (accion.type) {
    case 'SignIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-name-yet',
      };
    case 'changeIconFav':
      return {
        ...state,
        favoriteIcon: accion.payload,
      };
    case 'logOut':
      return {
        ...state,
        favoriteIcon: undefined,
        username: undefined,
        isLoggedIn: false,
      };
    case 'setUserName':
      return {
        ...state,
        username: accion.payload,
      };
    default:
      return state;
  }
};
