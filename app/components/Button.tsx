import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

interface RNTestButtonProps {
  text: string;
  testID?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
}

export function RNTestButton({
  text,
  testID,
  onPress,
  buttonStyle,
  textStyle,
}: RNTestButtonProps) {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: '#A267AC',
          borderRadius: 6,
          height: 52,
          justifyContent: 'center',
          alignItems: 'center',
        },
        buttonStyle ? {...buttonStyle} : null,
      ]}>
      <Text
        style={[
          {fontSize: 18, color: '#ffffff'},
          textStyle ? {...textStyle} : null,
        ]}>
        {text && text}
      </Text>
    </TouchableOpacity>
  );
}
