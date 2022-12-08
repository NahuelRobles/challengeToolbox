/** @format */
import React from 'react';

jest.mock('react-native-video-controls', () => {
  const { View } = require('react-native');
  return {
    VideoPlayer: () => <View />,
  }; 
});

jest.mock('@react-native-async-storage/async-storage', () => {
  const getAllKeys = jest.fn();
  const multiGet = jest.fn();
  const clear = jest.fn();
  const setItem = jest.fn();
  const removeItem = jest.fn();

  return {
    AsyncStorage: () => ({
      getAllKeys,
      multiGet,
      clear,
      setItem,
      removeItem, 
    }),
  };
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.setTimeout(500);

global.setImmediate = jest.useRealTimers;

