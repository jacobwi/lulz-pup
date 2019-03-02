import React, { Component } from 'react'
import { Text, Animated, View, StyleSheet, Image, Alert } from 'react-native'
import * as Colors from '../config/Colors';
import Logo from '../../assets/galaxy.png';
import RoundedButton from '../components/buttons/RoundedButton';



export default class GuestScreen extends Component {
  onLogInPressed = () => {
    alert('Login pressed');
  }
  onSignupPressed = () => {
    alert('Sign up pressed');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={Logo} />
          <Text style={styles.welcome}>Welcome To Lulz Pup!</Text>
        </View>
        <View style={styles.bottom}>
          <RoundedButton text="Login" textColor='white' backgroundColor='transparent' borderColor="white" handleOnPress={this.onLogInPressed}/>
          <RoundedButton text="Signup" textColor='white' backgroundColor='#311b92' handleOnPress={this.onSignupPressed}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: `${Colors.GuestBackground}`,
      padding: 20
    },
    top: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: 120,
      justifyContent: 'space-between'
    },
    welcome: {
      fontSize: 20,
      letterSpacing: 3,
      color: `${Colors.GuestText}`,

    },
    bottom: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      display: 'flex'
    }
});
  