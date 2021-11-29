import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CallActionBox from '../../components/CallActionBox';

const CurrentCallScreen = () => {
    return (
      <View style={styles.root}>
        <View style={styles.cameraPreview} />
        <CallActionBox />
      </View>
    );
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: 'lightblue',
  },
  cameraPreview: {
    width: 100,
    height: 150,
    backgroundColor: '#ffff6e',
    position: 'absolute',
    right: 15,
    top: 100,
    borderRadius: 10,
  },
});

export default CurrentCallScreen
