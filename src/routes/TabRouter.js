import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './router';

import Base from './../screens/Base/Base.js';
import User from './../screens/User/User.js';

const TabRouter = TabNavigator({
  Home: {
    screen: Home
  },
  User: {
    screen: User
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    labelStyle: {
      marginBottom: 4,
      fontSize: 12
    },
    showLabel: false,
    activeTintColor: '#e91e63',
  },
  swipeEnabled: true,

});

User.navigationOptions = {
  showLabel: false,
  tabBarIcon: ({tintColor}) => (
    <Image
        source={require('../assets/images/user_icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
    />
  ),

};
Home.navigationOptions = {
  showLabel: false,
  tabBarIcon: ({tintColor}) => (
    <Image
        source={require('../assets/images/iota.png')}
        style={[styles.icon, {tintColor: tintColor}]}
    />
  ),
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
})
export default TabRouter;
