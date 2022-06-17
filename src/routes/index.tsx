import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './BottomTab';
import { Profile } from '../screens/Profile';
import { SignIn } from '../screens/SignIn';
import { Details } from '../screens/HomePage/details';
import { AddFarm } from '../screens/Farm/AddFarm';
import { ListAnimalType } from '../screens/Animal/ListAnimalType';
const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen
          name="SignIn"
          component={SignIn}
        />
        <Screen
          name="Profile"
          component={Profile}
        />
        <Screen
          name="HomePage"
          component={Tabs}
        />
        <Screen
          name="Details"
          component={Details}
        />
        <Screen
          name="AddFarm"
          component={AddFarm}
        />
        <Screen
          name="ListAnimalType"
          component={ListAnimalType}
        />
      </Navigator>
    </NavigationContainer>
  )
}