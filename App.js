import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'

import { CryptoContainer } from './src/components'
import { Header } from './src/components'
import Store from './src/store'
import Router from './src/router'

export default class App extends React.Component {
  render() {
    return (
      <Provider store ={Store}>
        <Router />
      </Provider>
    );
  }
}
