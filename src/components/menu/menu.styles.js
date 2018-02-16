import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderColor: '#56B99D',
        borderLeftWidth: 1
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        flexDirection: 'column',
        backgroundColor: '#56B99D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    profileInfo: {
        padding: 20,
        marginLeft: 5
    },
    profileInfoText: {
        color: '#56B99D',
        paddingBottom: 5,
    },
    profileIcon: {
        color: 'white',
        fontSize: 80,

    },
    links: {
        padding: 10,
        flex: 2,
    },
    link: {
        backgroundColor: '#56B99D',
        borderRadius: 10,
        padding: 10,
        marginBottom: 4
    },
    linkText: {
        color: 'white'
    }
});
