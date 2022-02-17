/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';

import {ErrorBoundary} from './components/ErrorBoundary';
import {NavigationController} from './navigation/NavigationController';
import {AuthProvider} from './context/AuthContext';

const queryClient = new QueryClient();

function ReactQueryWrapper({children}: {children: React.ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ReactQueryWrapper>
        <AuthProvider>
          <NavigationContainer>
            <NavigationController />
          </NavigationContainer>
        </AuthProvider>
      </ReactQueryWrapper>
    </ErrorBoundary>
  );
}

export default App;
