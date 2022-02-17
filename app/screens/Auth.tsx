import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SignInForm} from '../components/auth/SignInForm';
import {useAuth} from '../context/AuthContext';

export function Auth() {
  const {saveUser} = useAuth();
  const handleSignIn = async (user: User) => {
    try {
      await saveUser(user);
    } catch (error) {
      console.log({error});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginBottom: 56}}>
        <Text testID="authHeader" style={{color: '#282828', fontSize: 32}}>
          Welcome back!
        </Text>
      </View>
      <SignInForm testID="authSignInForm" handleSignIn={handleSignIn} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 32,
  },
});
