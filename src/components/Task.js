import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import Swipleable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import 'moment/locale/pt-br';

import commonStyles from '../commonStyles';

export default ({ id, desc, estimateAt, doneAt, toggleTask }) => {
  const doneOrNotStyle = doneAt !== null ? { textDecorationLine: 'line-through' } : {};
  
  const date = doneAt ? doneAt : estimateAt;
  const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM');

  const getRightContent = () => {
    return (
      <TouchableOpacity style={ styles.right } >
        <Icon name='trash' size={ 30 } color='#fff' />
      </TouchableOpacity>
    )
  }

  return (
    <Swipleable renderRightActions={ getRightContent } >
      <View style={styles.container} >
        <TouchableWithoutFeedback onPress={ () => toggleTask(id) } >
          <View style={styles.checkContainer} >
            { getCheckView(doneAt) }
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Text style={[ styles.desc, doneOrNotStyle ]} >{desc}</Text>
          <Text style={ styles.date } >{formattedDate}</Text>
        </View>
      </View>
    </Swipleable>
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
  },
  date: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
    fontSize: 15,
  },
  right: {
    backgroundColor: '#f00',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  }
});