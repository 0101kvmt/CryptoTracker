import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { images } from './../utils/CoinIcons.js'
const Card = (icon, name, usd, percent_change_24h, percent_change_7d) => {
  return (
    <View style={container}>
      <Image
        style={styles.image}
        source={{ uri: images[icon] }}
      />
      <Text>{icon}</Text>
      <Text>{name}</Text>
      <Text>{usd}</Text>
      <Text>{percent_change_24h}</Text>
      <Text>{percent_change_7d}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  image: {
    width: 40,
    height: 40
  },
  bold: {
    fontWeight: 'bold'
  }
})

export default Card;
