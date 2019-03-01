import React, { Component } from 'react'
import { Text, StyleSheet, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types';

export default class RoundedButton extends Component {
    render() {
    const { text, textColor,backgroundColor, borderColor } = this.props;
    return (
      <TouchableHighlight style={[{backgroundColor}, {borderColor}, styles.container]}>
        <Text style={ [{color: textColor} ,styles.text]}>{text}</Text>
      </TouchableHighlight>
    )
  }
}

RoundedButton.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,

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
        width: '100%'
    }
})