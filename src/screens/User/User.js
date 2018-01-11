import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

class User extends Component {
  render() {
    console.log("User's page")
    return(
      <View style={styles.container}>
        <Text> This is the User screen </Text>
      </View>
    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default User;
