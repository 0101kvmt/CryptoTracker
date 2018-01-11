import React,{ Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import {FetchCrypto} from './../../actions/FetchCrypto'
import CryptoContainer from './../../components/CryptoContainer.js';
import  DetailCard  from './../../components/DetailCard.js';
import  Header  from './../../components/header.js';


class Detail extends Component {
  render() {
      const navName = this.props.navigation.state.params.name;
      console.log(navName);
      const detailCrypto = this.props.crypto.data.filter(c => c.name === navName)
      .map((d, i) => {
          console.log("detailed", d);
          return (
            <DetailCard
              key={i}
              name={d.name}
              icon={d.symbol}
              usd={d.price_usd}
              percent_change_24h={d.percent_change_24h}
              percent_change_7d={d.percent_change_7d}
              pressIcon={() => {this.updateParentDetail(d.name)}}
            />
          )
        }

      );

      console.log("clipto", detailCrypto);
    return(
      <View style= {styles.container}>
        <Text> correct </Text>
        {detailCrypto}
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

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }

};

export default connect(mapStateToProps, {FetchCrypto})(Detail);
