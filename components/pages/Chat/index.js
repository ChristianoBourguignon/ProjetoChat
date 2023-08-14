import { Text, View, TouchableOpacity, TextInput, Image, Keyboard } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./styles";
export default function Chat( {navigation , route} ){
    return (
        <View style={styles.container}>

            {/* Conversa da Pessoa */}
            <View style={styles.containerConversa}> 
                <View style={styles.containerFoto}>
                    <Image
                        style={styles.tinyFoto}
                        source={require('../../../assets/pessoa1.jpg')}
                    />
                </View>
                <View style={styles.containerConversaDaPessoa}>
                    <View>
                        <Text style={styles.txtNome}> Patricia </Text>
                    </View>
                    <View style={styles.mensagem}>
                        <Text style={{color: '#fff'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    </View>
                </View>
            </View>

            {/* Minha Conversa */}
            <View style={styles.containerConversa}> 
                <View style={styles.minhaFalaContainer}>
                    <View style={styles.containerFoto}>
                        <Image
                            style={styles.tinyFoto}
                            source={require('../../../assets/pessoa2.jpg')}
                        />
                    </View>
                    <View style={styles.containerConversaDaPessoa}>
                        <View>
                            <Text style={styles.txtNome}> João </Text>
                        </View>
                        <View style={styles.mensagem}>
                            <Text style={{color: '#fff'}}>Duis gravida laoreet condimentum. </Text>
                        </View>
                    </View>
                </View>
            </View>


            {/* Caixa de Mensagem e Botão */}
            <View style={styles.caixaDeTexto}>
                <TextInput 
                placeholder={'Digite sua mensagem...'}
                style={styles.txtInput}
                />
                <TouchableOpacity style={styles.buttonEnviar} onPress={() => Keyboard.dismiss()}>
                    <Text style={{alignItems:'center'}}><Ionicons name='arrow-back' size={32} color='#6D3E8C' /></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}