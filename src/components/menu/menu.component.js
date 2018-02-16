import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, AsyncStorage, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './menu.styles';

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            userLoginData: ''
        }
        AsyncStorage.getItem('userLoginData').then(userLoginData => JSON.parse(userLoginData))
        .then(userLoginData => this.setState({userLoginData}));
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.profile}>
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileInfoText}>{this.state.userLoginData.username}</Text>
                    </View>
                    <View style={styles.profileImage}>
                        <Icon name={'user'} style={styles.profileIcon}></Icon>
                    </View>
                </View>
                <View style={styles.links}>
                    <TouchableWithoutFeedback onPress={() => this.logout()}>
                        <View style={styles.link}><Text style={styles.linkText}>Ver perfil</Text></View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.logout()}>
                        <View style={styles.link}><Text style={styles.linkText}>Logout</Text></View>
                    </TouchableWithoutFeedback>
                </View>
                </ScrollView>
            </View>
        );
    }

    logout() {
        AsyncStorage.removeItem('userLoginData');
        this.props.navigation.navigate('Login');
    }
}