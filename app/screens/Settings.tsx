import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RNTestButton} from '../components/Button';
import {useAuth} from '../context/AuthContext';

const BUTTON_TITLE = 'Sign Out';

export function Settings() {
  const {user, clearUser} = useAuth();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 32,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        {user?.email && (
          <Text testID="settingsUserEmail">Signed in with {user.email}</Text>
        )}
        <RNTestButton
          testID="settingsSignOutButton"
          text={BUTTON_TITLE}
          onPress={clearUser}
        />
      </View>
    </SafeAreaView>
  );
}
