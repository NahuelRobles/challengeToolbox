/** @format */

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  loadingContent: (height, width) => ({
    height: height,
    width: width,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignContent: 'center',
  }),
  imageContent: (isLoadingImage) => ({
    position: isLoadingImage ? 'absolute' : 'relative',
  }),
  image: (height, width, isLoadingImage) => ({
    height: height,
    width: width,
    opacity: isLoadingImage ? 0 : 1,
  }),
  textContent: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 10,
    width: '100%',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#D05237',
    backgroundColor: '#B85A47',
    opacity: 0.8,
  },
  content: {
    padding: 10,
  },
  title: {
    alignSelf:'center', 
    textTransform:'capitalize', 
    fontSize: 15, 
    padding: 10,
    color: 'white',
    fontWeight:'300'
  },
  container: {
    flex: 1,
  },
  textType: {
    alignSelf:'center', 
    textTransform:'capitalize', 
    fontSize: 18, 
    fontWeight:'700'
  }
});
