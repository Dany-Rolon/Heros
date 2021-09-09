import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from '../screens/ListScreen';
import SearchScreen from '../screens/SearchScreen';
import MyTeam from '../screens/MyTeam';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/colors';
import UserInfoScren from '../screens/UserInfoScren';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255, 0.6)',
          elevation: 0,
          borderWidth: 0,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
        },
        tabBarInactiveTintColor: '#21201d',
        tabBarActiveTintColor: '#dd3e11',
        tabBarHideOnKeyboard: true
      }}
    >
      <Tab.Screen
        name="My Team"
        component={MyTeam}
        options={{
          tabBarIcon: ({ color }) => <Icon name="skull-outline" size={30} color={color} />
        }}
      />
      <Tab.Screen
        name="Hero list"
        component={ListScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="list-outline" size={30} color={color} />
        }}
      />
      <Tab.Screen
        name="User"
        component={UserInfoScren}
        options={{
          tabBarIcon: ({color}) => <Icon name="person-outline" size={30} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator