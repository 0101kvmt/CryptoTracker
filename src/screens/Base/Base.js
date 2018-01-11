import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import Config from './../../../config.json'
import * as actions from './../../actions/FetchCrypto.js';
import CryptoContainer from './../../components/CryptoContainer.js';
import  Card  from './../../components/card.js';
import  Header  from './../../components/header.js';


class Base extends Component {

  navigateDetail(card) {
    console.log(card)
    this.props.navigation.navigate('Detail', { name: card } )
  }

  render() {

    const { navigate } = this.props.navigation;
    const config = Config.testName;
    return(
      <View style={styles.container}>
        <Header />
        <TouchableHighlight>
          <Text> HI {config}</Text>
        </TouchableHighlight>
        <Text>REAL-TIME Crypto</Text>
        <Text>REAL-TIME HODLS</Text>
        <CryptoContainer navigateDetail={this.navigateDetail.bind(this)} />
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
function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
};

export default connect(mapStateToProps, {...actions})(Base);
