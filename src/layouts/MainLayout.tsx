import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AnalyticsPage, HomePage, RoutinesPage, SettingsPage } from 'pages';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function MainLayout() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Routines" component={RoutinesPage} />
        <Tab.Screen name="Analytics" component={AnalyticsPage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
