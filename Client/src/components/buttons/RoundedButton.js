import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import * as Colors from '../../config/Colors';

export default class RoundedButton extends Component {
    render() {
    const { text, textColor, backgroundColor, borderColor, handleOnPress } = this.props;
    return (
      <TouchableOpacity style={[{backgroundColor}, {borderColor}, styles.container]} underlayColor={Colors.Highlight} activeOpacity={0.7}
        onPress={handleOnPress}  disabled={false}
      >
        <Text style={ [{color: textColor} ,styles.text]}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

RoundedButton.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    handleOnPress: PropTypes.func
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 15,
        marginTop: 10,
        borderWidth: 0.4,
        borderRadius: 40
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        width: '100%',
        letterSpacing: 2
    }
})