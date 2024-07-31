import { StyleSheet } from 'react-native'
// #f7f7f7 (light gray)
// #e4edfb (light blue)
// #ff8856 (orange)
// #f74933 (red-orange)
// #87c5fe (sky blue)
export default HeaderStyle = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#ff8856',
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        gap: 5
    },
    headerHeading: {
        color: 'white',
        fontSize: 28,
        fontWeight: '500'
    },
    logo: {
        height: 32,
        width: 32
    }
})