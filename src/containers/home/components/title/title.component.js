import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import styles from './title.style';

export default class TitleComponent extends Component {
    constructor() {
        super();
        this.state = {
            isModalVisible: false
        } 
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
                <Modal style={styles.modal} 
                    isVisible={this.state.isModalVisible}
                    backdropOpacity='0'>
                    <View style={{ flex: 1 }}>
                    <Text>I am the modal content!</Text>
                    </View>
                </Modal>
            </View>
        );
    }

    openModal() {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        });
    }
}