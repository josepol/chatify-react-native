import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './menu.styles';

export default class Menu extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>I am the real menu</Text>
                <Text>I am the real menu</Text>
                <Text>I am the real menu</Text>
                <Text>I am the real menu</Text>
                <Text>I am the real menu</Text>
            </View>
        );
    }
}