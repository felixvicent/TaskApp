import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({ desc, estimateAt, doneAt }) => {
   return (
    <View style={ styles.container } >
      <Text>{ desc }</Text>
      <Text>{ estimateAt + "" }</Text>
      <Text>{ doneAt + "" }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#aaa',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
  }
});