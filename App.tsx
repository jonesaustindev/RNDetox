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
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';

import {ErrorBoundary} from './app/components/ErrorBoundary';
import {Groceries} from './app/screens/Groceries';

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
        <SafeAreaView style={styles.flex}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}>
            <Groceries />
          </ScrollView>
        </SafeAreaView>
      </ReactQueryWrapper>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
