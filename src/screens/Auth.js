import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity, Platform } from 'react-native';

import backgroundImage from '../../assets/imgs/login.jpg';
import commonStyles from '../commonStyles';

export default class Auth extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: true,
  }

  render() {
    return (
      <ImageBackground style={styles.background} source={backgroundImage} >
        <Text style={styles.title} >Tasks</Text>
        <View style={ styles.formContainer } >
          <Text style={ styles.subTitle } >{ this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados' }</Text>
          { this.state.stageNew && (
            <TextInput
              placeholder='Nome'
              value={ this.state.name }
              style={ styles.input }
              onChangeText={ name => this.setState({ name }) }
            />  
          ) }
          <TextInput
            placeholder='E-mail'
            value={ this.state.email }
            style={ styles.input }
            onChangeText={ email => this.setState({ email }) }
          />
          <TextInput
            placeholder='Senha'
            secureTextEntry={ true }
            value={ this.state.password }
            style={ styles.input }
            onChangeText={ password => this.setState({ password }) }
          />
          { this.state.stageNew && (
            <TextInput
              placeholder='Confirmar senha'
              secureTextEntry={ true }
              value={ this.state.confirmPassword }
              style={ styles.input }
              onChangeText={ confirmPassword => this.setState({ confirmPassword }) }
            />  
          ) }
          <TouchableOpacity>
            <View style={ styles.button } >
              <Text style={ styles.buttonText } >{ this.state.stageNew ? 'Registrar' : 'Entrar' }</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secundary,
    fontSize: 70,
    marginBottom: 10,
  },
  subTitle: {
    fontFamily: commonStyles.fontFamily,
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  formContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    width: '90%',
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: Platform.OS === 'ios' ? 15 : 10,
  },
  button: {
    backgroundColor: '#080',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: commonStyles.fontFamily,
    color: '#fff',
    fontSize: 20,
  }
});