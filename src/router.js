import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Base from './screens/Base/Base.js';
import Detail from './screens/Detail/Detail.js';


const Router = StackNavigator({
  Base: {
    screen: Base
  },
  Detail: {
    screen: Detail
  }
}, {
  headerMode: 'none'
});

export default Router;
