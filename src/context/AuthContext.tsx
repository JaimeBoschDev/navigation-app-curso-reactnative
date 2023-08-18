import {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

export interface Authstate {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: Authstate = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: Authstate;
  signIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  logOut: () => void;
  changeUserName: (userName: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'SignIn'});
  };

  const logOut = () => {
    dispatch({type: 'logOut'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeIconFav', payload: iconName});
  };

  const changeUserName = (userName: string) => {
    dispatch({type: 'setUserName', payload: userName});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        logOut,
        changeUserName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
