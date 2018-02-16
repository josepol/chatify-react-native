import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './navbar.styles';

export default class Navbar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.navbar}>
                <Text style={styles.polsastre}>Petify Home</Text>
                <Icon.Button name="menu"
                    style={styles.icon}
                    onPress={() => this.openSideBarMenu()}>
                </Icon.Button>
            </View>
        );
    };

    openSideBarMenu() {
        this.props.navigation.state.routes[1].params.openMenu();
    }
}