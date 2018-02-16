import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AuthService from '../../../services/auth.service';
import styles from '../login.styles';

export default class LoginFormComponent extends Component {
    authService = new AuthService();
    constructor() {
        super();
        this.state = {
            login: {
                username: '',
                password: ''
            },
            loginCredentialsError: false
        }
    }

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

    renderLoginError() {
        if (this.state.loginCredentialsError) {
            return (<Text style={styles.loginErrorText}>Usuario o contraseña incorrectos</Text>);
        }
    }

    login() {
        if (!this.state.login.username || !this.state.login.password) {
            return;
        }
        this.authService.login(this.state.login)
            .then(result => {
                console.log('login response', result);
                this.props.navigation.navigate('Home');
            })
            .catch(error => {
                if (error.response.status === 403) {
                    this.setState({
                        loginCredentialsError: true
                    });
                }
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.navbar}></Text>
                <View style={styles.content}>
                    <View style={styles.loginLabelView}><Text style={styles.loginLabel}>Petify</Text></View>
                    <View style={styles.form}>
                        <TextInput color={'#56B99D'} style={styles.input} onChangeText={(username) => this.usernameChangeListener(username)} placeholder={'usuario'} />
                        <TextInput secureTextEntry={true} color={'#56B99D'} style={styles.input} onChangeText={(password) => this.passwordChangeListener(password)} placeholder={'password'}/>
                        {this.renderLoginError()}
                    </View>
                </View>
                <View style={styles.footerButton}>
                    <TouchableOpacity onPress={() => this.login()} >
                        <Text style={styles.buttonTextLogin}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}