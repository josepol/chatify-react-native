import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AuthService from '../../services/auth.service';
import LoginFormComponent from './components/loginForm.component';

export default class Login extends Component {
    constructor() {
        super();
    }

    static navigationOptions = {
		header: null
    };

    render() {
        return (
            <LoginFormComponent/>
        );
    }
}


