import React from 'react'
import { View, Text } from 'react-native'

export default ({ desc, estimateAt, doneAt }) => {
   return (
    <View>
      <Text>{ desc }</Text>
      <Text>{ estimateAt + "" }</Text>
      <Text>{ doneAt + "" }</Text>
    </View>
  )
}