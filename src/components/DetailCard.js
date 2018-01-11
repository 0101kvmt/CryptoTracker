import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { images } from './../utils/CoinIcons.js'


  const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 2,
        marginBottom: 20,
        backgroundColor: '#00FFFF',
        borderRadius: 10,
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: "flex",
        justifyContent: 'center',
        alignItems:'center',
        marginBottom: 15
    },
    detailRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    seperator: {
        marginTop: 10,
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",
    },
    image: {
        width: 35,
        height: 35,
    },
    moneySymbol: {
        fontWeight: "bold",
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    }
  })


  const {
      container,
      image,
      moneySymbol,
      upperRow,
      coinSymbol,
      coinName,
      coinPrice,
      statisticsContainer,
      seperator,
      percentChangePlus,
      percentChangeMinus,
      detailRow
  } = styles;

const DetailCard = ({icon, name, usd, percent_change_24h, percent_change_7d, pressIcon }) => {

  return (
    <View style={container}>
      <View style={upperRow}>
        <TouchableOpacity onPress={pressIcon}>
          <Image
              style={styles.image}
              source={{ uri: images[icon]}}
          />
        </TouchableOpacity>

      </View>
      <View style={detailRow}>
        <Text style={coinSymbol}>{icon}</Text>
        <Text style={seperator}>|</Text>
        <Text style={coinName}>{name}</Text>
        <Text style={coinPrice}>{usd}
            <Text style={moneySymbol}> $ </Text>
        </Text>
      </View>
      <View style={statisticsContainer}>

          <Text>24h:
               <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_24h} % </Text>
          </Text>
          <Text>7d:
              <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_7d} % </Text>
          </Text>

      </View>

    </View>
  )
}

export default DetailCard;
