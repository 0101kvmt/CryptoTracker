import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import * as actions from './../../actions/FetchCrypto.js';
import CryptoContainer from './../../components/CryptoContainer.js';
import  Card  from './../../components/card.js';
import  Header  from './../../components/header.js';


export default class Base extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Header />
        <Text>REAL-TIME Crypto</Text>
        <Text>REAL-TIME HODLS</Text>
        <CryptoContainer />
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
