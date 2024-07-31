import { StyleSheet } from "react-native";

export default createTodoBtnStyle = StyleSheet.create({
    addBtn: {
        backgroundColor: '#ff8856', 
        padding: 15,
        borderRadius: 50, 
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
    },
    btnContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});