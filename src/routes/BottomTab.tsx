import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../styles/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { HomePage } from '../screens/HomePage';
import { Sync } from '../screens/Sync';
import { Vaccines } from '../screens/Vaccines';
import { Animal } from '../screens/Animal';
import { Farm } from '../screens/Farm';
import { Profile } from '../screens/Profile';
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
        component={Animal}
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
        component={Farm}
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
        component={Vaccines}
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
        component={Sync}
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

      <Tab.Screen name="Perfil"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarActiveTintColor: 'green',
          headerTransparent: true,
          title: '',
          tabBarIcon: () => (
            <FontAwesome name="user" size={25} color={theme.colors.secondary} />
          )
        }}
      />
    </Tab.Navigator>
  );
}