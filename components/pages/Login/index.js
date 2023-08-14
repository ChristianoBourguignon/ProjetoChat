import { Text, View, TouchableOpacity, TextInput, Image, Keyboard } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./styles";
import { useState } from "react";
export default function Login(){
    const [registro, setRegistro] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.containerLogin}>
                <View style={styles.containerLogo}>
                    <Image source={require('../../../assets/pessoa1.jpg')} style={styles.Logo}/>
                </View>
                <View style={styles.containerButtonRegistro}>
                    <TouchableOpacity style={styles.buttonRegistro} onPress={() => setRegistro(true)}>
                        <Text style={styles.buttonTxt}>Registrar-se</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRegistro} onPress={() => setRegistro(false)}>
                        <Text style={styles.buttonTxt}>Logar</Text>
                    </TouchableOpacity>
                </View>
                {registro ? (
                    <View style={styles.containerForm}>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>Nome: </Text>
                            <TextInput
                                placeholder='Digite seu nome!'
                                placeholderTextColor='#fff'
                                style={styles.caixaInput}
                        />
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>E-mail: </Text>
                            <TextInput
                                placeholder='Digite seu e-mail!'
                                placeholderTextColor='#fff'
                                style={styles.caixaInput}
                        />
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>Senha: </Text>
                            <TextInput
                                placeholder='Digite sua senha!'
                                placeholderTextColor='#fff'
                                style={styles.caixaInput}
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>Confirme sua senha: </Text>
                            <TextInput
                                placeholder='Confirme sua senha!'
                                placeholderTextColor='#fff'
                                style={styles.caixaInput}
                            />
                        </View>
                        <TouchableOpacity style={styles.buttonLogar}>
                            <Text style={styles.buttonLogarTxt}>Criar a Conta</Text>
                        </TouchableOpacity>
                    </View>
                    ) : (
                    <View style={styles.containerForm}>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>E-mail: </Text>
                            <TextInput
                                placeholder='Digite seu e-mail!'
                                placeholderTextColor='#fff'
                                style={styles.caixaInput}
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>Senha: </Text>
                            <TextInput
                                placeholder='Digite sua senha!'
                                placeholderTextColor='#fff'
                                style={styles.caixaInput}
                            />
                        </View>
                        <TouchableOpacity style={styles.buttonLogar}>
                            <Text style={styles.buttonLogarTxt}>Logar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    )
}