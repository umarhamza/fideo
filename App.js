import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ContactsScreen from './src/screens/ContactsScreen';
import OutgoingCallingScreen from './src/screens/OutgoingCallingScreen';
import InComingCallScreen from './src/screens/IncomingCallScreen';
import CurrentCallScreen from './src/screens/CurrentCallScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <CurrentCallScreen />
    </>
  );
}
