import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

// Define the type for your App component's props.
// Since it doesn't take any props currently, it can be an empty object.
interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <AppNavigator />
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
};

export default App;