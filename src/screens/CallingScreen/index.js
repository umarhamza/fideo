import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const CallingScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Umar</Text>
        <Text style={styles.phone}>Ringing: +220 343 0034</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.iconButton}>
          <Ionicons name='ios-camera-reverse' size={30} color={'white'} />
        </View>
        <View style={styles.iconButton}>
          <MaterialCommunityIcons name='camera-off' size={30} color={'white'} />
        </View>
        <View style={styles.iconButton}>
          <MaterialCommunityIcons
            name='microphone-off'
            size={30}
            color={'white'}
          />
        </View>
        <View style={[styles.iconButton, {backgroundColor: 'red'}]}>
          <MaterialCommunityIcons
            name='phone-hangup'
            size={30}
            color={'white'}
          />
        </View>
      </View>
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
  },
  buttons: {
    backgroundColor: '#333',
    padding: 20,
    paddingBottom: 45,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    backgroundColor: '#8e8e93',
    padding: 15,
    borderRadius: 50,
  },
});

export default CallingScreen;
