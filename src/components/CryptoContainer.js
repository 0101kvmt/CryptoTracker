import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';


import FetchCrypto from './../actions/FetchCrypto.js'
import Card from './card.js'
class CryptoContainer extends Component {

  componentDidMount() {
    this.props.FetchCrypto();
  }
  renderCards() {
    const crypton = this.props.crypto.data;
    console.log("outside", crypton)
    return
      crypton.map((c, i) => {
        console.log("console", c);
        <Card
          key={i}
          name={c.name}
          icon={c.symbol}
          usd={c.price_usd}
          percent_change_24h={c.percent_change_24h}
          percent_change_7d={c.percent_change_7d}
        />
      }


    )

  }
  render() {
    const crypto = this.props;
    const crypton = this.props.crypto.data;
    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={"Loading..."}
            textStyle={{color: '#253145'}}
            animation="fade"
          />
        </View>

      )
    }
    console.log(this.props)
    return (
      <View>
        {this.renderCards()}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, {FetchCrypto})(CryptoContainer);
