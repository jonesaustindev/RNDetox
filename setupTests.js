import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

// Libraries
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
