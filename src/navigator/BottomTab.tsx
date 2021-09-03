import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from '../screens/ListScreen';
import SearchScreen from '../screens/SearchScreen';
import MyTeam from '../screens/MyTeam';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'rgba(64, 64, 52, 1)'
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'rgba(255,255,255,0.5)',
          elevation: 0,
          borderTopWidth: 0,
          zIndex:999
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
        },
        tabBarInactiveTintColor:colors.secondary,
        tabBarActiveTintColor: colors.ligth,
        tabBarHideOnKeyboard:true
      }}
    >
      <Tab.Screen
        name="Lista"
        component={ListScreen}
        options={{
          tabBarIcon: () => <Icon name="list-outline" size={30} color={colors.secondary}/> // Falta el color
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={SearchScreen}
        options={{
          tabBarIcon: () => <Icon name="search-circle-outline" size={30} color={colors.secondary}/> // Falta el color
        }}
      />
      <Tab.Screen
        name="Mi equipo"
        component={MyTeam}
        options={{
          tabBarIcon: () => <Icon name="skull-outline" size={30} color={colors.secondary}/> // Falta el color
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator