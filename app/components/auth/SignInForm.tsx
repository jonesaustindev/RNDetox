import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {RNTestButton} from '../Button';

const BUTTON_TEXT = 'Sign In';

interface SignInFormProps {
  testID?: string;
  handleSignIn: (user: User) => Promise<void>;
}

export function SignInForm({
  testID = 'signInForm',
  handleSignIn,
}: SignInFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      return;
    }
    handleSignIn({email, password});
  };

  return (
    <View testID={testID} style={{width: '100%'}}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 6,
          borderColor: '#c5c5c5',
          height: 40,
          justifyContent: 'center',
          paddingHorizontal: 12,
          marginBottom: 16,
        }}>
        <TextInput
          testID="signInEmailInput"
          value={email}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 6,
          borderColor: '#c5c5c5',
          height: 40,
          justifyContent: 'center',
          paddingHorizontal: 12,
          marginBottom: 48,
        }}>
        <TextInput
          testID="signInPasswordInput"
          value={password}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>
      <RNTestButton
        text={BUTTON_TEXT}
        testID="signInSubmitButton"
        onPress={handleSubmit}
      />
    </View>
  );
}
