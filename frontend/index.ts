import { registerRootComponent } from 'expo';

// Import your App component from App.tsx
// TypeScript will correctly resolve './App' to './App.tsx'
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);