import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomePage } from '../screens/HomePage'

const Tab = createBottomTabNavigator();

export default function BottomTabs() {

  return (
      <Tab.Navigator>
        <Tab.Screen name="Resumo"
          component={HomePage}
          options={{
            tabBarLabel: 'Resumo',
            headerTransparent:true
          }}
        />
      </Tab.Navigator>
  );
}