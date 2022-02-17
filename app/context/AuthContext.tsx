import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = '@user';

export interface AuthContextState {
  user: User | null;
  isLoadingUser: boolean;
  isSignedIn: boolean;
  saveUser: (_user: User) => Promise<void>;
  clearUser: () => void;
}

const AuthContext = createContext<AuthContextState | undefined>(undefined);

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const saveUser = async (_user: User) => {
    try {
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(_user));
      setIsSignedIn(true);
    } catch (error) {
      console.log({error});
    }
  };

  const getUser = async (): Promise<User | null | undefined> => {
    try {
      const savedUser = await AsyncStorage.getItem(USER_KEY);

      if (savedUser) {
        return JSON.parse(savedUser);
      }

      return null;
    } catch (error) {
      console.log({error});
    }
  };

  const clearUser = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY);
      setIsSignedIn(false);
    } catch (error) {
      console.log({error});
    }
  };

  const initAuthContext = async () => {
    const res = await getUser();
    if (res) {
      setUser(res);
      setIsSignedIn(true);
    }
    setIsLoadingUser(false);
  };

  useEffect(() => {
    initAuthContext();
  }, []);

  return (
    <AuthContext.Provider
      value={{user, isLoadingUser, isSignedIn, saveUser, clearUser}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export {AuthProvider, useAuth};
