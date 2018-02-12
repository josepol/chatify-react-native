import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, ScrollView } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Navbar from '../../components/navbar/navbar.component';
import Menu from '../../components/menu/menu.component';
import TitleComponent from './components/title/title.component';
import styles from './home.styles';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		};
	}

	static navigationOptions = {
		header: ({navigation}) => {
			return (
				<Navbar navigation={navigation}></Navbar>
			)
		}
	};

	componentDidMount() {
		this.props.navigation.setParams({ openMenu: this.openMenu.bind(this) });
	}

    menuChangeListener() {
    	
	}

	openMenu() {
        this.setState({
			isOpen: !this.state.isOpen
        });
	}
	
	openLogin() {
		this.props.navigation.navigate('Login');
	}

	render() {
		return (
			<SideMenu
				menu={<Menu navigation={this.props.navigation} />}
				menuPosition={'right'}
				isOpen={this.state.isOpen}
				onChange={isOpen => this.menuChangeListener()}>
				<View style={styles.container}>
					<ScrollView>
						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={styles.contentContainer}>
							<TitleComponent title='Developer' subtitle='Developer description' />
							<TitleComponent title='Blogger' subtitle='Blogger Madaf...' />
							<TitleComponent title='Freelancer' subtitle='Freelancer workaholic' />
						</ScrollView>
						<Button
							title="Open menu"
							onPress={() => this.openMenu()}
							accessibilityLabel="open menu"
						/>
						<Button
							title="Open logim"
							onPress={() => this.openLogin()}
							accessibilityLabel="open login"
						/>
					</ScrollView>
				</View>
			</SideMenu>
		);
	}
}