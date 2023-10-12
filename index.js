/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';

import { Main } from './src/screens/main';

if (__DEV__) {
  import('./reactron-config.js').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => Main);
