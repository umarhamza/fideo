import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CallActionBox from '../../components/CallActionBox';

const OutgoingCallingScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Umar</Text>
        <Text style={styles.phone}>Ringing: +220 343 0034</Text>
      </View>
      <CallActionBox />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#001e46',
    height: '100%',
  },
  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  name: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 55,
    marginBottom: 15,
  },
  phone: {
    color: '#fff',
    fontSize: 25,
  }
});

export default OutgoingCallingScreen;
