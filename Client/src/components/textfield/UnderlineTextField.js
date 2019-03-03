import React, { Component } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types';
import * as Colors from '../../config/Colors';
import Icon from 'react-native-vector-icons/FontAwesome'
export default class UnderlineTextField extends Component {
    constructor(props) {
        super(props);

        this.state={
            passwordToggler: props.isHidden
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            passwordToggler: nextProps.isHidden
        })
    }
    render() {
    const { keyboardType, placeholder, input, onTogglePress, isHidden } = this.props;
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor='white'
                style={[{}, styles.text]}
                keyboardType={keyboardType === null ? 'default' : keyboardType}
                autoFocus={true}
                autoCorrect={false}
                underlineColorAndroid="transparent"
                secureTextEntry={this.state.passwordToggler}     
            />
             {input === 'password' ? <Icon style={styles.icon} name="eye" size={24} color={Colors.Highlight} onPress={onTogglePress}/> : null}
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
        flexDirection: 'row',
        borderBottomColor: 'white',
        
    }, 
    text: {
        color: Colors.GuestText,
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
    },
    icon: {
        padding: 10,
    }
})