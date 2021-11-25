import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ContactsScreen from './src/screens/ContactsScreen';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ContactsScreen />
    </SafeAreaView>
  );
}
