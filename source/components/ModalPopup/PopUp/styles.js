/** @format */

import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    height: 200,
  },
  textTitle: {
    width: 200,
    textAlign: 'center',
    marginTop: 35,
    fontWeight: 'bold',
  },
  textDescription: {
    maxHeight: 50,
    padding: 8,
    textAlign: 'left',
  },
  bufferingText: {
    paddingLeft: 18,
    marginTop: 5,
  },
  notAvailable: {
    height: 150,
    justifyContent: 'center',
  },
  notAvailableText: {
    fontWeight: 'bold',
  }
});
