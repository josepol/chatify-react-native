import React, { Component } from 'react'
import { StyleSheet, View, Button, Text, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import Modal from "react-native-modal"
import styles from './friend-profile-modal.component.style'

export default class FriendProfileModalComponent extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Modal style={styles.modal} 
                isVisible={this.props.isModalVisible}
                backdropOpacity={0}>
                <Icon style={styles.closeIcon} name='close' onPress={() => this.openModal()}></Icon>
                <View style={{ flex: 1 }}>
                    <Text>I am the modal content!</Text>
                </View>
            </Modal>
        )
    }
}