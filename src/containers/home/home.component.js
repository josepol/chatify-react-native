import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, ScrollView, AsyncStorage } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Navbar from '../../components/navbar/navbar.component';
import Menu from '../../components/menu/menu.component';
import TitleComponent from './components/title/title.component';
import styles from './home.styles';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
			userLoginData: ''
		};
		AsyncStorage.getItem('userLoginData')
			.then(data => JSON.parse(data))
			.then(userLoginData => this.setState({userLoginData}));
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
						<Text>{this.state.userLoginData.username}</Text>
					</ScrollView>
				</View>
			</SideMenu>
		);
	}
}