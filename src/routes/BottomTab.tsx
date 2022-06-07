import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../styles/theme';
import { HomePage } from '../screens/HomePage'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function BottomTabs() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Resumo"
        component={HomePage}
        options={{
          tabBarLabel: 'Resumo',
          tabBarActiveTintColor: 'green',
          headerTransparent: true,
          title: '',
          tabBarIcon: () => (
            <FontAwesome name="file-text" size={23} color={theme.colors.secondary} />
          )
        }}
      />

      <Tab.Screen name="Meus Animais"
        component={HomePage}
        options={{
          tabBarLabel: 'Meus Animais',
          tabBarActiveTintColor: 'green',
          headerTransparent: true,
          title: '',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account-cowboy-hat" size={25} color={theme.colors.secondary} />
          )
        }}
      />

      <Tab.Screen name="Meus Campos"
        component={HomePage}
        options={{
          tabBarLabel: 'Meus Campos',
          tabBarActiveTintColor: 'green',
          headerTransparent: true,
          title: '',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home-group" size={25} color={theme.colors.secondary} />
          )
        }}
      />

      <Tab.Screen name="Vacinas"
        component={HomePage}
        options={{
          tabBarLabel: 'Vacinas',
          tabBarActiveTintColor: 'green',
          headerTransparent: true,
          title: '',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="vacuum" size={25} color={theme.colors.secondary} />
          )
        }}
      />

      <Tab.Screen name="Sincronizar"
        component={HomePage}
        options={{
          tabBarLabel: 'Sincronizar',
          tabBarActiveTintColor: 'green',
          headerTransparent: true,
          title: '',
          tabBarIcon: () => (
            <Ionicons name="ios-sync-outline" size={25} color={theme.colors.secondary} />
          )
        }}
      />
    </Tab.Navigator>
  );
}