import React,{ Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import CryptoContainer from './../../components/CryptoContainer.js';
import  Card  from './../../components/card.js';
import  Header  from './../../components/header.js';

export default class Detail extends Component {
  render() {
    return(
      <View style= {styles.container}>
        <Text> correct </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 55
  }
})
