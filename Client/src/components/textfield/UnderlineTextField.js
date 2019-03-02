import React, { Component } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types';
import * as Colors from '../../config/Colors';

export default class UnderlineTextField extends Component {
    render() {
    const { keyboardType, placeholder } = this.props;
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor='white'
                style={[{}, styles.text]}
                keyboardType='email-address'
                autoFocus={true}
                autoCorrect={false}
                underlineColorAndroid="transparent"
            />
        </View>
    )
  }
}

UnderlineTextField.propTypes = {
    handleType: PropTypes.func,
    keyboardType: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        borderBottomWidth: 1,
        paddingTop: 5,
        borderBottomColor: 'white',
        marginTop: 20
    },
    text: {
        color: Colors.GuestText
    }
})