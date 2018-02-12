import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import styles from './menu.styles';

export default class Menu extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback style={styles.link} onPress={() => this.navigateToLogin()}>
                    <Text>Iniciar sesión</Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    navigateToLogin() {
        this.props.navigation.navigate('Login');
    }
}