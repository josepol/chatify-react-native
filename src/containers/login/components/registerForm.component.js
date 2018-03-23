import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from '../login.styles';

export default class RegisterFormComponent extends Component {
    constructor() {
        super();
        this.state = {
            login: {
                username: '',
                password: '',
                repeatPassword: '',
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
                password: password,
                repeatPassword: this.state.login.repeatPassword
            }
        });
    }

    passwordRepeatChangeListener(password) {
        this.setState({
            login: {
                username: this.state.login.username,
                password: password
            }
        });
    }

    register() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.navbar}></Text>
                <View style={styles.content}>
                    <View style={styles.loginLabelView}><Text style={styles.loginLabel}>Registro</Text></View>
                    <View style={[styles.form, styles.formRegister]}>
                        <TextInput style={styles.input} onChangeText={(username) => this.usernameChangeListener(username)} placeholder={'usuario'} />
                        <TextInput secureTextEntry={true} style={styles.input} onChangeText={(password) => this.passwordChangeListener(password)} placeholder={'password'}/>
                        <TextInput secureTextEntry={true} style={styles.input} onChangeText={(password) => this.passwordRepeatChangeListener(password)} placeholder={'repetir password'}/>
                        <TextInput secureTextEntry={true} style={styles.input} onChangeText={(password) => this.passwordRepeatChangeListener(password)} placeholder={'repetir password'}/>
                        <TouchableOpacity style={styles.link} onPress={() => this.props.goToLogin()}><Text style={styles.linkText}>Iniciar sesión</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footerButton}>
                    <TouchableOpacity onPress={() => this.register()} >
                        <Text style={styles.buttonTextLogin}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}