import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import * as Colors from '../config/Colors';
import Logo from '../../assets/galaxy.png';
import UnderlineTextField from '../components/textfield/UnderlineTextField';
import RoundedButton from '../components/buttons/RoundedButton';
import NextButton from '../components/buttons/NextButton';

export default class LoginScreen extends Component {

  onSubmit = () => {
    alert("Submit pressed")
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={Logo} />
          <Text style={styles.welcome}>Login</Text>
        </View>
        <View style={styles.form}>
          <UnderlineTextField
            keyboardType='email-address'
            placeholder="Email Address"
          />
          <UnderlineTextField
            keyboardType='default'
            placeholder="Password"
          />
        </View>
        <NextButton style={styles.loginButton}
          handleOnPress={this.onSubmit}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {

    backgroundColor: `${Colors.GuestBackground}`,
    display: 'flex',
    flex: 1,
    padding: 20
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 70,
    justifyContent: 'space-between'
  },
  welcome: {
    fontSize: 20,
    letterSpacing: 3,
    color: `${Colors.GuestText}`,
    fontWeight: '300',
    marginBottom: 40,
  },
  form: {
    marginTop: 40 
  },
  loginButton: {
    position: 'absolute',
    bottom: 0,
    right: 0
  }
})