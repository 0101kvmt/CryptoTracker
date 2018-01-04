import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'

import { Header } from './src/components'
import Store from './src/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store ={Store}>
        <View style={styles.container}>
          <Header />
          <Text>REAL-TIME Crypto</Text>
          <Text>REAL-TIME HODLS</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
