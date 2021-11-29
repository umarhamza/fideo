import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ContactsScreen from './src/screens/ContactsScreen';
import CallingScreen from './src/screens/CallingScreen';
import InComingCallScreen from './src/screens/IncomingCallScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <InComingCallScreen />
    </>
  );
}
