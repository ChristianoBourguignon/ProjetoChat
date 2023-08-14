import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#100126',
        height: '100%'
    },
    containerConversa: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tinyFoto: {
        width: 80,
        height: 80,
        borderRadius: 90,
        borderWidth: 1,
        borderColor: '#fff',
    },
    containerFoto: {
        marginLeft: 20,
        marginRight: 5,
        marginVertical: 20,
    },
    txtNome: {
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 10,
    },
    containerConversaDaPessoa: {
        minWidth: '75%',
        maxWidth: '75%'
    },
    mensagem: {
        borderWidth: 1,
        marginHorizontal: 10,
        borderColor: '#fff',
        padding: 10,
        borderRadius: 10,
    },
    minhaFalaContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    caixaDeTexto: {
        backgroundColor: '#6D3E8C',
        height: '10%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        position: 'absolute',
        bottom: 0,
    },
    buttonEnviar:{
        borderWidth: 1,
        borderRadius: 20,
        width: '20%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    txtInput: {
        borderWidth: 1,
        borderRadius: 10,
        height: '80%',
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }

})

export default styles;