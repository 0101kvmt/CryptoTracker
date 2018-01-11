import React from 'react';
import { TabNavigator } from 'react-navigation';
import Router from './router';

import Base from './../screens/Base/Base.js';
import User from './../screens/User/User.js';

const TabRouter = TabNavigator({
  Router: {
    screen: Router
  },
  User: {
    screen: User
  }
},  {tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }});

export default TabRouter
