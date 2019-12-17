/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import { name as appName } from './app.json';

const store = configureStore();

const renderApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => renderApp);
