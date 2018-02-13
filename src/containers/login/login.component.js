import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './login.styles';
import SideMenu from 'react-native-side-menu';
import Menu from '../../components/menu/menu.component';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: {
                username: '',
                password: ''
            }
        }
    }

    static navigationOptions = {
		header: null
    };
    
    usernameChangeListener(username) {
        this.setState({
            login: {
                username: username,
                password: this.state.login.password
            }
        });
    }

    passwordChangeListener(password) {
        this.setState({
            login: {
                username: this.state.login.username,
                password: password
            }
        });
    }

    login() {
        console.log(this.state.login);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Login view</Text>
                <TextInput style={styles.input} onChangeText={(username) => this.usernameChangeListener(username)} placeholder={'username'} />
                <TextInput style={styles.input} onChangeText={(password) => this.passwordChangeListener(password)} placeholder={'password'}/>
                <Button title={'Login'} onPress={() => this.login()} />
            </View>
        );
    }
}