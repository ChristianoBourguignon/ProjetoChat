import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#100126',
        height: '100%',
        alignItems: 'center',
    },
    containerLogin: {
        margin: 20,
    },
    Logo: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderColor: '#fff',
        alignContent: 'center'
    },
    containerButtonRegistro: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    containerLogo: {
        marginBottom: 20,
        alignItems: 'center'
    },
    buttonRegistro: {
        padding: 20,
        marginHorizontal: 20,
        backgroundColor: '#6D3E8C',
        width: '50%',
        borderRadius: 20,
    },
    buttonTxt: {
        textAlign: 'center',
        color: '#fff',
    },
    containerForm: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    label: {
        color: '#100126',
        fontWeight: 'bold',
        padding: 10,
        fontSize: 20,
        width: '40%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    caixaInput: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        width: '75%',
        textAlign: 'center',
        color: '#fff',
    },
    buttonLogar: {
        borderWidth: 1,
        borderColor: '#fff',
        marginVertical: 10,
        padding: 20,
        borderRadius: 20,
        width: '40%',
    },
    buttonLogarTxt: {
        color: '#fff',
        textAlign: 'center'
    }
})

export default styles;