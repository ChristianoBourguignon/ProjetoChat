import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#100126',
      height: '100%',
    },
    texto: {
      color: '#fff'
    },
    tinyFoto: {
      width: 100,
      height: 100,
      marginRight: 10,
      borderRadius: 90,
      borderWidth: 1,
      borderColor: '#fff',
    },
    containerContatos: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 5,
      marginVertical: 10,
      borderWidth: 1,
      padding: 10,
      borderColor: '#6D3E8C',
      borderRadius: 20,
    }
  });

export default styles;