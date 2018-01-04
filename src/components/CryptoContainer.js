import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import FetchCrypto from './../actions/FetchCrypto.js'
import Card from './card.js'
class CryptoContainer extends Component {

  componentDidMount() {
    this.props.FetchCrypto();
  }
  renderCards() {
    const crypto = this.props;
    console.log("crypto", crypto);

    return crypto.data.map((coin, i) => {
      <Card
        key={i}
        coin={coin.name}
        icon={coin.symbol}
        usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
    })
  }
  render() {

    console.log(this.props)
    return (
      <View>
        <Text> Container </Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, {FetchCrypto})(CryptoContainer)
