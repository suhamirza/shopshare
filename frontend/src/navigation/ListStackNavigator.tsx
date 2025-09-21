import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListsScreen from '../screens/Lists/ListsScreen';
import ListDetailScreen from '../screens/Lists/ListDetailScreen';
import CreateListScreen from '../screens/Lists/CreateListScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

// Type definition for the List Stack parameter list
export type ListStackParamList = {
  Lists: undefined;
  ListDetail: undefined;
  CreateList: undefined;
  Notifications: undefined;
};

const Stack = createNativeStackNavigator();

const ListStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Lists">
      <Stack.Screen 
        name="Lists" 
        component={ListsScreen}
        options={{ title: 'My Lists' }}
      />
      <Stack.Screen 
        name="ListDetail" 
        component={ListDetailScreen}
        options={{ title: 'List Details' }}
      />
      <Stack.Screen 
        name="CreateList" 
        component={CreateListScreen}
        options={{ title: 'Create New List' }}
      />
      <Stack.Screen 
        name="Notifications" 
        component={NotificationsScreen}
        options={{ title: 'Notifications' }}
      />
    </Stack.Navigator>
  );
};

export default ListStackNavigator;
