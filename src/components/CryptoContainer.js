import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class CryptoContainer extends Component {

  componentDidMount() {

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
