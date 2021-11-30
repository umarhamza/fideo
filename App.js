import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Navigation />
    </>
  );
}
