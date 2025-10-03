import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/store';

// Define the type for your App component's props.
// Since it doesn't take any props currently, it can be an empty object.
interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Provider store={store}> // Providing the Redux store to the app (i.e setting up the whiteboard in the office)
      <SafeAreaProvider>
        <GluestackUIProvider config={config}>
          <AppNavigator />
          <StatusBar style="auto" />
        </GluestackUIProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;