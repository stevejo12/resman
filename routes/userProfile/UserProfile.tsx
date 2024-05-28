import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text>UserProfile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserProfile