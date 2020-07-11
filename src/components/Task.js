import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import commonStyles from '../commonStyles';

export default ({ desc, estimateAt, doneAt }) => {
  const doneOrNotStyle = doneAt !== null ? { textDecorationLine: 'line-through' } : {}; 

  return (
    <View style={styles.container} >
      <View style={styles.checkContainer} >
        {getCheckView(doneAt)}
      </View>
      <View>
        <Text style={[ styles.desc, doneOrNotStyle ]} >{desc}</Text>
        <Text>{estimateAt + ""}</Text>
      </View>
    </View>
  )
}

function getCheckView(doneAt) {
  if (doneAt !== null) {
    return (
      <View style={styles.done} >
        <Icon name='check' size={ 20 } color='#fff' />
      </View>
    )
  }
  return <View style={styles.pending}/>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#aaa',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pending: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#555',
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: '#4d7031',
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 20,
  }
});