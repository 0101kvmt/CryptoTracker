import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Base from './screens/Base/Base.js';

const Router = StackNavigator({
  Base: {
    screen: Base
  }
}, {
  headerMode: 'none'
});

export default Router;
