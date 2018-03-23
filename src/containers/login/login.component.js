import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AuthService from '../../services/auth.service';
import LoginFormComponent from './components/loginForm.component';
import RegisterFormComponent from './components/registerForm.component';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            isRegister: false
        }
    }

    static navigationOptions = {
		header: null
    };

    form() {
        if (this.state.isRegister) {
            return(<RegisterFormComponent navigation={this.props.navigation} goToLogin={() => this.setState({isRegister: false})}/>);
        } else {
            return(<LoginFormComponent navigation={this.props.navigation} goToRegister={() => this.setState({isRegister: true})}/>);
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.form()}
            </View>
        );
    }
}


