import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    navbar: {
        height: 65,
        backgroundColor: '#56B99D',
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
		flex: 1,
        textAlign: 'center'
    },
    icon: {
		backgroundColor: '#56B99D',
		paddingTop: 25,
    },
    polsastre: {
        flex: 3,
        textAlign: 'left',
		paddingLeft: 10,
		paddingTop: 10,
        fontSize: 30,
        color: 'white',
		fontFamily: 'Pacifico',
		backgroundColor: '#56B99D'
    },
});