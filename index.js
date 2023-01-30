/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/Router';
import { name as appName } from './app.json';

// i18n Import
import './src/common/locales/i18n';

AppRegistry.registerComponent(appName, () => App);
