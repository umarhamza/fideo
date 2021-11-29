import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import bg from '../../../assets/images/ios_bg.jpeg';

const InComingCallScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.root} resizeMode='cover'>
    <Text style={styles.label}>Incoming Fideo from...</Text>
      <Text style={styles.name}>Umar</Text>

      <View style={[styles.row, { marginTop: 'auto' }]}>
        <View style={styles.iconContainer}>
          <Ionicons name='alarm' size={30} color={'white'} />
          <Text style={styles.iconText}>Remind me</Text>
        </View>
        <View style={styles.iconContainer}>
          <Entypo name='message' size={30} color={'white'} />
          <Text style={styles.iconText}>Message</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <View style={styles.iconButtonContainer}>
            <Feather name='x' size={40} color={'white'} />
          </View>
          <Text style={styles.iconText}>Decline</Text>
        </View>
        <View style={styles.iconContainer}>
          <View
            style={[styles.iconButtonContainer, { backgroundColor: '#147efb' }]}
          >
            <Feather name='check' size={40} color={'white'} />
          </View>
          <Text style={styles.iconText}>Accept</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#001e46',
    paddingBottom: 60,
  },
  name: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
  },
  label: {
    color: '#fff',
    marginTop: 80,
    marginBottom: 15,
    fontSize: 25,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  iconText: {
    color: '#fff',
    marginTop: 10,
  },
  iconButtonContainer: {
    backgroundColor: '#fc3d39',
    padding: 15,
    borderRadius: 50,
    margin: 10,
  },
});

export default InComingCallScreen;
