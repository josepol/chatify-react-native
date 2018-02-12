import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './login.styles';
import SideMenu from 'react-native-side-menu';
import Menu from '../../components/menu/menu.component';

export default class Login extends Component {
    constructor() {
        super();
    }

    static navigationOptions = {
		header: null
	};

    render() {
        return (
            <View style={styles.container}>
                <Text>Login view</Text>
            </View>
        );
    }
}