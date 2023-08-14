import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import styles from "./styles";

export default function Inicio(){
        const contatos = [
          { nome: 'Patricia', foto: require('../../../assets/pessoa1.jpg') },
          { nome: 'João', foto: require('../../../assets/pessoa2.jpg') },
          { nome: 'Maria', foto: require('../../../assets/pessoa3.jpg') },
          { nome: 'Carlos', foto: require('../../../assets/pessoa4.jpg') },
        ];
    return (
        <View style={styles.container}>
            {contatos.map((contatos, index) => (
                <View style={styles.containerContatos} key={index}> 
                    <View style={styles.containerFoto}>
                        <Image
                            style={styles.tinyFoto}
                            source={contatos.foto}
                        />
                    </View>
                    <View style={styles.containerNome}>
                        <Text style={styles.texto}> {contatos.nome} </Text>
                    </View>
                </View>
            ))}
        </View>
    )
}