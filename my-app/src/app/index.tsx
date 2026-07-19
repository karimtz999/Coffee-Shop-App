import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <Text>Coffe shop</Text>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  text: {
    fontSize: 42,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

})