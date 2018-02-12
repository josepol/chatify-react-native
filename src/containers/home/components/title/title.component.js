import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './title.style';

export default class TitleComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <TouchableOpacity style={styles.contentItem}>
                <Text>{this.props.title}</Text>
                <Text>{this.props.subtitle}</Text>
            </TouchableOpacity>
        );
    }
}