import React from 'react';
import {StatusBar, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function Splash() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A267AC',
      }}>
      <StatusBar barStyle={'light-content'} />
      <Text style={{fontSize: 36, fontWeight: '600', color: '#ffffff'}}>
        RNTest
      </Text>
    </SafeAreaView>
  );
}
