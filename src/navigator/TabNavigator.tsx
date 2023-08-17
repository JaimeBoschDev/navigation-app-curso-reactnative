import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {StackNavigator} from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab1Screen} from '../screens/Tab1Screen';
import {colores} from '../theme/appTehem';
import {Platform, Text} from 'react-native';
import {TopTabNavigator} from './TopTabNavigator';

export const TabNavigator = () => {
  return Platform.OS == 'ios' ? <TabNavigatorIOS /> : <TabNavigatorAndroid />;
};

const TabNavigatorAndroid = () => {
  const BottomTabAndroid = createMaterialBottomTabNavigator();
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'snow-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'star-outline';
              break;
            case 'Stack':
              iconName = 'skull-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Tab 1'}}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="TopTabNavigator"
        options={{title: 'TopTabNavigator'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="Stack"
        options={{title: 'Stack-A'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabNavigatorIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {fontSize: 15},
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'snow-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'star-outline';
              break;
            case 'Stack':
              iconName = 'skull-outline';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab 1'}}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="TopTabNavigator"
        options={{title: 'TopTabNavigator'}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="Stack"
        options={{title: 'Stack-y'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
