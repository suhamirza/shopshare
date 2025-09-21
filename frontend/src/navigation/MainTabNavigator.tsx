import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import ListStackNavigator from './ListStackNavigator';
import SettingsScreen from '../screens/SettingsScreen';

// Type definition for the Main Tab parameter list
export type MainTabParamList = {
  ListsTab: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator();

// Icon components defined outside the component to avoid React warnings
const ListsIcon = ({ color, size }: { color: string; size: number }) => (
  <Feather name="list" color={color} size={size} />
);

const SettingsIconComponent = ({ color, size }: { color: string; size: number }) => (
  <Feather name="settings" color={color} size={size} />
);

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false, // Hide labels to prevent double text
      }}
    >
      <Tab.Screen 
        name="ListsTab" 
        component={ListStackNavigator}
        options={{ 
          title: 'Lists',
          headerShown: false, // Hide header since ListStackNavigator has its own
          tabBarIcon: ListsIcon
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{ 
          title: 'Settings',
          tabBarIcon: SettingsIconComponent
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
