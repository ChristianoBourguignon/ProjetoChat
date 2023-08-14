import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Inicio from './components/pages/Inicio';
import Chat from './components/pages/Chat';
import Login from './components/pages/Login';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator
      screenOptions={{
        activeTintColor: 'blue', // Cor do item selecionado
        inactiveTintColor: 'black', // Cor dos itens não selecionados
      }}
      drawerStyle={{
        backgroundColor: 'lightgray', // Cor de fundo da barra lateral
        width: 240, // Largura da barra lateral
      }}
      
      >
        <Drawer.Screen name="Inicio" component={Inicio}
          options={{
            title: 'Olá, Christiano',
              headerStyle: {
              backgroundColor: '#6D3E8C',
          },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity style={{marginHorizontal: 20,}} onPress={() => alert('Faz nada')}>
              <Ionicons name='person-circle-outline' size={32} color='#fff' />
            </TouchableOpacity>
          )}}
          />
        <Drawer.Screen name="Chat" component={Chat}
          options={{
            title: 'Chat',
              headerStyle: {
              backgroundColor: '#6D3E8C',
          },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
          }}}
        />
         <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f00'

  }
})
