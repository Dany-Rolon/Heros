import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from '../screens/ListScreen';
import MyTeam from '../screens/MyTeam';
import Icon from 'react-native-vector-icons/Ionicons'
import UserInfoScren from '../screens/UserInfoScren';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#171717',
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
        },
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: '#A3E635',
        tabBarHideOnKeyboard: true
      }}
      sceneContainerStyle={{
        backgroundColor:'#171717'
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