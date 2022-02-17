import React from 'react';
import {Text, View} from 'react-native';

interface ErrorProps {
  children: React.ReactNode;
}
interface ErrorState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  constructor(props: any) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(_error: any) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true, error: _error};
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log({error, errorInfo});
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }

    return this.props.children;
  }
}
