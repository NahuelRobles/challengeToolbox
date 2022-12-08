/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/** @format */

import React, { memo, useEffect, useState } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import { NO_INTERNET } from '~/constants';

import { styles } from './styles';

export const NetworkStatusWrapper = memo(({ children }) => {
  const [ isConnected, setConnected ] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(({ isConnected }) => {
      setConnected(isConnected);
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {!isConnected && (
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {NO_INTERNET}
          </Text>
        </View>
      )}
      <View style={styles.container}>
        {children}
        {!isConnected && <View style={styles.overlay} />}
      </View>
    </SafeAreaView>
  );
});
