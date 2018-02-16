import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    navbar: {
        marginTop: 20
    },
    container: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#56B99D',
    },
    header: {
        marginTop: 20,
        flex: 1,
    },
    content: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    loginLabelView: {
        flex: 3,
        justifyContent: 'center'
    },
    loginLabel: {
        fontSize: 50,
        fontFamily: 'Pacifico',
        color: 'white'
    },
    form: {
        flex: 7,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    input: {
        height: 50,
        width: 300,
        margin: 3,
        borderRadius: 7,
        backgroundColor: 'white',
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 20
    },
    footerButton: {
        backgroundColor: 'white',
        alignItems: 'center',
        flex: 1/2,
        justifyContent: 'center'
    },
    buttonTextLogin: {
        color: '#56B99D',
        fontSize: 20
    },
    loginErrorText: {
        color: 'red',
        fontSize: 15,
        marginTop: 5,
        textAlign: 'center'
    }
});