import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'
import Modal from "react-native-modal"
import FriendProfileModalComponent from '../friend-profile-modal/friend-profile-modal.component'
import styles from './title.style';

export default class TitleComponent extends Component {
    constructor() {
        super();
        this.state = {
            isModalVisible: false
        } 
    }

    openModal() {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        });
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.contentItem} onPress={() => this.openModal()}>
                    <View>
                        <Text>{this.props.title}</Text>
                        <Text>{this.props.subtitle}</Text>
                    </View>
                </TouchableOpacity>
                <FriendProfileModalComponent isModalVisible={this.state.isModalVisible} />
            </View>
        );
    }
}