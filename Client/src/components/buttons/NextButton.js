import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Colors from '../../config/Colors';

export default class NextButton extends Component {
    render() {
    const { handleOnPress } = this.props;
    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableHighlight style={styles.button}
                onPress={handleOnPress}  disabled={false}
                underlayColor={Colors.Highlight}
            >
            <Icon name="angle-right"
                color='black'
                size={32}
            />
            </TouchableHighlight>
        </KeyboardAvoidingView>
    )
  }
}

NextButton.propTypes = {
    handleOnPress: PropTypes.func
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'flex-end',
        right: 20,
        bottom: 20,
        position: 'absolute'
      
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: `${Colors.GuestText}`,
        opacity: 0.6
    },

})