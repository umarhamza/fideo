import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import ContactsScreen from '../src/screens/ContactsScreen';
import OutgoingCallScreen from '../src/screens/OutgoingCallScreen';
import InComingCallScreen from '../src/screens/IncomingCallScreen';
import CurrentCallScreen from '../src/screens/CurrentCallScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Contacts' component={ContactsScreen} />
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Ougoing Call' component={OutgoingCallScreen} />
            <Stack.Screen name='Incoming Call' component={InComingCallScreen} />
            <Stack.Screen name='Current Call' component={CurrentCallScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigation
