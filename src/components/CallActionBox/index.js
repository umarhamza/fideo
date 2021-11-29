import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CallActionBox = () => {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  const onReverseCamera = () => {
    console.warn('onReverseCamera');
  };
  const onToggleCamera = () => {
    setIsCameraOn((currentValue) => !currentValue);
  };
  const onToggleMicrophone = () => {
    setIsMicOn((currentValue) => !currentValue);
  };
  const onHangup = () => {
    console.warn('onHangup');
  };

  return (
    <View style={styles.buttonsContainer}>
      <Pressable onPress={onReverseCamera} style={styles.iconButton}>
        <Ionicons name='ios-camera-reverse' size={30} color={'white'} />
      </Pressable>
      <Pressable onPress={onToggleCamera} style={styles.iconButton}>
        <MaterialCommunityIcons
          name={isCameraOn ? 'camera-off' : 'camera'}
          size={30}
          color={'white'}
        />
      </Pressable>
      <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
        <MaterialCommunityIcons
          name={isMicOn ? 'microphone-off' : 'microphone'}
          size={30}
          color={'white'}
        />
      </Pressable>
      <Pressable
        onPress={onHangup}
        style={[styles.iconButton, { backgroundColor: 'red' }]}
      >
        <MaterialCommunityIcons name='phone-hangup' size={30} color={'white'} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: '#333',
    padding: 20,
    paddingBottom: 45,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  iconButton: {
    backgroundColor: '#8e8e93',
    padding: 15,
    borderRadius: 50,
  },
});

export default CallActionBox;
