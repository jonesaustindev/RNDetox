import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAuth} from '../context/AuthContext';
import {Home} from '../screens/Home';
import {Settings} from '../screens/Settings';
import {Auth} from '../screens/Auth';
import {Splash} from '../components/Splash';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Auth} />
    </Stack.Navigator>
  );
}

export function NavigationController() {
  const {isLoadingUser, isSignedIn} = useAuth();

  if (isLoadingUser) {
    return <Splash />;
  }

  if (isSignedIn) {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
  }

  return <AuthStack />;
}
