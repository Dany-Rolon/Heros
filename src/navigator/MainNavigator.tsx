import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTab';
import HeroDetails from '../screens/HeroDetails';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Details" component={HeroDetails} />
    </Stack.Navigator>
  );
}

export default MainNavigator;